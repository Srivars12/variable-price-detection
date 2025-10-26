require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.static(path.join(__dirname, "../admin"))); // ✅ Serve the admin folder


// Mock user database
const users = [{ email: "admin@gmail.com", password: "1234", role: "admin" }];

// Handle Signup
app.post("/signup", (req, res) => {
    const { email, password, role } = req.body;

    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: "User already exists!" });
    }

    users.push({ email, password, role });
    res.json({ message: "Signup successful! Please login." });
});

// Handle Login
app.post("/login", (req, res) => {
    const { email, password, role } = req.body;

    const user = users.find(user => user.email === email && user.password === password && user.role === role);
    
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials. Try again." });
    }

    res.json({ message: "Login successful!" });
});

// ✅ Redirect User to Dashboard After Login
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/dashboard.html"));
});

// ✅ Redirect Admin to Admin Page
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin/admin.html"));
});

// ✅ Stripe Payment Integration
app.post("/create-payment-intent", async (req, res) => {
    try {
        const { amount } = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100, // Convert to cents
            currency: "usd",
        });

        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

