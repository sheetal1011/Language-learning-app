import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import courseRoutes from './routes/courseRoutes.js';
import quizRoutes from './routes/quizRoutes.js';

dotenv.config();
const app = express();

app.use(express.json()); 
app.use(cors());
app.use(cookieParser());
app.use('/api/auth',authRoutes);
app.use('/api/courses',courseRoutes);
app.use('/api/quizzes',quizRoutes);

const MONGO_URI=process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
    res.send("Backend is running fine ...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





