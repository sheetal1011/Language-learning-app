import React from "react";
import { useParams } from "react-router-dom";

const Quiz = () => {
  const { language } = useParams(); 

  return (
    <div>
      <h1>{language.toUpperCase()} Quiz</h1>
      <p>Answer the following questions:</p>

      <p>Q1. What is {language} used for?</p>
      <button>Option A</button>
      <button>Option B</button>
      <button>Option C</button>
      <button>Option D</button>
    </div>
  );
};

export default Quiz;
