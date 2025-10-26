const SUPABASE_URL = "https://kacwanasbmwbzvqwoqdf.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY3dhbmFzYm13Ynp2cXdvcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMzUzMzksImV4cCI6MjA1ODkxMTMzOX0.cIwuqnRVdZamlC5NNTYnkIOmLq-fPdpdDGatr46x8jQ";

// Call function with a sample product ID (replace this with actual product selection logic)
document.addEventListener("DOMContentLoaded", () => plotPriceChart(1));



const productSelect = document.getElementById("product-select");
const alertInput = document.getElementById("alert-price");
const setAlertButton = document.getElementById("set-alert");
let priceChart;

// Fetch Products for Dropdown
async function fetchProducts() {
    let response = await fetch(`${SUPABASE_URL}/rest/v1/products?select=id,name`, {
        headers: { "apikey": SUPABASE_API_KEY, "Authorization": `Bearer ${SUPABASE_API_KEY}` }
    });

    let products = await response.json();
    productSelect.innerHTML = `<option value="">-- Select a Product --</option>`;
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Fetch Price History & Render Graph
async function fetchPriceHistory(productId) {
    let response = await fetch(`${SUPABASE_URL}/rest/v1/price_history?product_id=eq.${productId}&order=date.asc`, {
        headers: { "apikey": SUPABASE_API_KEY, "Authorization": `Bearer ${SUPABASE_API_KEY}` }
    });

    let priceData = await response.json();
    let labels = priceData.map(entry => entry.date);
    let prices = priceData.map(entry => entry.price);

    renderChart(labels, prices);
}

// Render Chart using Chart.js
function renderChart(labels, prices) {
    if (priceChart) priceChart.destroy(); // Clear previous chart

    let ctx = document.getElementById("priceChart").getContext("2d");
    priceChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Price Trend",
                data: prices,
                borderColor: "#28a745",
                fill: false
            }]
        }
    });
}

// Handle Product Selection
productSelect.addEventListener("change", function () {
    let productId = this.value;
    if (productId) fetchPriceHistory(productId);
});

// Set Price Alert
setAlertButton.addEventListener("click", function () {
    let alertPrice = alertInput.value;
    if (alertPrice) {
        alert(`✅ Price alert set for ₹${alertPrice}!`);
        window.location.href = "admin.html";
    } else {
        alert("⚠️ Please enter a valid price.");
    }
});

// Initialize
fetchProducts();
