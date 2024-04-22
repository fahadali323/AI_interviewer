import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_CHATGPT_KEY!,
    dangerouslyAllowBrowser: true
});

export default openai;