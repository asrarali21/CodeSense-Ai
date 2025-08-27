// Using Ollama for local AI (free alternative)
async function GenerateContent(prompt) {
    try {
        console.log("Using Ollama local AI...");
        
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: "codellama:7b", // Better for code review
                prompt: `You are a helpful code reviewer. Please review this code and provide constructive feedback: ${prompt}`,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`Ollama API error: ${response.status}`);
        }

        const data = await response.json();
        const result = data.response;
        console.log("AI Response:", result);
        
        return result;
        
    } catch (error) {
        console.error("Error in GenerateContent:", error);
        
        // Fallback to a simple response if Ollama isn't running
        return `Code Review for: ${prompt}

This appears to be a simple function. Here are some suggestions:
1. Consider adding input validation
2. Add JSDoc comments for better documentation
3. Consider edge cases and error handling
4. Ensure the function follows your project's coding standards

Note: Install Ollama for more detailed AI-powered reviews.`;
    }
}

export { GenerateContent }