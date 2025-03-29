import express from 'express';
import session from "express-session";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from "./routes/userRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";

dotenv.config();

const app = express();

app.use(express.json()); 
app.use(cors());
app.use("/api/user",userRoutes);
app.use("/api",quizRoutes);

const MONGO_URI=process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
    res.send("Backend is running...");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



