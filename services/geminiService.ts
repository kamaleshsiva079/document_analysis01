
import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisResult } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    summary: {
      type: Type.STRING,
      description: "A concise summary of the legal document's purpose and key terms."
    },
    documentType: {
      type: Type.STRING,
      description: "The predicted type of the legal document (e.g., 'Non-Disclosure Agreement', 'Employment Contract', 'Lease Agreement')."
    },
    keyClauses: {
      type: Type.ARRAY,
      description: "An array of 3-5 of the most critical clauses or obligations identified in the text.",
      items: {
        type: Type.OBJECT,
        properties: {
          clause: {
            type: Type.STRING,
            description: "The name or a very short summary of the key clause (e.g., 'Confidentiality Term', 'Termination for Cause')."
          },
          explanation: {
            type: Type.STRING,
            description: "A brief, easy-to-understand explanation of what the clause means and its implications."
          }
        },
        required: ["clause", "explanation"]
      }
    }
  },
  required: ["summary", "documentType", "keyClauses"]
};


export const analyzeDocument = async (documentText: string): Promise<AnalysisResult> => {
  if (!API_KEY) {
    throw new Error("API key is not configured.");
  }
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are an expert AI legal assistant for Document Analysis. Your task is to analyze the provided legal document text and return a structured JSON object with a summary, the predicted document type, and a list of key clauses. Here is the document text: \n\n---START OF DOCUMENT---\n${documentText}\n---END OF DOCUMENT---`,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonString = response.text.trim();
    const result = JSON.parse(jsonString);
    return result as AnalysisResult;
    
  } catch (error) {
    console.error("Error analyzing document with Gemini API:", error);
    throw new Error("Failed to analyze document. The AI model may be temporarily unavailable or the input text could not be processed.");
  }
};