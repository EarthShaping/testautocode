import type { AgentState } from "../state";

export const fallback = async (state: AgentState) => {
  return {
    messages: [...state.messages, { 
      role: "assistant", 
      content: "I'm not sure how to handle that request." 
    }]
  };
};