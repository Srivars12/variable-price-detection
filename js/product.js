const SUPABASE_URL = "https://kacwanasbmwbzvqwoqdf.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY3dhbmFzYm13Ynp2cXdvcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMzUzMzksImV4cCI6MjA1ODkxMTMzOX0.cIwuqnRVdZamlC5NNTYnkIOmLq-fPdpdDGatr46x8jQ";

const productId = new URLSearchParams(window.location.search).get("id");


if (!productId) {
    console.error("❌ Product ID is missing in the URL!");
} else {
    const productApiUrl = `${SUPABASE_URL}/rest/v1/products?id=eq.${productId}`;
    const priceHistoryApiUrl = `${SUPABASE_URL}/rest/v1/price_history?product_id=eq.${productId}&order=date.asc`;

    console.log("✅ Fetching Product from:", productApiUrl);
    console.log("✅ Fetching Price History from:", priceHistoryApiUrl);

    fetch(productApiUrl, {
        headers: {
            "apikey": SUPABASE_API_KEY,
            "Authorization": `Bearer ${SUPABASE_API_KEY}`,
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        if (data.length > 0) {
            const product = data[0];

            document.getElementById("product-image").src = product.image_url || "default.jpg";
            document.getElementById("product-title").textContent = product.name;
            document.getElementById("product-description").textContent = product.description;
            document.getElementById("product-price").textContent = `$${product.price}`;

            const buyNowButton = document.getElementById("buy-now");
            buyNowButton.href = product.buy_url || "#"; 
            buyNowButton.target = "_blank"; 
        } else {
            console.error("❌ No product found!");
        }
    })
    .catch(err => console.error("❌ Fetch Error (Product):", err));

    // Fetch Price History and Generate Chart
    fetch(priceHistoryApiUrl, {
        headers: {
            "apikey": SUPABASE_API_KEY,
            "Authorization": `Bearer ${SUPABASE_API_KEY}`,
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(priceData => {
        if (priceData.length > 0) {
            const dates = priceData.map(entry => entry.date);
            const prices = priceData.map(entry => entry.price);

            const ctx = document.getElementById("priceChart").getContext("2d");
            new Chart(ctx, {
                type: "line",
                data: {
                    labels: dates,
                    datasets: [{
                        label: "Price Over Time",
                        data: prices,
                        borderColor: "blue",
                        backgroundColor: "rgba(0, 0, 255, 0.2)",
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: { title: { display: true, text: "Date" } },
                        y: { title: { display: true, text: "Price ($)" } }
                    }
                }
            });
        } else {
            console.warn("⚠️ No price history available for this product.");
        }
    })
    .catch(err => console.error("❌ Fetch Error (Price History):", err));
}
