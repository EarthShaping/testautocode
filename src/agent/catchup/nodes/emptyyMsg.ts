import type { AgentState } from "../state";


export const emptyMsg = async (state: AgentState) => {
  return {
    messages: [...state.messages, {
      role: "assistant",
      content: `🤔 It looks like your message is empty. Do you still need help?`,
    }],
  };
};
