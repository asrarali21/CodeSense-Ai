import reviewCode from "../services/ai.services.js"



const generateReview = async (req, res) => {
    try {
        const { code } = req.body;
        console.log("Received code:", code);

        if (!code) {
            return res.status(400).json({ error: 'Code is required' });
        }

        const review = await reviewCode(code);
        console.log("Generated review:", review);
        
        res.json({ review });    

    } catch (error) {
        console.log("Error in generateReview:", error);
        res.status(500).json({ error: 'Failed to review code' });
    }
}

export {generateReview}