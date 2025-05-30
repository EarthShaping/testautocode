import { supabase } from "@/integrations/supabase/client";
import { type AgentState } from "../state";
import {
  AIMessage,
  HumanMessage,
  SystemMessage,
} from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";
import { llm } from "../models/model";

//export const callModel = async (state: typeof MessagesAnnotation.State) => {

// Inizializza il modello LLM che useremo per le risposte degli handler

export const greetings = async (state: AgentState) => {
  console.log("--- NODO: handleGreetingNodeLLM ESEGUITO ---");
  const lastUserMessage =
    state.messages.filter((m) => m.getType() === "human").pop()?.content || "";

  const prompt = [
    new SystemMessage(
      `You are a friendly and warm assistant. You respond to the user's greeting naturally in the user language.
       Now is ${new Date().toLocaleDateString()}.
      `,
    ),

  
    new HumanMessage(`User said: ${lastUserMessage || "Ciao!"}`),
  ];
    console.log(new Date().toLocaleString());
  const response = await llm.invoke(prompt);
  console.log(`Risposta LLM (Saluto): ${response.content}`);
  return {
    messages: [new AIMessage({ content: response.content })],
  };

  // const { businessId } = state;
  //  const { data, error: fetchError } = await supabase
  //       .from('businesses_with_counts')
  //       .select(`
  //         id, name, address, description, created_at, updated_at,
  //         latitude, longitude, photos, owner_id, category_id,
  //         email, phone, website, deal_count, booking_count, pending_booking_count
  //       `)
  //       .eq('id', businessId).maybeSingle();

  //     if (fetchError) {
  //       throw new Error(fetchError.message);
  //     }

  // const greetings = `🔎 Hello da ${data?.name || 'unknown business'}.`;

  // return {
  //   messages: [...state.messages, { role: "assistant", content: greetings }],
  // };
};
