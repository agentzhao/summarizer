const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function submitForm() {
  console.log("submitForm");
  const response = await openai.createCompletion("text-ada-001", {
    prompt: "\nSummarize the above text:",
    temperature: 0.7,
    max_tokens: 10,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
}

export function testing() {
  console.log("testing");
}

module.exports = { submitForm, testing };
