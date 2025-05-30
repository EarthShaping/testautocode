import { AgentState } from "../state.js";



export async function schedule_hr_interview(state: AgentState) {
  /**
   * Schedule Interview Node
   */
  state.response = "Interview Scheduled!";
    console.log("Schedule Interview Node");
  return state;
}