import OpenAI from 'openai';
import { ref } from 'vue'

const openai = null;

export function setup() {
  openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
}

export async function testGPT() {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": "Hello!" }],
    });
  } catch (error) {
    console.log(error)
  }
console.log(chatCompletion.choices[0].message);
}