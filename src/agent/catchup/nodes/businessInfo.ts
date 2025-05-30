import type { AgentState } from "../state";


export const businessInfo = async (state: AgentState) => {
  const info = `🏢 Business Address: 123 Market St.\n📞 Contact: (123) 456-7890`;

  return {
    messages: [...state.messages, { role: "assistant", content: info }],
  };
};
