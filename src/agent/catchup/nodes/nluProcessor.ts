import {
  AIMessage,
  HumanMessage,
  SystemMessage,
} from "@langchain/core/messages";
import { type AgentState } from "../state";
import { llm } from "../models/model";
import { Schema, z } from "zod";
import { POSSIBLE_INTENTS, type NLUOutput } from "../types";
import { ChatOpenAI } from "@langchain/openai";
// export const classifier = async (state: AgentState) => {
//   const lastMessage = typeof state.messages[state.messages.length - 1]?.content === 'string'
//     ? state.messages[state.messages.length - 1]?.content as string
//     : '';

//   if (!lastMessage.trim()) return { next: "emptyMsg" };
//   if (/book/i.test(lastMessage)) return { next: "bookingHandler" };
//   if (/cancel|change/i.test(lastMessage)) return { next: "modifyCancel" };
//   if (/deal|promo/i.test(lastMessage)) return { next: "dealsInfo" };
//   if (/info|address|contact/i.test(lastMessage)) return { next: "businessInfo" };

//   return { next: "escalation" };
// };
// Define schema for validation
const intentSchema = z.object({
  intent: z.enum([
    "bookingHandler",
    "newBooking",
    "modifyCancelBooking",
    "dealsInfo",
    "businessInfo",
    "emptyMsg",
  ]),
  details: z.string(),
  confidence: z.number(),
  reasoning: z.string(),
  next: z.string(),
});

// const intentSchema = z.object({
//   intent: z.string().describe("string describing the primary intent"),
//   details: z.record(z.any()).describe("Additional details about the intent"),
//   confidence: z
//     .number()
//     .min(0)
//     .max(1)
//     .describe("number between 0 and 1 representing the confidence in the intent identification"),
//   reasoning: z.string().describe("string describing the reasoning behind the intent identification"),
//   next: z.string().describe("string representing the next node to go to"),
// });
// Lista di intenti possibili (esempio)

