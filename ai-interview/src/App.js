import React, { useState } from 'react';
import './App.css';

function App() {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [answer, setAnswer] = useState('');
  const [interviewLog, setInterviewLog] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Flag for loading state

  // Handle answer input change
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  // Move to the next question (or generate new ones)
  const handleNext = async () => {
    if (!answer.trim()) return; // Prevent empty answers

    setIsLoading(true); // Set loading state

    const currentQuestion = { question: '', answer }; // Placeholder

    const data = {
      jobTitle,
      jobDescription, // Include if available
      currentQuestion,
    };

    // Replace with actual API call to your backend server
    const response = await fetch('/api/generate_question', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const newQuestion = await response.json(); // Parse response (generated question)

    setIsLoading(false); // Clear loading state

    setInterviewLog([...interviewLog, newQuestion]);
    setAnswer('');
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Interview Platform</h1>
      </header>
      <div className="content">
        <div className="job-details">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter Job Title"
          />
          <label htmlFor="jobDescription">Job Description (Optional):</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Describe the desired job"
          />
        </div>
        <div className="interview-simulation">
          {interviewLog.length === 0 && !isLoading ? (
            <p>
              Enter a job title (and optionally job description) to start a mock
              interview.
            </p>
          ) : isLoading ? (
            <p>Generating next question...</p>
          ) : interviewLog.length > 0 ? (
            <div>
              <p>Question {currentStep + 1}:</p>
              <p>{interviewLog[currentStep].question}</p>
              <textarea
                value={answer}
                onChange={handleAnswerChange}
                placeholder="Enter your answer"
              />
              <button disabled={!answer.trim()} onClick={handleNext}>
                Next Question
              </button>
            </div>
          ) : (
            <div>
              <p>Interview complete!</p>
              <h3>Interview Log:</h3>
              <ul>
                {interviewLog.map((log, index) => (
                  <li key={index}>
                    <strong>Q:</strong> {log.question} <br />
                    <strong>A:</strong> {log.answer}
                  </li>
                ))}
              </ul>
              <button onClick={() => setInterviewLog([])}>Start Over</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
