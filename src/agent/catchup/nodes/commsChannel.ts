import type { AgentState } from "../state";


export const commsChannel = async (state: AgentState) => {
  const method = state.communicationMethod || "email";
  const confirmation = `📤 Booking details have been sent via ${method}.`;

  return {
    messages: [...state.messages, { role: "assistant", content: confirmation }],
  };
};