export const nluProcessor = async (state: AgentState) => {
  const { messages } = state;

  const lastUserInputMessage = state.messages[messages.length - 1];
  if (lastUserInputMessage.getType() !== "human") {
    console.warn("NLU Node: L'ultimo messaggio non è dell'utente. Salto NLU.");
    return {
      nluOutput: {
        intent: "generico_chiacchiera",
        entities: {},
        originalInput: "",
      },
    }; // O gestisci diversamente
  }
  const userInput = lastUserInputMessage.content as string;

  console.log(`--- NODO NLU: INIZIO ANALISI PER INPUT: "${userInput}" ---`);

  const systemPrompt = `
You are an expert NLU assistant. Your task is to analyze the user's text and identify the main intent and any relevant entities.
ALWAYS respond with a valid JSON object ONLY.

Possible intents: ${POSSIBLE_INTENTS.join(", ")}.

Entities to extract (if present):
- "service": the specific type of service requested (e.g., "haircut", "dinner", "massage")
- "datetime": any reference to dates or times (e.g., "today", "tomorrow at 3:00 PM", "next week")
- "location": any reference to a place (e.g., "near me", "downtown", "10 Roma Street")
- "offer_name": if the user mentions a specific offer by name
- "service_category": a broader category of the service (e.g., "restaurants", "wellness", "shopping")
- "contact_person": if the user mentions a specific person by name (e.g., "talk to Marco")

Expected JSON output format:
{
  "intent": "<intento_identificato_dalla_lista>",
  "entities": {
    "service": "<valore_estratto_o_null>",
    "datetime": "<valore_estratto_o_null>",
    "location": "<valore_estratto_o_null>",
     // ... other entities as defined above
  }
}

If you're unable to clearly identify an intent from the list or the input is not understandable, use the "not_understood" intent.
If the input is simple small talk or a greeting, use the appropriate intent (e.g., "greeting", "generic_chat").
`;
  const nluModel = new ChatOpenAI({
    temperature: 0, // Bassa temperatura per compiti di classificazione/estrazione
    modelName: "gpt-3.5-turbo", // o un modello più recente/capace come gpt-4o-mini
  });

  try {
    const response = (await nluModel.invoke([
      new SystemMessage(systemPrompt),
      new HumanMessage(userInput),
    ])) as AIMessage;
    console.log("NLU Node: Risposta grezza LLM:", response);
    let parsedNLU: NLUOutput;
    try {
      // L'LLM dovrebbe restituire una stringa JSON, quindi la parsiamo
      const jsonResponse = JSON.parse(response.content as string);
      parsedNLU = {
        intent: jsonResponse.intent || "not_understood",
        entities: jsonResponse.entities || {},
        originalInput: userInput,
      };
    } catch (parseError) {
      console.error(
        "NLU Node: Errore nel parsing della risposta JSON dall'LLM:",
        parseError,
      );
      console.error("NLU Node: Risposta grezza LLM:", response.content);
      parsedNLU = {
        intent: "not_understood",
        entities: {},
        originalInput: userInput,
        error: "Impossibile parsare la risposta NLU dall'LLM.",
      };
    }

    console.log("--- NODO NLU: OUTPUT ANALISI ---");
    console.log("parsedNLU:", JSON.stringify(parsedNLU, null, 2));
    state.next = parsedNLU.intent || "not_understood";
    
    // Populate searchDealsData from entities if intent is search_deals
    let searchDealsData = { ...(state.searchDealsData || {}) };
    console.log("searchDealsData pre:", parsedNLU.intent);
    if (parsedNLU.intent === "find_service") {
      // Map entities to searchDealsData fields
      if (parsedNLU.entities.location) {
        searchDealsData.location = parsedNLU.entities.location;
        // Don't auto-confirm if it's "near me" or similar relative locations
        searchDealsData.location_confirmed =    !["vicino a me", "near me", "nearby"].includes(parsedNLU.entities.location.toLowerCase());
      }
      
      if (parsedNLU.entities.datetime) {
        // Handle date extraction
        const dateMatch = parsedNLU.entities.datetime.match(/\d{4}-\d{2}-\d{2}/);
        if (dateMatch) {
          searchDealsData.date = dateMatch[0];
          searchDealsData.date_confirmed = true;
        } else if (["oggi", "today", "tomorrow", "domani"].includes(parsedNLU.entities.datetime.toLowerCase())) {
          searchDealsData.date = parsedNLU.entities.datetime;
          searchDealsData.date_confirmed = false; // Needs normalization
        }
        
        // Handle time extraction
        const timeMatch = parsedNLU.entities.datetime.match(/\d{1,2}:\d{2}/);
        if (timeMatch) {
          searchDealsData.time = timeMatch[0];
          searchDealsData.time_confirmed = true;
        } else if (["mattina", "pomeriggio", "sera", "stasera", "morning", "afternoon", "evening"].includes(
          parsedNLU.entities.datetime.toLowerCase()
        )) {
          searchDealsData.time = parsedNLU.entities.datetime;
          searchDealsData.time_confirmed = false; // Needs normalization
        }
      }
      
      console.log("[NLU Node] searchDealsData populated:", searchDealsData);
    }
    
    return { 
      ...state, 
      messages: [response], 
      nluOutput: parsedNLU,
      searchDealsData
    };
  } catch (error) {
    console.error(
      "NLU Node: Errore durante la chiamata all'LLM per NLU:",
      error,
    );
    return {
      ...state, 
      messages: [...state.messages],
      nluOutput: {
        intent: "non_compreso",
        entities: {},
        originalInput: userInput,
        error: "Errore durante l'esecuzione del modello NLU.",
      },
    };
  }
};

//   // Add system prompt for intent identification
//   const systemPrompt = new SystemMessage(
//     `You are an Intent Assistant. Your job is to understand the user's intent from their message and return a JSON string with the identified intent.
//     Always respond with a valid JSON object in the following format:
//     {
//       "intent":  "string describing the primary intent. Only values from [bookingHandler | newBooking | modifyCancelBooking | dealsInfo | businessInfo | emptyMsg]",
//       "details": {
//         // Additional details about the intent
//       },
//       "confidence": "number between 0 and 1 representing the confidence in the intent identification",
//       "reasoning": "string describing the reasoning behind the intent identification",
//       "next": "string representing the next node to go to"
//     }

//     **Here the allowed intent**:
//     - bookingHandler
//     - newBooking
//     - modifyCancelBooking
//     - dealsInfo
//     - businessInfo
//     - emptyMsg

//     Be concise and accurate in your intent identification.`,
//   );

//   // Add system prompt to the beginning of messages
//   const messagesWithSystemPrompt = [systemPrompt, ...messages];
//   //const structuredLlm = llm.withStructuredOutput(messagesWithSystemPrompt);

//   //  const categorizationResponse = await llm.invoke([
//   //     { role: "system", content: SYSTEM_TEMPLATE },
//   //     ...state.messages,
//   //   ]);

//   try {
//     const structuredLlm = llm.withStructuredOutput(intentSchema);
//     const result = await structuredLlm.invoke(messagesWithSystemPrompt);

//     // const aiMessage = result as AIMessage;
//     //const parsed = intentSchema.parse(JSON.parse(aiMessage.content as string));
//     console.log("Categorization Next:", result.next);
//     return { ...state, next: result.next };
//   } catch (error) {
//     console.error("Error in intent classification:", error);
//     return { ...state, next: "emptyMsg" }; // fallback
//   }
// };

