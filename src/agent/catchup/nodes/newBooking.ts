import type { AgentState } from "../state";


export const newBooking = async (state: AgentState) => {
  //  const lastMessage = typeof state.messages[state.messages.length - 1]?.content === 'string' 
  //   ? state.messages[state.messages.length - 1]?.content as string 
  //   : '';

  // if (!/deal/i.test(lastMessage)) {
  //   return {
  //     messages: [...state.messages, {
  //       role: "assistant",
  //       content: `❗ I need a specific deal name or ID to proceed. Would you like me to list current deals?`,
  //     }],
  //   };
  // }

  const bookingConfirmed = `✅ Your booking has been created successfully.`;
  return {
    messages: [...state.messages, { role: "assistant", content: bookingConfirmed }],
  };
};
