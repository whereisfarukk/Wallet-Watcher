document.addEventListener("DOMContentLoaded", () => {
  const data = {
    labels: [
      "Daily budget",
      "weekly budget",
      "Monthly budget",
      "Half-yearly budget",
      "Yearly budget",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)", // Red with 50% transparency
          "rgba(75, 192, 192, 0.5)", // Green with 50% transparency
          "rgba(255, 205, 86, 0.5)", // Yellow with 50% transparency
          "rgba(201, 203, 207, 0.5)", // Grey with 50% transparency
          "rgba(54, 162, 235, 0.5)", // Blue with 50% transparency
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", // Red border
          "rgba(75, 192, 192, 1)", // Green border
          "rgba(255, 205, 86, 1)", // Yellow border
          "rgba(201, 203, 207, 1)", // Grey border
          "rgba(54, 162, 235, 1)", // Blue border
        ],
        borderWidth: 2, // Set border width
      },
    ],
  };

  const config = {
    type: "polarArea",
    data: data,
    options: {
      responsive: false,
      maintainAspectRatio: false,
      scales: {
        r: {
          grid: {
            color: "rgba(44, 36, 64)", // Transparent grid color
            lineWidth: 0.7,
          },
        },
      },
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Budget Allocation by Category",
        },
      },
    },
  };

  const ctx = document.getElementById("polarChart").getContext("2d");
  const myPolarChart = new Chart(ctx, config);
});
