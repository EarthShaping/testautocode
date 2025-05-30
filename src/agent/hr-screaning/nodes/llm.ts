import { ChatOpenAI } from "@langchain/openai";



export function getModel() {
  /**
   * Get a model based on the environment variable.
   */   

return new ChatOpenAI({ 
    temperature: 0, 
    model: "gpt-4o-mini"
  });
}