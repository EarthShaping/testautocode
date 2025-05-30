import type { AgentState } from "../state";


export const escalation = async (state: AgentState) => {
  return {
    messages: [...state.messages, {
      role: "assistant",
      content: `🙋 This seems outside my scope. Would you like me to connect you with a support agent now?`,
    }],
  };
};
