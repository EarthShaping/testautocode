import { Annotation } from "@langchain/langgraph";



// Define the AgentState annotation, extending MessagesState
export const AgentState = Annotation.Root({
  application: Annotation<string>,
  experience_level: Annotation<string>,
  skill_match: Annotation<string>,
  response: Annotation<string>,

});

export type AgentState = typeof AgentState.State;
