// Function to render the price chart
function renderPriceChart(dates, prices) {
    const ctx = document.getElementById("priceChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: dates, // X-axis: Dates
            datasets: [{
                label: "Price Over Time",
                data: prices, // Y-axis: Prices
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.2)",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: { display: true, text: "Date" }
                },
                y: {
                    title: { display: true, text: "Price ($)" }
                }
            }
        }
    });
}
