document.addEventListener("DOMContentLoaded", function () {
    const closeModal = document.getElementById("close-modal"); // Close button

    // ✅ Display Current Plan from LocalStorage
    const currentPlanElement = document.getElementById("current-plan");
    const storedPlan = localStorage.getItem("userPlan") || "No active plan";
    if (currentPlanElement) {
        currentPlanElement.textContent = storedPlan;
    }

    // ✅ Update Payment Page with Selected Plan
    const planParam = new URLSearchParams(window.location.search).get("plan");
    if (planParam) {
        document.getElementById("selected-plan").textContent = planParam;
    }

    // Open Premium Modal
    openPremiumBtn.addEventListener("click", function () {
        premiumModal.style.display = "block";
    });

    // Close Premium Modal
    closePremiumBtn.addEventListener("click", function () {
        premiumModal.style.display = "none";
    });

    // Close modal if user clicks outside of it
    window.addEventListener("click", function (event) {
        if (event.target === premiumModal) {
            premiumModal.style.display = "none";
        }
    });
});

// ✅ Navigate to Subscription Page
function goToSubscription() {
    window.location.href = "subscription.html";
}

// ✅ Navigate to Payment Page with Plan Info
function goToPayment(planName) {
    localStorage.setItem("userPlan", planName);
    window.location.href = `payment.html?plan=${planName}`;
}

// ✅ Redirect to Stripe Payment Page on Click
function confirmPayment() {
    const selectedPlan = document.getElementById("selected-plan").textContent;

    if (!selectedPlan || selectedPlan === "...") {
        alert("Please select a plan first!");
        return;
    }

    // ✅ Store the selected plan in LocalStorage
    localStorage.setItem("userPlan", selectedPlan);

    // ✅ Redirect to Stripe Payment Page
    window.location.href = "payment.html";
}
