import 'dotenv/config'; // Load environment variables first
import app from "./app.js";




app.listen(8000, () => {
    console.log("server running on port");
    console.log("HUGGING FACE API Key loaded:", process.env.HF_TOKEN ? "Yes" : "No")
});

