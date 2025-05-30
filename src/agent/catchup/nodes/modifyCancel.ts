import type { AgentState } from "../state";


export const modifyCancel = async (state: AgentState) => {
  return {
    messages: [...state.messages, {
      role: "assistant",
      content: `📝 Please provide your booking reference number so I can proceed with the update or cancellation.`,
    }],
  };
};
