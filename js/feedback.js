document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedback-form");

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // ✅ Show Success Message
        alert("Feedback Form has been accepted successfully!");


        // Redirect to dashboard.html
        window.location.href = "dashboard.html";
    });
});
