import { SystemMessage } from "@langchain/core/messages";
import type { MessagesAnnotation } from "@langchain/langgraph";
import { llm } from "../models/model";

export const callModel = async (state: typeof MessagesAnnotation.State) => {
  const { messages } = state;
  
  // Add system prompt for intent identification
  const systemPrompt = new SystemMessage(
    `You are an Intent Assistant. Your job is to understand the user's intent from their message and return a JSON string with the identified intent.
    Always respond with a valid JSON object in the following format:
    {
      "intent": "string describing the primary intent",
      "details": {
        // Additional details about the intent
      }
    }
    Be concise and accurate in your intent identification.`
  );
  
  // Add system prompt to the beginning of messages
  const messagesWithSystemPrompt = [systemPrompt, ...messages];
  
  const result = await llm.invoke(messagesWithSystemPrompt);
  return { messages: [result] };
};
