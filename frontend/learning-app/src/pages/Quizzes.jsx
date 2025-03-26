import React from "react";
import { Link } from "react-router-dom";

const Quizzes = () => {
  return (
    <div className="quizzes">
      <h1>Quizzes</h1>
      <p>Select a quiz to test your knowledge:</p>

      <ul>
        <li><Link to="/quiz/javascript"><button>JavaScript Quiz</button></Link></li>
        <li><Link to="/quiz/python"><button>Python Quiz</button></Link></li>
        <li><Link to="/quiz/c"><button>C Quiz</button></Link></li>
        <li><Link to="/quiz/html"><button>HTML Quiz</button></Link></li>
        <li><Link to="/quiz/css"><button>CSS Quiz</button></Link></li>
        <li><Link to="/quiz/react"><button>React.js Quiz</button></Link></li>
      </ul>
    </div>
  );
};

export default Quizzes;