//console.log("Classifier state:", state);
// const SYSTEM_TEMPLATE = `<Role>
//   <Identity>
//     You are an Intent Assistant AI designed to interpret and classify user messages based on predefined intents.
//   </Identity>
//   <PrimaryGoals>
//     Your primary goal is to accurately identify the user's intent and return a structured JSON response containing the intent, supporting details, confidence level, reasoning, and the suggested next step.
//   </PrimaryGoals>
// </Role>

// <StaticContext>
//   <BackgroundInformation>
//     You are trained on conversational data and are familiar with patterns of user intents commonly used in booking and business information scenarios.
//   </BackgroundInformation>
//   <DomainDetails>
//     The domain includes booking management, deal inquiries, and business-related queries. The assistant must map user inputs to one of the allowed intents listed below.
//   </DomainDetails>
// </StaticContext>

// <Rules>
//   <DosAndDonts>
//     <Do>Always respond with a valid JSON object following the specified format.</Do>
//     <Do>Ensure each field in the JSON is populated meaningfully and concisely.</Do>
//     <Do>Use clear and logical reasoning to justify the identified intent.</Do>
//     <Don't>Do not make up intents that are not listed in the allowed set.</Don't>
//   </DosAndDonts>
// </Rules>

// <Capabilities>
//   <ToolList>
//     None required.
//   </ToolList>
//   <UsageInstructions>
//     Not applicable.
//   </UsageInstructions>
// </Capabilities>

// <ChainOfThoughtProcess>
//   <ProcessList>
//     Input Analysis, Intent Matching, Confidence Scoring, Justification, Output Structuring
//   </ProcessList>
//   <ProcessUsageInstructions>
//     <InputAnalysis>
//       Analyze the user input to understand the language and detect intent-related keywords or patterns.
//     </InputAnalysis>
//     <IntentValues>
//       Match the input against the following allowed intents:
//       <Intent>
//       bookingHandler
//       </Intent>
//       <Intent>
//       newBooking
//       </Intent>
//       <Intent>
//       modifyCancelBooking
//       </Intent>
//       <Intent>
//       dealsInfo
//       </Intent>
//       <Intent>
//       businessInfo
//       </Intent>
//       <Intent>
//       emptyMsg
//       </Intent>

//     </IntentValues>
//     <ConfidenceScoring>
//       Assign a confidence level between 0 and 1 based on how clearly the input maps to an intent.
//     </ConfidenceScoring>
//     <Justification>
//       Provide reasoning for the selected intent using concise, logical analysis of the input.
//     </Justification>
//     <OutputStructuring>
//       Format the response in a valid JSON object as follows:
//       {
//         "intent": "string describing the primary intent. Only values from <IntentValues> are allowed",
//         "details": { },
//         "confidence": "number between 0 and 1 representing the confidence in the intent identification",
//         "reasoning": "string describing the reasoning behind the intent identification",
//         "next": "string representing the next node to go to"
//       }
//     </OutputStructuring>
//   </ProcessUsageInstructions>
// </ChainOfThoughtProcess>

// <Restrictions>
//   <EthicalSafetyConstraints>
//     Do not fabricate information or respond with undefined intents.
//   </EthicalSafetyConstraints>
//   <HallucinationAccuracy>
//     If unsure about the correct intent, choose the closest match and provide a qualified reasoning with lower confidence.
//   </HallucinationAccuracy>
// </Restrictions>

// <DesiredOutputFormat>
//   <FormattingRequirements>
//     Always return a JSON object with the required keys: intent, details, confidence, reasoning, next.
//   </FormattingRequirements>
// </DesiredOutputFormat>

// <StyleBehaviour>
//   <PreferredStyle>
//     Use clear, concise language suitable for structured interpretation by a system.
//   </PreferredStyle>
// </StyleBehaviour>

// <FewShotExamples>
//   <Scenario1>
//     <User>"I want to change my hotel reservation."</User>
//     <Assistant>{
//       "intent": "modifyCancelBooking",
//       "details": {},
//       "confidence": 0.92,
//       "reasoning": "The user explicitly wants to change an existing booking.",
//       "next": "modifyNode"
//     }</Assistant>
//   </Scenario1>
//   <Scenario2>
//     <User>"Do you have any current offers?"</User>
//     <Assistant>{
//       "intent": "dealsInfo",
//       "details": {},
//       "confidence": 0.89,
//       "reasoning": "The user is asking about promotions or deals.",
//       "next": "dealsNode"
//     }</Assistant>
//   </Scenario2>
// </FewShotExamples>`;
