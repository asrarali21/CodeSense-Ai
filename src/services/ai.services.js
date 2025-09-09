
import axios from 'axios';

async function reviewCode(code) {
  try {
    console.log("Using local Mistral 7B model...");

    const response = await axios.post('http://localhost:11434/api/generate', {
      model: "mistral:7b",
      prompt: `You are an expert software engineer and code reviewer. Please review the following code thoroughly and provide detailed feedback including:

1. Code quality assessment
2. Potential bugs or issues
3. Performance improvements
4. Best practices suggestions
5. Security considerations (if applicable)

Code to review:
\`\`\`
${code}
\`\`\`

Please provide a comprehensive code review:`,
      stream: false,
      options: {
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 1000
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log("Mistral API Response received");
    
    if (response.data && response.data.response) {
      return response.data.response.trim();
    } else {
      throw new Error("Invalid response format from Mistral model");
    }
    
  } catch (error) {
    console.error("Local Mistral API Error:", error.message);
    
    // Check if it's a connection error (Ollama not running)
    if (error.code === 'ECONNREFUSED' || error.message.includes('connect')) {
      throw new Error("Local Mistral model is not running. Please start Ollama with: ollama run mistral:7b");
    }
    
    throw new Error(`Local AI model error: ${error.message}`);
  }
}

export default reviewCode;