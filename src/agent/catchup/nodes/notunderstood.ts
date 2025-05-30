import { type AgentState } from "../state";

//export const callModel = async (state: typeof MessagesAnnotation.State) => {

export const notunderstood = async (state: AgentState) => {
  const response = `🔎 Puoi essere chiaro ${state.userId}.`;
  return {
    messages: [...state.messages, { role: "assistant", content: response }],
  };
};
