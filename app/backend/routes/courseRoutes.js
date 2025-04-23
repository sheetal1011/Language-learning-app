import express from 'express';
import Course from '../models/Course.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/search', async (req, res) => {
  const query = req.query.q;

  try {
    const courses = await Course.find({
      title: { $regex: query, $options: 'i' } // case-insensitive search
    });

    res.json(courses);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.json(course);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching course', error: err.message });
    }
  });
 
  


export default router;
