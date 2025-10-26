const stripe = Stripe("your_stripe_publishable_key"); // Replace with your Stripe Publishable Key

document.addEventListener("DOMContentLoaded", async function () {
    const checkoutButton = document.getElementById("checkout");
    const selectedPlan = localStorage.getItem("userPlan") || "Basic";
    let amount = 0;

    // ✅ Assign price dynamically
    if (selectedPlan === "Basic") amount = 500; // $5
    else if (selectedPlan === "Pro") amount = 1500; // $15
    else if (selectedPlan === "Premium") amount = 3000; // $30

    // ✅ Update Payment Page with Selected Plan
    document.getElementById("selected-plan").textContent = selectedPlan;

    // ✅ Check if card-element exists before Stripe setup
    const cardElementContainer = document.getElementById("card-element");
    if (!cardElementContainer) {
        console.error("Missing #card-element in payment.html!");
        return;
    }

    // ✅ Stripe Elements Setup
    const elements = stripe.elements();
    const cardElement = elements.create("card");
    cardElement.mount("#card-element");

    checkoutButton.addEventListener("click", async () => {
        try {
            const response = await fetch("http://localhost:3000/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount }),
            });

            const { clientSecret } = await response.json();

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: { card: cardElement },
            });

            if (result.error) {
                console.error(result.error.message);
                alert("Payment failed! Try again.");
            } else {
                alert("Payment Successful!");
                localStorage.setItem("userPlan", selectedPlan); // Save the plan after payment
                window.location.href = "premium.html"; // Redirect to premium page
            }
        } catch (error) {
            console.error("Payment Error:", error);
            alert("An error occurred. Please try again.");
        }
    });
});
