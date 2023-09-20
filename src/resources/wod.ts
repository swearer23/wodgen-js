import { ChatOpenAI } from "langchain/chat_models/openai";
import { SystemMessage, HumanMessage } from "langchain/schema";
import ft_agent from "@/resources/ft_agent";

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
  exercises: [
    "excercises with equipment and weight",
  ],
}

const formatInstruction = `
  Provide your answer in JSON form. Reply with only the answer in JSON form and include no other commentary,
  make sure the JSON is valid, and in every item of exercises is a string,
  and if any one exercise contains a equipment, make sure weight or specification is in the string:
    equipment that should have a weight eg.:
    - wall ball
    - barbell
    - dummbell
`

export const getWod = async (type: String = '') => {
  console.log('Fetching new wod from chatgpt')
  const typestr = type ? ` ${type} type` : 'random'
  const result = await llm.predictMessages([
    new SystemMessage("Dow is a elite CrossFit coach for generating workout of day -- WOD."),
    new HumanMessage(`
      Instruction: ${formatInstruction}\n
      Design a high quality ${typestr} WOD for me.\n
      Respond with json format structure like this: ` + JSON.stringify(schema)),
  ]);
  let wod = JSON.parse(result.content)
  if (type === 'FOR_TIME') {
    wod = await ft_agent(wod)
  }
  console.log(wod)
  return wod
}
