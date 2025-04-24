import mongoose from 'mongoose';

const debugQuestionSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  options: [String],
  correctIndex: {
    type: Number,
    required: true
  },
  explanation: {
    type: String,
    required: true
  }
});

const DebugQuestion = mongoose.model('DebugQuestion', debugQuestionSchema);

export default DebugQuestion;
