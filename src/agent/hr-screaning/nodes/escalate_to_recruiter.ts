import { AgentState } from "../state.js";



export function escalate_to_recruiter(state: AgentState) {
  /**
   * Escalate to Recruiter Node
   */
  
  state.response = "Escalated to Recruiter!";
    console.log("Escalate to Recruiter Node");
  return state;
}