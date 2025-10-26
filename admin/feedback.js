const SUPABASE_URL = "https://kacwanasbmwbzvqwoqdf.supabase.co";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthY3dhbmFzYm13Ynp2cXdvcWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMzUzMzksImV4cCI6MjA1ODkxMTMzOX0.cIwuqnRVdZamlC5NNTYnkIOmLq-fPdpdDGatr46x8jQ";

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(fetchFeedback, 500);
});

async function fetchFeedback() {
    console.log("📡 Fetching feedback...");

    try {
        let response = await fetch(`${SUPABASE_URL}/rest/v1/feedback`, {
            headers: {
                "apikey": SUPABASE_API_KEY,
                "Authorization": `Bearer ${SUPABASE_API_KEY}`
            }
        });

        let feedbackData = await response.json();
        console.log("✅ Feedback Data:", feedbackData);

        if (feedbackData.length > 0) {
            initializeCharts(feedbackData);
            displayRecentFeedback(feedbackData);
        } else {
            console.warn("⚠️ No feedback data available!");
        }
    } catch (error) {
        console.error("❌ Error fetching feedback:", error);
    }
}

function displayRecentFeedback(feedbackData) {
    const feedbackList = document.getElementById("feedback-list");
    feedbackList.innerHTML = "";

    feedbackData.slice(-10).forEach(feedback => {
        let li = document.createElement("li");
        li.textContent = feedback.additional_comments || "No comments";
        feedbackList.appendChild(li);
    });

    console.log("✅ Recent feedback displayed!");
}

function average(arr) {
    let validNumbers = arr
        .map(num => parseFloat(num))
        .filter(num => !isNaN(num) && num > 0);

    if (validNumbers.length === 0) return 0;
    return (validNumbers.reduce((sum, val) => sum + val, 0) / validNumbers.length).toFixed(1);
}
