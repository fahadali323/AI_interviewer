import { useState } from 'react'
import Navbar from '../components/navbar';
import openai from '../lib/openaiAPI';

function GenerateQuestions() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<string | null>("");
    const [error, setError] = useState(false);

    const handleInputChange = (e: any) => {
        setInput(e.target.value);
    };

    async function getQuestions() {
        try {
            const prompt = `Generate a list of 4 interview questions based on the following job description, `;
            const res = await openai.chat.completions.create({
                messages: [{ role: 'user', content: prompt.concat(input) }],
                model: 'gpt-3.5-turbo',
            });
            setOutput(res.choices[0].message.content);
            console.log(res.choices[0].message.content);
        } catch {
            setError(true);
        }
    }

    return (
        <div className="flex flex-col min-h-screen space-y-12">
            <Navbar />
            <div className="flex flex-col justify-center items-center space-y-12">
                <h1 className="mb-4 text-4xl font-mono leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Enter a job description</h1>
                <textarea value={input} onChange={handleInputChange} className="resize-none py-3 px-4 block w-96 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none outline outline-1"></textarea>
                <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={getQuestions}>Generate Questions</button>
            </div>
        </div>
    )
}
  
  export default GenerateQuestions;