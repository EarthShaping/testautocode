import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { ToolNode } from "@langchain/langgraph/prebuilt";



const webSearchTool = new TavilySearchResults({
  maxResults: 4,
  
});

export const tools = [webSearchTool];

export const toolNode = new ToolNode(tools);