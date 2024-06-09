"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const generative_ai_1 = require("@google/generative-ai");
const cors = require('cors');
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
// Dotenv init
dotenv_1.default.config();
// Important Variables
const app = (0, express_1.default)();
const port = process.env.PORT;
const key = process.env.KEY;
/********************************************************************************************
 * ------------------------------------------CORS-------------------------------------------*
 ********************************************************************************************/
// UNCOMMENT WHEN REVERSE PROXY IS SETUP AND ITS UP
// CORS is weird and idk it that well but this basically is good for security and lets our API only be called by our domain and localhost when developing
let corsOptions = {
    origin: ['https://devfolify.com']
};
app.use(cors(corsOptions));
/********************************************************************************************
 * ---------------------------------------Functions-----------------------------------------*
 ********************************************************************************************/
// Saturates the default subject prompt with the proper user inputted values and returns to be sent off to AI
function saturatePrompt(prompt, skillLevel, techInterests, familiarLangs, projectType, wantToLearn) {
    prompt = prompt.replace(/\[skillLevel\]/g, skillLevel);
    prompt = prompt.replace(/\[techInterests\]/g, techInterests);
    prompt = prompt.replace(/\[familiarLangs\]/g, familiarLangs);
    prompt = prompt.replace(/\[projectType\]/g, projectType);
    prompt = prompt.replace(/\[wantToLearn\]/g, wantToLearn);
    return prompt;
}
/********************************************************************************************/
// Main AI Generation Function
function generateJSON(skillLevel, techInterests, familiarLangs, projectType, wantToLearn) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Init Gemini w/ api key from .env and setting AI model
            const genAI = new generative_ai_1.GoogleGenerativeAI(key);
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            // Reads proper prompt file depending on subject and sets a subject variable equal to the filepath without .txt extension
            let prompt = fs_1.default.readFileSync(("./prompts/generate-Saturate.txt"), { "encoding": "utf-8" });
            // function call to make prompt actually good with the user inputted values
            prompt = saturatePrompt(prompt, skillLevel, techInterests, familiarLangs, projectType, wantToLearn);
            // Gets result from AI and returns it (next 4 lines found in Google's documentation) Also gets images and sets 5 of them equal to 5 postitions in array "images"
            const result = yield model.generateContent(prompt);
            const response = yield result.response;
            // Parses JSON response from AI to insert images for frontend and gets image URL array
            let questions = JSON.parse(response.text());
            // Returns the restringified JSON (idk if that's a word)
            return JSON.stringify(questions);
        }
        catch (error) {
            // Properly catches error with error type safety
            let message;
            if (error instanceof Error)
                message = error.message;
            else
                message = String(error);
            // returns error.. so sad :(
            return ({
                "success": "false",
                "message": "there was an error - This usually happens when either with the AI or it's response being formatted poorly",
                "error": message,
                // To not break frontend parsing while also telling the user there's been an error
                "problem": {
                    "field": "",
                    "description": "",
                    "example_scenarios": [
                        {
                            "scenario": "Oops! We've encountered an error... reload this page or try again.",
                            "possible_solutions": [""]
                        }
                    ],
                    "target_level": "",
                    "areas_of_interest": [""],
                    "suggested_languages": [""],
                    "suggested_tools": [""]
                }
            });
        }
    });
}
/********************************************************************************************
 * ------------------------------------Request Handlers-------------------------------------*
 ********************************************************************************************/
app.use(express_1.default.json());
// Main
app.post("/generate/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Get variables from post body
    const skillLevel = req.body.skillLevel;
    const techInterests = req.body.techInterests;
    const familiarLangs = req.body.familiarLangs;
    const projectType = req.body.projectType;
    const wantToLearn = req.body.wantToLearn;
    // API wouldn't wait for response before - now it does with 'await' thankfully (async carrying)
    let result = yield generateJSON(skillLevel, techInterests, familiarLangs, projectType, wantToLearn);
    res.send(result);
}));
// Funny
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.send({
        "success": "nuh uh",
        "message": "why are you looking at api root directory >:(",
        "funny": `yk what?? I know who you are bro: ${ip}`
    });
}));
// Start Server
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
