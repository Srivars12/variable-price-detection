const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // ✅ Serve images

// ✅ Generate 500 Products Dynamically
const products = [];
const productNames = ["Laptop", "Smartphone", "Headphones", "Camera", "Smartwatch", "Tablet", "Gaming Console"];
const productImages = ["laptop.jpg", "smartphone.jpg", "headphones.jpg", "camera.jpg", "smartwatch.jpg", "tablet.jpg", "console.jpg"];

for (let i = 1; i <= 500; i++) {
    const randomIndex = Math.floor(Math.random() * productNames.length);
    products.push({
        id: i,
        name: productNames[randomIndex] + " " + i, // Unique name
        price: Math.floor(Math.random() * 90000) + 1000, // Random price between ₹1000 - ₹90000
        image: productImages[randomIndex] // Random image
    });
}

// ✅ Serve Products Data
app.get("/products", (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
