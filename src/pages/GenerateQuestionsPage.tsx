import { useState } from 'react'
import Navbar from '../components/Navbar';
import openai from '../lib/openaiAPI';
import InterviewPage from './InterviewPage';

function GenerateQuestionsPage() {
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string | null>("");
    const [error, setError] = useState("");

    const example = "1. Can you tell us about a time when you had to work on a team project? What role did you play and what was the outcome?\n2. How do you handle working in a fast-paced environment with multiple deadlines? Can you provide an example of a time when you had to prioritize tasks and manage your time effectively?\n3. What specific skills do you bring to the table that make you a good fit for this entry-level position?\n4. How do you stay motivated and continue to grow and develop your skills? Can you give an example of a time when you actively sought out opportunities for learning and self-improvement?";

    const handleInputChange = (e: any) => {
        setInput(e.target.inputText);
    };

    async function getQuestions() {
        try {
            const prompt = `Generate a list of 4 interview questions for an entry level position based on the following job description, `;
            const res = await openai.chat.completions.create({
                messages: [{ role: 'user', content: prompt.concat(input) }],
                model: 'gpt-3.5-turbo',
            });
            setOutput(res.choices[0].message.content);
            console.log(res);
        } catch {
            setError("Invalid input.");
        }
    }

    if (output) {
        return (
            <InterviewPage questions={output} />
        )
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
  
export default GenerateQuestionsPage;