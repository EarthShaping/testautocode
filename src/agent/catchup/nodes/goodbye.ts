import { supabase } from "@/integrations/supabase/client";
import type { AgentState } from "../state";

export const goodbye = async (state: AgentState) => {
  const { businessId } = state;
   const { data, error: fetchError } = await supabase
        .from('businesses_with_counts')
        .select(`
          id, name, address, description, created_at, updated_at, 
          latitude, longitude, photos, owner_id, category_id,
          email, phone, website, deal_count, booking_count, pending_booking_count
        `)
        .eq('id', businessId).maybeSingle();

      if (fetchError) {
        throw new Error(fetchError.message);
      }
  
  const greetings = `🔎Arrivedetci da ${data?.name || 'unknown business'}.`;


  return {
    messages: [...state.messages, { role: "assistant", content: greetings }],
  };
};
