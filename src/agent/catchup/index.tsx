import {
  END,
  MemorySaver,
  MessagesAnnotation,
  START,
  StateGraph,
} from "@langchain/langgraph";
import { AIMessage, BaseMessage } from "@langchain/core/messages";

import { nluProcessor } from "./nodes/nluProcessor";

import { callModel } from "./nodes/callmodel";
import { toolNode } from "./nodes/tools";

import { bookingHandler } from "./nodes/bookingHandler";
import { businessInfo } from "./nodes/businessInfo";

import { commsChannel } from "./nodes/commsChannel";
import { dealsInfo } from "./nodes/dealsInfo";
import { emptyMsg } from "./nodes/emptyyMsg";
import { escalation } from "./nodes/escalation";
import { modifyCancel } from "./nodes/modifyCancel";
import { newBooking } from "./nodes/newBooking";
import { AgentStateAnnotation, type AgentState } from "./state";
import { greetings } from "./nodes/greetings";
import { notunderstood } from "./nodes/notunderstood";
import { goodbye } from "./nodes/goodbye";
import { fallback } from "./nodes/fallback";
import { genericChat } from "./nodes/genericChat";
import { askLocation, checkMissingDealData, findService } from "./nodes/findService";

// const shouldContinue = (state: typeof MessagesAnnotation.State) => {
//   const { messages } = state;

//   const lastMessage = messages[messages.length - 1];
//   if (
//     lastMessage.getType() !== "ai" ||
//     !(lastMessage as AIMessage).tool_calls?.length
//   ) {
//     // LLM did not call any tools, or it's not an AI message, so we should end.
//     return END;
//   }
//   return "tools";
// };

const intentRouter = (state: AgentState) => {
  const allNodeKeys = Object.keys(worfklow.nodes); // returns: string[]

  if (!allNodeKeys.includes(state.next)) {
    console.log("Intent Router: Node not found, returning END");
    return "fallback";
  }
  if(state.next === 'find_service') state.next = 'checkMissingData';
  console.log("Intent Router:", state.next);
  return state.next;
};

// const workflow = new StateGraph(MessagesAnnotation)
//   .addNode("agent", callModel)
//.addNode("tools", toolNode)
// .addEdge(START, "agent")
// .addEdge("agent", END);
//.addEdge("tools", "agent")
//.addConditionalEdges("agent", shouldContinue, ["tools", END]);

// export const graph = workflow.compile({
//   // The LangGraph Studio/Cloud API will automatically add a checkpointer
//   // only uncomment if running locally
//   checkpointer: new MemorySaver(),
// });

const worfklow = new StateGraph(AgentStateAnnotation);

worfklow
  .addNode("nluProcessor", nluProcessor)
  .addNode("greetings", greetings)
  .addNode("not_understood", notunderstood)
  .addNode("goodbye", goodbye)
  .addNode("fallback", fallback)
  .addNode("generic_chat", genericChat)
  .addNode("checkMissingData", checkMissingDealData)

  .addNode("ask_Location", askLocation)
  .addNode("find_service", findService)

  // .addNode("bookingHandler", bookingHandler)
  // .addNode("newBooking", newBooking)
  // .addNode("modifyCancel", modifyCancel)
  // .addNode("dealsInfo", dealsInfo)
  // .addNode("businessInfo", businessInfo)
  // .addNode("emptyMsg", emptyMsg)
  // .addNode("escalation", escalation)
  // .addNode("commsChannel", commsChannel)


  .addEdge("find_service",END)
  // Graph transitions
  .addEdge(START, "nluProcessor")
  .addEdge("nluProcessor", END)
  .addEdge("greetings", END)
  
  .addEdge("not_understood", END)

  .addEdge("goodbye", END)
  .addEdge("fallback", END)

  .addEdge("ask_Location",END)

  .addConditionalEdges("nluProcessor", intentRouter, [
    "greetings",
    "not_understood",
    "goodbye",
    "fallback",
    "generic_chat",
    "checkMissingData",
    "find_service",
    END,
  ])

.addConditionalEdges("checkMissingData",
  async (state: AgentState): Promise<string> => {
    // Aggiungiamo un controllo per vedere se siamo in un ciclo di conferma finale
    // e l'utente ha confermato. In tal caso, andiamo a searchDeals.
    if (state.searchDealsData.last_asked_param === "final_confirmation" && 
        state.searchDealsData.location_confirmed &&
        state.searchDealsData.date_confirmed &&
        state.searchDealsData.time_confirmed 
        //state.searchDealsData.max_cost_confirmed
      ) { // max_cost_confirmed indica che è stato gestito (anche se saltato)
            return "find_service";
        }

       const result=  await checkMissingDealData(state);

       console.log("Debug: checkMissingData",result);

    return result.next || "fallback"; // Altrimenti, usa la logica standard
  },
  [
      "ask_Location",
    "find_service",
    "checkMissingData",
    "fallback"
  ]

);


// .addConditionalEdges("classifier",  (x:AgentState) => x.next)

// .addConditionalEdges("classifier", intentRouter, [
//   "bookingHandler",
//   "newBooking",
//   "modifyCancel",
//   "dealsInfo",
//   "businessInfo",
//   "emptyMsg",
//   "escalation",
// ])

// .addEdge("bookingHandler", "commsChannel")
// .addEdge("newBooking", "commsChannel")
// .addEdge("modifyCancel", "commsChannel")
// .addEdge("commsChannel", END)

// .addEdge("dealsInfo", END)
// .addEdge("businessInfo", END)
// .addEdge("emptyMsg", END)
// .addEdge("escalation", END);
//;

export const graph = worfklow.compile();
