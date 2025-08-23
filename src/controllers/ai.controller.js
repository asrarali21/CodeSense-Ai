import { GenerateContent } from "../services/ai.services.js"




const getreview = async(req , res) =>{
    try {
         const {prompt} = req.body
         console.log(req.body);
         

              if (!prompt) {
            return res.status(400).json({
                success: false,
                message: "Prompt is required",
            });
        }


     const content = await GenerateContent(prompt)
     console.log(content);
     

     res.status(200).json({
      success: true,
      review: content,
    });

  
    } catch (error) {
         console.error("Error in getreview:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while reviewing the code",
      error: error.message,
    });
    }
}

export {getreview}