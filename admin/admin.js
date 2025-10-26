const SUPABASE_URL = "https://kacwanasbmwbzvqwoqdf.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY3dhbmFzYm13Ynp2cXdvcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMzUzMzksImV4cCI6MjA1ODkxMTMzOX0.cIwuqnRVdZamlC5NNTYnkIOmLq-fPdpdDGatr46x8jQ";


async function fetchAdminStats() {
    try {
        // Fetch total users
        let userRes = await fetch(`${SUPABASE_URL}/rest/v1/users?select=count`, {
            headers: { "apikey": SUPABASE_API_KEY, "Authorization": `Bearer ${SUPABASE_API_KEY}` }
        });
        let users = await userRes.json();
        document.getElementById("total-users").textContent = users[0]?.count || 0;

        // Fetch total products
        let productRes = await fetch(`${SUPABASE_URL}/rest/v1/products?select=count`, {
            headers: { "apikey": SUPABASE_API_KEY, "Authorization": `Bearer ${SUPABASE_API_KEY}` }
        });
        let products = await productRes.json();
        document.getElementById("total-products").textContent = products[0]?.count || 0;

        // Fetch total sales (dummy for now, needs to be linked to sales table)
        document.getElementById("total-sales").textContent = "$" + (Math.random() * 10000).toFixed(2);

    } catch (error) {
        console.error("❌ Error fetching admin stats:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchAdminStats);

document.getElementById("logout-btn").addEventListener("click", function () {
    // ✅ Clear any stored login session (localStorage or sessionStorage)
    localStorage.removeItem("adminLoggedIn");

    // ✅ Redirect to login page
    window.location.href = "../index.html"; 
});
