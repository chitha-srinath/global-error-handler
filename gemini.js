// // const { GoogleGenerativeAI } = require("@google/generative-ai");
// import {GoogleGenerativeAI} from "@google/generative-ai";
// import 'dotenv/config'

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const prompt = "explain about dynamoDB";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());


import { GoogleGenerativeAI } from '@google/generative-ai';
import 'dotenv/config';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

async function streamContent() {
  const prompt = 'explain about dynamoDB';

  try {
    const stream = await model.generateContentStream(prompt);

    for await (const chunk of stream.stream) {
      console.log(chunk.text());
    }

    console.log('Stream ended.');
  } catch (error) {
    console.error('Error:', error);
  }
}

streamContent();
