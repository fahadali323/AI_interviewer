import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/QuestionsCard";

function InterviewPage({questions}: any) {
    const navigate = useNavigate();
    const questionsList = questions.split(/\r?\n/);
    console.log(questionsList);

    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-between items-center mt-10">
                <ul>
                    <li>
                        {questionsList.map((data: string, index: number) => (
                            <Card key={index} question={data}/>
                        ))}
                    </li>
                </ul>
                <button
                    className="font-mono text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                    onClick={() => navigate("/generateQuestions")}
                >Finish Interview</button>
            </div>
        </div>
    )
}
  
export default InterviewPage;