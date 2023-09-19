import { PromptTemplate } from "langchain/prompts";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SystemMessage, HumanMessage } from "langchain/schema";
import { setGlobalDispatcher, ProxyAgent } from "undici";
import fetch from "node-fetch";

import dotenv from "dotenv";
dotenv.config();

const llm = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.8,
});

const schema = {
  title: "WOD title",
  type: "WOD type",
  // round: "leave empty If type is not for time",
  timecap: "WOD timecap",
  description: "WOD description",
  excercises: [
    "excercises, make sure any exercise need a equipment should have weight listed",
  ],
}

const formatInstruction = "Provide your answer in JSON form. Reply with only the answer in JSON form and include no other commentary:"

export const getWod = async (type: String = '') => {
  const result = await llm.predictMessages([
    new SystemMessage("Dow is a CrossFit coach for generating workout of day -- WOD."),
    new HumanMessage(`
      Instruction: ${formatInstruction}\n
      Generate a random ${type} WOD for me.
      Respond with json format structure like this: ` + JSON.stringify(schema)),
  ]);
  return result;
}
