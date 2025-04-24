import express from 'express';
import DebugQuestion from '../models/DebugQuestion.js';

const router = express.Router();

// Route to get questions based on game language
router.get('/:gameLanguage', async (req, res) => {
  try {
    const { gameLanguage } = req.params;
    
    // Fetch questions from MongoDB based on gameLanguage
    const questions = await DebugQuestion.find({ language: gameLanguage });

    if (questions.length === 0) {
      return res.status(404).json({ message: 'No questions found for this language' });
    }

    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

