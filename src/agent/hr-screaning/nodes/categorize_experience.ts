import { ChatPromptTemplate } from "@langchain/core/prompts";
import { AgentState } from "../state.js";
import { getModel } from "./llm.js";

export async function categorize_experience(state: AgentState) {
  /**
   * Categorize Experience Node
   */
  console.log("Categorize the experience level of the candidate : ");

  const prompt = ChatPromptTemplate.fromTemplate(`
  You are an HR assistant. You are trying to categorize the experience level of the candidate.
  You have the following application:

  <application>
  {application}
  </application>

  Categorize the candidate as Junior-level, Mid-level, or Senior-level.
  `);


  const model = await  getModel();

  const response = await model.invoke( await prompt.format({ application: state.application }));

 
 
  console.log("",response);
  state.experience_level = response.content.toString();
  state.response =response.content.toString()  ;
    
  return state;
}
