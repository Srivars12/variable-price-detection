// ✅ Ensure Supabase is initialized first
document.addEventListener("DOMContentLoaded", async function () {
    console.log("DOM fully loaded & parsed.");

    // ✅ Initialize Supabase FIRST
    const SUPABASE_URL = "https://kacwanasbmwbzvqwoqdf.supabase.co";
    const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY3dhbmFzYm13Ynp2cXdvcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMzUzMzksImV4cCI6MjA1ODkxMTMzOX0.cIwuqnRVdZamlC5NNTYnkIOmLq-fPdpdDGatr46x8jQ";

    window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_API_KEY);
    console.log("✅ Supabase initialized:", supabase);

    // ✅ Define fetchOrders globally
    window.fetchOrders = async function () {
        console.log("🔄 Fetching orders...");
        try {
            const { data, error } = await supabase.from('orders').select('*');

            if (error) {
                console.error("❌ Error fetching orders:", error);
                return;
            }

            let tableBody = document.querySelector("#orders tbody");
            tableBody.innerHTML = ""; // Clear existing data

            data.forEach(order => {
                let row = `<tr>
                    <td>${order.user_id}</td>
                    <td>${order.product_id}</td>
                    <td>${new Date(order.purchase_date).toLocaleDateString()}</td>
                </tr>`;
                tableBody.innerHTML += row;
            });

            console.log("✅ Orders fetched successfully!");
        } catch (err) {
            console.error("❌ fetchOrders() Error:", err);
        }
    };

    // ✅ Call fetchOrders AFTER Supabase is initialized
    fetchOrders();
});
