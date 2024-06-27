document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("expensesButton").addEventListener("click", () => {
    window.location.href = "expense.html"; // Change this to the correct path of your expenses page
  });
  document.getElementById("earningsButton").addEventListener("click", () => {
    window.location.href = "earning.html"; // Change this to the correct path of your expenses page
  });
  document.getElementById("profileButton").addEventListener("click", () => {
    window.location.href = "profile.html"; // Change this to the correct path of your expenses page
  });
});
