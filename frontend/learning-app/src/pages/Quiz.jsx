import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { language } = useParams();
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/quizzes/${language}`)
      .then((res) => res.json())
      .then((data) => setQuiz(data))
      .catch((error) => console.error("Error fetching quiz:", error));
  }, [language]);

  return (
    <div>
      <h1>{language} Quiz</h1>
      {quiz ? (
        quiz.questions.map((q, index) => (
          <div key={index}>
            <h3>{q.question}</h3>
            {q.options.map((option, i) => (
              <button key={i}>{option}</button>
            ))}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;

