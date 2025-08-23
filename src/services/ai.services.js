import { GoogleGenerativeAI } from "@google/generative-ai";
const ai = new GoogleGenerativeAI({});


async function GenerateContent(prompt) {
   
    const model = ai.getGenerativeModel({ model:"gemini-1.5-flash" , })
    console.log("API Key being used:", ai.apiKey)

    const response = await model.generateContent(prompt)
    console.log(response);
    

     const result = response.response.text();
     console.log(result);
     
    return result
   
}
export {GenerateContent}