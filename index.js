import 'dotenv/config'; // Load environment variables first
import app from "./app.js";

app.listen(8000, () => {
    console.log("server running on port 8000");
    console.log("OpenAI API Key loaded:", process.env.OPENAI_API_KEY ? "Yes" : "No");
    console.log("API Key first 10 chars:", process.env.OPENAI_API_KEY?.substring(0, 10));
});

