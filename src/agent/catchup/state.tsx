import { BaseMessage } from "@langchain/core/messages";
import { Annotation, END, messagesStateReducer } from "@langchain/langgraph";
import { SearchDealsData, type NLUOutput } from "./types";

// export const StateSchema = z.object({
//   messages: z.array(z.custom<ChatMessage>()), // Fixed line
//   userId: z.string(),
//   businessId: z.string(),
//   conversationId: z.string(),
//   language: z.string(),
//   communicationMethod: z.string().optional(),
//   bookingContext: z.record(z.any()).optional(),
// });

export const AgentStateAnnotation=Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: messagesStateReducer,
    default: () => [],
  }),
  // The agent node that last performed work
  next: Annotation<string>({
    reducer: (x, y) => y ?? x ?? END,
    default: () => END,
  }),
   
   
   
   searchDealsData: Annotation<SearchDealsData>({
    reducer: (x, y) => ({...x, ...y}),
    default: () => ({}),
  }),
   nluOutput: Annotation<NLUOutput>({
    reducer: (x, y) => y,
    default: () => ({ intent: "", entities: {}, originalInput: "" }),
  }),

    conversationId: Annotation<string>,
    userId: Annotation<string>,
    businessId: Annotation<string>,

    language: Annotation<string>,
    isVoiceMessage: Annotation<boolean>,
    userName: Annotation<string>,
    latitude: Annotation<number>,
    longitude: Annotation<number>,
    communicationMethod: Annotation<string>,

  // bookingContext: Annotation<Record<string, any>>,
});

export type AgentState = typeof AgentStateAnnotation.State;
