import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './QuizPage.css';

const QuizPage = () => {
  const { language } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const decodedLang = decodeURIComponent(language); // ✅ correct decoding
  
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/quizzes/${language.toUpperCase()}`);
        const data = await res.json();
        setQuestions(data.questions || []);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchQuiz();
  }, [language]);

  const handleOptionSelect = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [current]: option,
    });
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((q, index) => {
      if (selectedOptions[index] === q.answer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setShowResult(true);
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelectedOptions({});
    setScore(0);
    setShowResult(false);
  };

  if (questions.length === 0) return <div>Loading quiz...</div>;

  if (showResult) {
    return (
      <div className="result-page">
        <div className="result">
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score} / {questions.length}</p>
        <hr />
        <h3>Review Answers:</h3>
        {questions.map((q, index) => {
          const userAnswer = selectedOptions[index];
          const isCorrect = userAnswer === q.answer;
          return (
            <div key={index} className="review-question">
              <p><strong>Q{index + 1}: {q.question}</strong></p>
              <p>Your Answer: {userAnswer || <i>Unattempted</i>}</p>
              <p>Correct Answer: {q.answer}</p>
              <p style={{ color: isCorrect ? "green" : userAnswer ? "red" : "gray" }}>
                {isCorrect ? "✔ Correct" : userAnswer ? "❌ Incorrect" : "⏳ Not Attempted"}
              </p>
              <hr />
            </div>
          );
        })}
        <button onClick={handleRestart}>Try Again</button>
        <button onClick={() => navigate("/select-language")}>Back to Languages</button>
      </div>
      </div>
    );
  }

  const currentQ = questions[current];
  const selected = selectedOptions[current];

  return (
    <div className="quiz-page">
    <div className="quiz-container">
      <h2>{language} Quiz</h2>
      <h4>Question {current + 1} of {questions.length}</h4>
  
      <div className="question-card">
        <p><strong>{currentQ.question}</strong></p>
        {currentQ.options.map((option, idx) => (
          <div key={idx} className="option">
            <label>
              <input
                type="radio"
                name={`question-${current}`}
                value={option}
                checked={selected === option}
                onChange={() => handleOptionSelect(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
  
      <div className="nav-buttons">
        <button onClick={handlePrev} disabled={current === 0}>Previous</button>
        {current < questions.length - 1 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  </div>
  
  );
};

export default QuizPage;