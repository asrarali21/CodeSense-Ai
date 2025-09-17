import {GoogleGenAI} from '@google/genai';

async function reviewCode(code) {

   const client = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
   })
  try {
    console.log("Using Open AI model...");
  const prompt = `You are an expert software engineer and code reviewer. Please review the following code thoroughly and provide detailed feedback including:

1. Code quality assessment
2. Potential bugs or issues
3. Performance improvements
4. Best practices suggestions
5. Security considerations (if applicable)

Code to review:
\`\`\`
${code}
\`\`\``

const response = await client.models.generateContent( {
      model: "gemini-2.0-flash-001",
      contents:prompt
}, );
  return response.text
  } catch (error) {
   console.error("Gemini API Error:", error?.message || error)
  }
}

export default reviewCode;