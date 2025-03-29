import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "Signup successful" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // ✅ Store session (if using express-session)
        req.session.user = { id: user._id, name: user.name, email: user.email };

        res.status(200).json({ message: "Login successful", user: req.session.user });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;


