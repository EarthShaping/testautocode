import { AgentState } from "../state.js";




export function reject_application(state: AgentState) {
  /**
   * Reject Application Node
   */
  
  state.response = "Application Rejected!";
    console.log("Reject Application Node");
  return state;
}