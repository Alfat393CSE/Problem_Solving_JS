document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseName = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  let totalAmount = calculateAmount();
  renderExpense();
  updateExpense();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value.trim());

    if (name !== "" && amount > 0 && !isNaN(amount)) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      };
      expenses.push(newExpense);
      saveLocalStorage();
      renderExpense();
      updateExpense();

      expenseName.value = "";
      expenseAmount.value = "";
    }
  });

  function renderExpense() {
    expenseList.textContent = "";
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <span>${expense.name} - $${expense.amount}</span>
      <button data_id = "${expense.id}">Delete</button>
      `;
      expenseList.appendChild(li);
    });
  }

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseID = parseInt(e.target.getAttribute("data_id"));
      expenses = expenses.filter((expense) => expense.id !== expenseID);

      saveLocalStorage();
      renderExpense();
      updateExpense();
    }
  });

  function updateExpense() {
    totalAmount = calculateAmount();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  function calculateAmount() {
    return expenses.reduce((acc, cur) => acc + cur.amount, 0);
  }

  function saveLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
});
