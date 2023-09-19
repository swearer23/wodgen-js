import { PromptTemplate } from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SystemMessage, HumanMessage } from "langchain/schema";
import { setGlobalDispatcher, ProxyAgent } from "undici";

import dotenv from "dotenv";
dotenv.config();

if (process.env.https_proxy) {
  // Corporate proxy uses CA not in undici's certificate store
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const dispatcher = new ProxyAgent({uri: "http://172.19.16.1:10811"});
  setGlobalDispatcher(dispatcher);
}

const llm = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
}, {
  baseOptions: {
    https_proxy: "http://172.19.16.1:10811",
  }
});

export const getWod = async () => {
  const result = await llm.predictMessages([
    new SystemMessage("Dow is a CrossFit coach for generating workout of day -- WOD."),
    new HumanMessage("Generate a WOD for me. In json format")
  ]);
  return result;
}

getWod().then((result) => {
  console.log(result);
}).catch(err => {
  console.log(err);
});