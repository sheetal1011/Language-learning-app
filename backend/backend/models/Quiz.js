import mongoose from  "mongoose";

const quizSchema = new mongoose.Schema({
  language: String,
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: String,
    },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
