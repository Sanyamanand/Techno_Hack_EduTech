// Initialize charts
document.addEventListener("DOMContentLoaded", function () {
    // Overview Chart
    var overviewChartCanvas = document.getElementById("overviewChart");
    var overviewChart = new Chart(overviewChartCanvas, {
        type: "bar",
        data: {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [{
                label: "Expenses",
                backgroundColor: "#2FC1F0",
                data: [50, 75, 60, 80, 70]
            }]
        },
        options: {
            responsive: true, // Allow chart to be responsive
            maintainAspectRatio: false, // Do not maintain aspect ratio
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Accounts Chart
    var accountsChartCanvas = document.getElementById("accountsChart");
    var accountsChart = new Chart(accountsChartCanvas, {
        type: "doughnut",
        data: {
            labels: ["Checking", "Savings", "Investments"],
            datasets: [{
                data: [30, 45, 25],
                backgroundColor: ["#1A90B8", "#71B4CA", "#A6E9FF"]
            }]
        },
        options: {
            responsive: true, // Allow chart to be responsive
            maintainAspectRatio: false, // Do not maintain aspect ratio

        }
    });
});
