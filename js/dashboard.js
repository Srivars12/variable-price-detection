// ✅ Ensure Supabase is available
if (typeof window.supabase === "undefined") {
    console.error("🚨 Supabase library not loaded. Check your <script> order in HTML!");
} else {
    console.log("✅ Supabase loaded successfully.");
}

// ✅ Initialize Supabase Client
const supabaseUrl = "https://kacwanasbmwbzvqwoqdf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY3dhbmFzYm13Ynp2cXdvcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMzUzMzksImV4cCI6MjA1ODkxMTMzOX0.cIwuqnRVdZamlC5NNTYnkIOmLq-fPdpdDGatr46x8jQ";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey); // ✅ FIXED

// ✅ Fetch Products from Supabase
async function fetchProducts() {
    try {
        const { data, error } = await supabase.from("products").select("*");

        if (error) throw error;
        console.log("✅ Fetched Data from Supabase:", data); // Debugging log

        displayProducts(data);
    } catch (err) {
        console.error("❌ Error fetching products:", err);
    }
}

// ✅ Display Products in the Dashboard
function displayProducts(products) {
    const container = document.getElementById("products-container"); // ✅ Ensure correct ID
    container.innerHTML = ""; // Clear existing content

    if (!products || products.length === 0) {
        container.innerHTML = "<p>No products available.</p>";
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        // ✅ Click event to open product page
        productCard.onclick = () => {
            window.location.href = `product.html?id=${product.id}`;
        };
        productCard.innerHTML = `
            <img src="${product.image_url}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span>$${product.price}</span>
        `;
        container.appendChild(productCard);
    });
}

// ✅ Run Fetch Products on Page Load
document.addEventListener("DOMContentLoaded", fetchProducts);

