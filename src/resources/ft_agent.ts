import { ChatOpenAI } from "langchain/chat_models/openai";
import { SystemMessage, HumanMessage } from "langchain/schema";
import dotenv from "dotenv";
import { Wod } from "@/types/index.d";

dotenv.config();

const schema = {
  round: Number
}

const llm = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.8,
});

export default async (wod: Wod) => {
  console.log('fetching round from chatgpt')
  const result = await llm.predictMessages([
    new SystemMessage("Dow is a elite CrossFit coach for generating workout of day -- WOD."),
    new HumanMessage(`
      This is a FOR TIME kind of WOD:\n
      ${JSON.stringify(wod)}.\n
      How many rounds do you think this WOD need for repeat within ${wod.timecap}?\n
      Respond with json format structure like this: ` + JSON.stringify(schema)),
  ]);
  const round = JSON.parse(result.content).rounds
  wod.round = round
  console.log('determined round: ', round)
  return wod
}