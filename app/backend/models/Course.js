import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  lessons: [lessonSchema],
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
