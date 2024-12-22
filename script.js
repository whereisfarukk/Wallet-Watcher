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
  document.getElementById("overviewButton").addEventListener("click", () => {
    window.location.href = "dashboard.html"; // Change this to the correct path of your expenses page
  });
  document.getElementById("budgetsButton").addEventListener("click", () => {
    window.location.href = "budgets.html"; // Change this to the correct path of your expenses page
  });
});

// Get modal
var modal = document.getElementById("modal");

// Get button that opens the modal
var btn = document.getElementById("add-earning-button");

// Get <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Handle form submission (you can modify this based on how you want to process the data)
document
  .getElementById("expenseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // You can get the form values here
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    console.log("Expense Details:", {
      name,
      amount,
      date,
      category,
      description,
    });

    // Close the modal after form submission
    modal.style.display = "none";

    // Optionally, reset the form
    document.getElementById("expenseForm").reset();
  });
