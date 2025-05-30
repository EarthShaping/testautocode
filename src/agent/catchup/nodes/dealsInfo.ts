import type { AgentState } from "../state";


export const dealsInfo = async (state: AgentState) => {
  const deals = `🎉 Current promotions: 
- Deal 1: 20% off spa services
- Deal 2: Buy 1 get 1 free lunch combo`;

  return {
    messages: [...state.messages, { role: "assistant", content: deals }],
  };
};
