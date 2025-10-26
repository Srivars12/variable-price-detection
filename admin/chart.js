let chartInstances = {};

function initializeCharts(feedbackData) {
    console.table(feedbackData);

    const experienceRatings = feedbackData.map(f => f.experience_rating);
    const supportRatings = feedbackData.map(f => f.support_rating);
    const usabilityRatings = feedbackData.map(f => f.usability_rating);
    const pricingRatings = feedbackData.map(f => f.pricing_rating);

    updateChart("experienceChart", "Experience Rating", experienceRatings);
    updateChart("supportChart", "Support Rating", supportRatings);
    updateChart("usabilityChart", "Usability Rating", usabilityRatings);
    updateChart("pricingChart", "Pricing Rating", pricingRatings);
}

function updateChart(chartId, label, data) {
    const canvas = document.getElementById(chartId);
    if (!canvas) {
        console.error(`❌ Canvas ${chartId} not found!`);
        return;
    }

    if (chartInstances[chartId]) {
        chartInstances[chartId].destroy();
    }

    const ctx = canvas.getContext("2d");
    chartInstances[chartId] = new Chart(ctx, {
        type: "bar",
        data: {
            labels: data.map((_, i) => `User ${i + 1}`),
            datasets: [{
                label: label,
                data: data,
                backgroundColor: "#3498db"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, max: 5 } }
        }
    });

    console.log(`✅ ${label} Chart updated!`);
}
