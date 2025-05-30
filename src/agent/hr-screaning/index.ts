import { END, START, StateGraph } from "@langchain/langgraph";

import { categorize_experience } from "./nodes/categorize_experience.js";
import { AgentState } from "./state.js";
import { assess_skillset } from "./nodes/assess_skillset.js";
import { schedule_hr_interview } from "./nodes/schedule_hr_interview.js";
import { reject_application } from "./nodes/reject_application.js";
import { escalate_to_recruiter } from "./nodes/escalate_to_recruiter.js";

async function route_app(state: AgentState) {
  /**
   * Route Application
   */
  // Define routing rules as a configuration object for better scalability
  const routingRules = [
    {
      condition: (s: { skill_match: string }) =>
        s.skill_match === "Skillset Matched!",
      destination: "schedule_hr_interview",
    },
    {
      condition: (s: { experience_level: string }) =>
        s.experience_level === "Senior",
      destination: "escalate_to_recruiter",
    },
  ];

  // Find the first matching rule and return its destination
  for (const rule of routingRules) {
    if (rule.condition(state)) {
      return rule.destination;
    }
  }
  return "reject_application";
}

const workflow = new StateGraph(AgentState)
  .addNode("categorize_experience", categorize_experience)
  .addNode("assess_skillset", assess_skillset)
  .addNode("schedule_hr_interview", schedule_hr_interview)
  .addNode("escalate_to_recruiter", escalate_to_recruiter)
  .addNode("reject_application", reject_application)
  .addEdge(START, "categorize_experience")
  .addEdge("categorize_experience", "assess_skillset")
  .addConditionalEdges("assess_skillset", route_app)
  .addEdge("escalate_to_recruiter", END)
  .addEdge("reject_application", END)
  .addEdge("assess_skillset", END)
  .addEdge("schedule_hr_interview", END);
 

export const graph = workflow.compile({});
