import React, { useState, useEffect } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  // Load data from localStorage on first render
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("expenses"));
    if (saved) setTransactions(saved);
  }, []);

  // Auto save to localStorage when transactions change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = () => {
    if (text.trim() === "" || amount.trim() === "") return alert("Enter details");

    const newTransaction = {
      id: Date.now(),
      text,
      amount: Number(amount)
    };

    setTransactions([...transactions, newTransaction]);
    setText("");
    setAmount("");
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  // Calculate totals
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Expense Tracker</h1>

      {/* Balance */}
      <div className="bg-white p-6 rounded shadow w-96 mb-4">
        <h2 className="text-xl font-semibold">Balance</h2>
        <h1 className="text-3xl font-bold mt-2">
          ₹{income + expense}
        </h1>
      </div>

      {/* Income + Expense */}
      <div className="flex gap-4 w-96 mb-4">
        <div className="bg-green-100 p-4 w-1/2 rounded shadow text-center">
          <h3 className="text-xl font-semibold text-green-700">Income</h3>
          <p className="text-2xl font-bold">₹{income}</p>
        </div>

        <div className="bg-red-100 p-4 w-1/2 rounded shadow text-center">
          <h3 className="text-xl font-semibold text-red-700">Expense</h3>
          <p className="text-2xl font-bold">₹{expense}</p>
        </div>
      </div>

      {/* Add Transaction */}
      <div className="bg-white p-6 rounded shadow w-96 mb-6">
        <h2 className="text-xl font-bold mb-2">Add Transaction</h2>

        <input
          type="text"
          placeholder="Description (e.g., Salary, Food)"
          className="border w-full p-2 rounded mb-3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount (e.g., +500 or -200)"
          className="border w-full p-2 rounded mb-3"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white w-full py-2 rounded"
          onClick={addTransaction}
        >
          Add
        </button>
      </div>

      {/* History */}
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-3">History</h2>

        <ul className="space-y-2">
          {transactions.map((t) => (
            <li
              key={t.id}
              className={`flex justify-between p-3 rounded shadow ${
                t.amount > 0 ? "bg-green-50" : "bg-red-50"
              }`}
            >
              <span>{t.text}</span>
              <span className="font-bold">
                ₹{t.amount}
              </span>
              <button
                className="text-red-600 font-bold"
                onClick={() => deleteTransaction(t.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default App;
