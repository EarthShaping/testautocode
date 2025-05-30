import type { AgentState } from "../state";
import { AIMessage } from "@langchain/core/messages";


export const askLocation = async (state: AgentState) => {
  console.log("Debug: askLocation",state);
  const messageContent = "Per quale luogo vorresti cercare le offerte?";
  return {
    messages: [new AIMessage(messageContent)],
    searchDealsData: { ...state.searchDealsData, last_asked_param: "location" },
    is_awaiting_confirmation: false,
    last_agent_question: messageContent
  };
};


export const checkMissingDealData = async (
  state: AgentState,
): Promise<Partial<AgentState>> => {
  const { searchDealsData, nluOutput } = state;
  console.log("Debug: checkMissingDealData",state);
  let nextNode = "fallback";
  
  if (nluOutput?.intent !== "find_service") nextNode = "fallback";
  else if (!searchDealsData) nextNode = "fallback";
  else if (!searchDealsData.location || !searchDealsData.location_confirmed)
    nextNode = "ask_Location";
  else if (!searchDealsData.date || !searchDealsData.date_confirmed)
    nextNode = "ask_Date";
  else if (!searchDealsData.time || !searchDealsData.time_confirmed)
    nextNode = "ask_Time";
 // else if (!searchDealsData.max_cost_confirmed) nextNode = "askCost";
  else nextNode = "confirm_Search_Parameters";
  
  return {
    ...state,
    next: nextNode
  };
};

export const findService = async (state: AgentState) => {
  //const { businessId } = state;
  //    const { data, error: fetchError } = await supabase
  //         .from('businesses_with_counts')
  //         .select(`
  //           id, name, address, description, created_at, updated_at,
  //           latitude, longitude, photos, owner_id, category_id,
  //           email, phone, website, deal_count, booking_count, pending_booking_count
  //         `)
  //         .eq('id', businessId).maybeSingle();

  //       if (fetchError) {
  //         throw new Error(fetchError.message);
  //       }

  return {
    messages: [
      ...state.messages,
      { role: "assistant", content: "Searching..." },
    ],
  };
};
