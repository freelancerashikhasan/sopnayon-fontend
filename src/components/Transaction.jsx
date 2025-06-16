import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { url, authToken } = useContext(AuthContext);

  useEffect(() => {
    // Fetch transaction data
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${url}/user/deposit`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setTransactions(response.data);
      } catch (err) {
        setError("Failed to load transaction history.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const calculateBalance = (credit, debit) => {
    return credit - debit;
  };

  const getSum = (field) => {
    return transactions.reduce((acc, transaction) => acc + parseFloat(transaction[field] || 0), 0);
  };

  return (
    <div style={{ padding: "20px", margin: "auto" }}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <thead
              style={{
                backgroundColor: "#085830",
                color: "#fff",
                textAlign: "left",
              }}
            >
              <tr>
                <th style={{ padding: "12px 20px" }}>Account</th>
                <th style={{ padding: "12px 20px" }}>Category</th>
                <th style={{ padding: "12px 20px" }}>Debit</th>
                <th style={{ padding: "12px 20px" }}>Credit</th>
                <th style={{ padding: "12px 20px" }}>Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => {
                const category = transaction.receive_category
                  ? transaction.receive_category.name
                  : transaction.expense_category
                  ? transaction.expense_category.name
                  : "No Category";

                const debit = transaction.receive_category ? null : transaction.debit;
                const credit = transaction.receive_category ? transaction.credit : null;

                return (
                  <tr
                    key={index}
                    style={{
                      borderBottom: "1px solid #ddd",
                      transition: "background-color 0.3s",
                    }}
                  >
                    <td style={{ padding: "10px 20px" }}>{transaction.account.name}</td>
                    <td style={{ padding: "10px 20px" }}>{category}</td>
                    <td style={{ padding: "10px 20px" }}>{debit || "-"}</td>
                    <td style={{ padding: "10px 20px" }}>{credit || "-"}</td>
                    <td style={{ padding: "10px 20px" }}>
                      {calculateBalance(credit, debit).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr
                style={{
                  backgroundColor: "#f8f9fa",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                <td colSpan="2" style={{ padding: "12px 20px", textAlign: "right" }}>
                  <strong>Total</strong>
                </td>
                <td style={{ padding: "12px 20px" }}>{getSum("debit").toFixed(2)}</td>
                <td style={{ padding: "12px 20px" }}>{getSum("credit").toFixed(2)}</td>
                <td style={{ padding: "12px 20px" }}>
                  {(getSum("credit") - getSum("debit")).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}

export default Transaction;
