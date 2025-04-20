import express from 'express';
import Quiz from '../models/quizModel.js';

const router = express.Router();

router.get('/:language', async (req, res) => {
    try {
        const decodedLang = decodeURIComponent(req.params.language);
        console.log("Decoded language:", decodedLang);
    
        const quiz = await Quiz.findOne({ language: decodedLang }); // No uppercase here
        if (!quiz) {
          return res.status(404).json({ message: 'Quiz not found' });
        }
        res.json(quiz);
      } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
      }
});

export default router;