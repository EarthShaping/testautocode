import { AgentState } from "../state.js";

export async function assess_skillset(state: AgentState) {

/**
 * Assess Candidate Skillset Node
 */
    state.skill_match = "Skillset Matched!";
    console.log("Assess Candidate Skillset Node");
  return state;
}