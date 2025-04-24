import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const DebugGame = () => {
  const { gameLanguage } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch questions based on game language
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/debug-game/${gameLanguage}`);
        setQuestions(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load questions');
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [gameLanguage]);

  const question = questions.length > 0 ? questions[currentIndex] : null;


  const handleOptionClick = (index) => {
    setSelected(index);
    setShowResult(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!question) return <div>No questions available.</div>;

  return (
    <div className="container mt-4">
      <h2 className="fw-bold">🧠 Debug Game: {gameLanguage}</h2>
      <Card className="p-3 my-4 shadow-sm">
        <pre className="bg-light p-3 rounded">{question.code}</pre>
        <h5>{question.question}</h5>
        <ListGroup>
          {question.options.map((opt, index) => (
            <ListGroup.Item
              key={index}
              action
              onClick={() => handleOptionClick(index)}
              variant={
                showResult
                  ? index === question.correctIndex
                    ? 'success'
                    : selected === index
                    ? 'danger'
                    : ''
                  : ''
              }
              className="cursor-pointer"
            >
              {opt}
            </ListGroup.Item>
          ))}
        </ListGroup>

        {showResult && (
          <div className="mt-3">
            {selected === question.correctIndex ? (
              <p className="text-success fw-bold">✅ Correct!</p>
            ) : (
              <p className="text-danger fw-bold">❌ Incorrect.</p>
            )}
            <p><strong>Explanation:</strong> {question.explanation}</p>
          </div>
        )}

        {showResult && currentIndex < questions.length - 1 && (
          <Button
            className="mt-3"
            onClick={() => {
              setCurrentIndex(currentIndex + 1);
              setSelected(null);
              setShowResult(false);
            }}
          >
            Next Question →
          </Button>
        )}
      </Card>
    </div>
  );
};

export default DebugGame;
