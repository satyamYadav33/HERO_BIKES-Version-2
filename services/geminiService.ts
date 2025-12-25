
import { GoogleGenAI } from "@google/genai";
import { BIKES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBikeAdvice = async (userPrompt: string) => {
  const model = "gemini-3-flash-preview";
  const systemInstruction = `
    You are the "Hero Bike Assistant", a friendly expert for Hero Motocorp. 
    Your goal is to help users find the perfect Hero bike from the current catalog.
    Available Bikes: ${JSON.stringify(BIKES)}.
    
    Guidelines:
    1. Be concise and professional.
    2. Suggest specific models based on their needs (e.g., commute, sports, electric).
    3. Use technical specs like Engine CC, Mileage, and Price to justify your choices.
    4. If they ask about maintenance or dealers, tell them Hero has the largest service network in India.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm having trouble connecting right now. Please explore our models section or visit the nearest dealer!";
  }
};
