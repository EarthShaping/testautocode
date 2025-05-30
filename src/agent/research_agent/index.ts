/**
 * This is the main entry point for the AI.
 * It defines the workflow graph and the entry point for the agent.
 */

import { AIMessage } from "@langchain/core/messages";
import { StateGraph, END, START } from "@langchain/langgraph";
import { MemorySaver } from "@langchain/langgraph";
import { chat_node } from "./nodes/chat.js";
import { delete_node, perform_delete_node } from "./nodes/delete.js";
import { download_node } from "./nodes/download.js";
import { search_node } from "./nodes/search.js";
import { AgentStateAnnotation, type AgentState } from "./state.js";

const workflow = new StateGraph(AgentStateAnnotation)
  .addNode("download", download_node)
  .addNode("chat_node", chat_node)
  .addNode("search_node", search_node)
  .addNode("delete_node", delete_node)
  .addNode("perform_delete_node", perform_delete_node)
  .addEdge(START, "download")
  .addEdge("download", "chat_node")
  .addConditionalEdges("chat_node", route, [
    "search_node",
    "chat_node",
    "delete_node",
    END,
  ])
  .addEdge("delete_node", "perform_delete_node")
  .addEdge("perform_delete_node", "chat_node")
  .addEdge("search_node", "download");

export const graph = workflow.compile({
  interruptAfter: ["delete_node"],
});

function route(state: AgentState) {
  const messages = state.messages || [];

  if (
    messages.length > 0 &&
    messages[messages.length - 1].constructor.name === "AIMessageChunk"
  ) {
    const aiMessage = messages[messages.length - 1] as AIMessage;

    if (
      aiMessage.tool_calls &&
      aiMessage.tool_calls.length > 0 &&
      aiMessage.tool_calls[0].name === "Search"
    ) {
      return "search_node";
    } else if (
      aiMessage.tool_calls &&
      aiMessage.tool_calls.length > 0 &&
      aiMessage.tool_calls[0].name === "DeleteResources"
    ) {
      return "delete_node";
    }
  }
  if (
    messages.length > 0 &&
    messages[messages.length - 1].constructor.name === "ToolMessage"
  ) {
    return "chat_node";
  }
  return END;
}
