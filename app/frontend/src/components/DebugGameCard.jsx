import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './DebugGameCard.css';

const DebugGameCard = () => {
  const [gameLanguage, setGameLanguage] = useState('JavaScript');
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(`/debug-game/${gameLanguage.toLowerCase()}`);
  };

  return (
    <Card className="debug-card">
      <Card.Body>
        <Card.Title>🧠 Debug Game</Card.Title>
        <Card.Text>
          Find and fix bugs in code! Select your language and get started.
        </Card.Text>
        <Form.Select
          value={gameLanguage}
          onChange={(e) => setGameLanguage(e.target.value)}
        >
          <option>JavaScript</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>Python</option>
        </Form.Select>
        <Button onClick={handleStart}>
          Start Game
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DebugGameCard;
