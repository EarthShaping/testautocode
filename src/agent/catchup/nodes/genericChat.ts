// Nodo per gestire la chat generica utilizzando un LLM

import { AIMessage, SystemMessage, type BaseMessage } from "@langchain/core/messages";
import type { AgentState } from "../state";
import { llm } from "../models/model";



export async function genericChat(state: AgentState): Promise<Partial<AgentState>> {
  console.log("--- NODO: handleGenericChatNodeLLM ESEGUITO ---");
  const relevantHistory = state.messages.slice(-5); // Prendi gli ultimi 5 messaggi per contesto

  const promptMessages: BaseMessage[] = [
    new SystemMessage("Sei un assistente conversazionale arguto e interessato. Continua la conversazione in modo coinvolgente basandoti sullo storico recente."),
    ...relevantHistory, // Includi lo storico recente nel prompt
  ];

  // Se l'ultimo messaggio non è già una richiesta di continuazione, potremmo aggiungerne una.
  // Per semplicità, assumiamo che l'LLM capisca di dover continuare la conversazione.

  const response = await llm.invoke(promptMessages);
  console.log(`Risposta LLM (Chat Generica): ${response.content}`);
return {
    messages: [new AIMessage({ content: response.content })],
  };
}