import express, { Express, Request, Response } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
const cors = require('cors');
import dotenv from "dotenv";
import fs from "fs";

// Dotenv init
dotenv.config();
// Important Variables
const app: Express = express();
const port = process.env.PORT;
const key: string = process.env.KEY as string;

/********************************************************************************************
 * ------------------------------------------CORS-------------------------------------------*
 ********************************************************************************************/
// UNCOMMENT WHEN REVERSE PROXY IS SETUP AND ITS UP
// CORS is weird and idk it that well but this basically is good for security and lets our API only be called by our domain and localhost when developing


let corsOptions = {
  origin : ['http://localhost:3000']
};
app.use(cors(corsOptions));


/********************************************************************************************
 * ---------------------------------------Functions-----------------------------------------*
 ********************************************************************************************/

// Saturates the default subject prompt with the proper user inputted values and returns to be sent off to AI
function saturatePrompt(prompt: string, skillLevel: string, techInterests: string, familiarLangs: string, projectType: string, wantToLearn: string,){
  prompt = prompt.replace(/\[skillLevel\]/g, skillLevel);
  prompt = prompt.replace(/\[techInterests\]/g, techInterests);
  prompt = prompt.replace(/\[familiarLangs\]/g, familiarLangs);
  prompt = prompt.replace(/\[projectType\]/g, projectType);
  prompt = prompt.replace(/\[wantToLearn\]/g, wantToLearn);

  return prompt;
}

/********************************************************************************************/

// Main AI Generation Function
async function generateJSON(skillLevel: string, techInterests: string, familiarLangs: string, projectType: string, wantToLearn: string) {
  try{
    // Init Gemini w/ api key from .env and setting AI model
    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    // Reads proper prompt file depending on subject and sets a subject variable equal to the filepath without .txt extension
    let prompt = fs.readFileSync(("./prompts/generate-Saturate.txt"), {"encoding": "utf-8"});
    // function call to make prompt actually good with the user inputted values
    prompt = saturatePrompt(prompt, skillLevel, techInterests, familiarLangs, projectType, wantToLearn);
    // Gets result from AI and returns it (next 4 lines found in Google's documentation) Also gets images and sets 5 of them equal to 5 postitions in array "images"
    const result = await model.generateContent(prompt);
    const response = await result.response;
    // Parses JSON response from AI to insert images for frontend and gets image URL array
    let questions = JSON.parse(response.text());
    // Returns the restringified JSON (idk if that's a word)
    return JSON.stringify(questions);
  }
  catch (error){
    // Properly catches error with error type safety
    let message
    if (error instanceof Error) message = error.message
    else message = String(error)
    // returns error.. so sad :(
    return ({
      "success": "false",
      "message": "there was an error - This usually happens when either with the AI or it's response being formatted poorly",
      "error": message
    });
  }
}

/********************************************************************************************
 * ------------------------------------Request Handlers-------------------------------------*
 ********************************************************************************************/

app.use(express.json());

// Main
app.post("/generate/", async (req: Request, res: Response) => {
  // Get variables from post body
  const skillLevel: string = req.body.skillLevel;
  const techInterests: string = req.body.techInterests;
  const familiarLangs: string = req.body.familiarLangs;
  const projectType: string = req.body.projectType;
  const wantToLearn: string = req.body.wantToLearn;
  // API wouldn't wait for response before - now it does with 'await' thankfully (async carrying)
  let result = await generateJSON(skillLevel, techInterests, familiarLangs, projectType, wantToLearn);
  res.send(result);
});
// Funny
app.get("/", async (req: Request, res: Response) => {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  res.send({
    "success": "nuh uh",
    "message": "why are you looking at api root directory >:(",
    "funny": `yk what?? I know who you are bro: ${ip}`
  });
});

// Start Server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});