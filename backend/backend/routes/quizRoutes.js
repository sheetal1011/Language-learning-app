import express from "express";
import Quiz from "../models/Quiz.js"; // Use ES module import

const router = express.Router();

// Fetch quiz by language
router.get("/quizzes/:language", async (req, res) => {
  try {
    const { language } = req.params;
    const quiz = await Quiz.findOne({ language });

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router; // Use ES module export

