import { type AgentState } from "../state";

//export const callModel = async (state: typeof MessagesAnnotation.State) => {

export const bookingHandler = async (state: AgentState) => {
  const bookingInfo = `🔎 Retrieved booking details for user ${state.userId}.`;
  return {
    messages: [...state.messages, { role: "assistant", content: bookingInfo }],
  };
};
