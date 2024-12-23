document.addEventListener("DOMContentLoaded", () => {
  const Utils = {
    months: () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    CHART_COLORS: {
      red: "rgb(255, 99, 132)",
      blue: "rgb(54, 162, 235)",
    },
    transparentize: (color, opacity) => {
      const alpha = opacity || 0.5;
      return color.replace("rgb", "rgba").replace(")", `, ${alpha})`);
    },
  };

  // Data setup for 12 months
  const labels = Utils.months();
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Expenses (Red)",
        data: [-30, -50, -70, -20, -90, -60, -40, -80, -100, -45, -25, -55], // Fixed negative values
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        zIndex: 1,
      },
      {
        label: "Income (Blue)",
        data: [30, 50, 70, 20, 90, 60, 40, 80, 100, 45, 25, 55], // Fixed positive values
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        zIndex: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Income and Expenses over the last 12 months",
        },
      },
      scales: {
        x: {
          // Ensuring each month is aligned with its corresponding bar
          grid: {
            color: "#2C2440",
            offset: true,
            zIndex: 0,
          },
        },
        y: {
          // Make horizontal grid lines more visible
          grid: {
            color: "#2C2440", // Setting grid line color to #2C2440
            lineWidth: 0.5, // Increase line width to make grid lines more visible
            drawOnChartArea: true, // Ensure grid lines are drawn on the chart area
            zIndex: 0,
          },
          ticks: {
            beginAtZero: true, // Ensure y-axis starts at zero
          },
        },
      },
      elements: {
        bar: {
          // Adjust the width of bars to ensure they fit neatly in the space
          categoryPercentage: 0.8, // Controls the width of each category (each month)
          barPercentage: 0.9, // Controls the space taken by each bar within a category
        },
      },
    },
  };

  // Initialize the chart
  const ctx = document.getElementById("barchart").getContext("2d");
  const myChart = new Chart(ctx, config);
});
