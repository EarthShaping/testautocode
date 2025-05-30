export const POSSIBLE_INTENTS = [
  "find_service",
  "book_service",
  "view_bookings",
  "ask_offer_info",
  "greetings",
  "goodbye",
  "request_help",
  "generic_chat", // Fallback for non-specific input
  "not_understood", // If the LLM cannot classify
];


export interface NLUOutput {
  intent: string | null;
  entities: { [key: string]: any };
  originalInput: string;
  error?: string; // Per gestire casi in cui l'LLM non restituisce JSON valido
}

export interface SearchDealsData {
  location?: string;
  location_confirmed?: boolean;
  date?: string; // YYYY-MM-DD
  date_confirmed?: boolean;
  time?: string; // HH:MM
  time_confirmed?: boolean;
  // max_cost?: number;
  // max_cost_confirmed?: boolean; // Traccia se il costo è stato chiesto/gestito
  last_asked_param?: "location" | "date" | "time" | "max_cost" | "final_confirmation" | null;
}