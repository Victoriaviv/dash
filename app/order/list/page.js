"use client";

import { useState } from "react";

const initialOrders = [
  { id: "#95954", date: "10/08/2022", customer: "Ron Vargas", status: "Paid", paymentMethod: "Visa", card: "•••• 6165", amount: 168 },
  { id: "#95423", date: "30/07/2022", customer: "Carolyn Hanso", status: "Paid", paymentMethod: "Visa", card: "•••• 7128", amount: 523 },
  { id: "#92903", date: "18/07/2022", customer: "Gabriella May", status: "Paid", paymentMethod: "Paypal", card: "••••@gmail.com", amount: 81 },
  { id: "#92627", date: "09/07/2022", customer: "Tara Fletcher", status: "Paid", paymentMethod: "Master", card: "•••• 0921", amount: 279 },
  { id: "#92509", date: "26/06/2022", customer: "Joyce Freeman", status: "Pending", paymentMethod: "Visa", card: "•••• 1232", amount: 831 },
  { id: "#91631", date: "18/06/2022", customer: "Brittany Hale", status: "Paid", paymentMethod: "Visa", card: "•••• 4597", amount: 142 },
  { id: "#90963", date: "11/06/2022", customer: "Luke Cook", status: "Paid", paymentMethod: "Master", card: "•••• 3881", amount: 232 },
  { id: "#89332", date: "02/06/2022", customer: "Eileen Horton", status: "Pending", paymentMethod: "Paypal", card: "••••@gmail.com", amount: 597 },
  { id: "#89107", date: "16/04/2022", customer: "Frederick Adams", status: "Failed", paymentMethod: "Visa", card: "•••• 3356", amount: 72 },
  { id: "#89021", date: "13/04/2022", customer: "Lee Wheeler", status: "Paid", paymentMethod: "Master", card: "•••• 9564", amount: 110 },
];

export default function OrdersList() {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleDownload = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["ID,Date,Customer,Status,Payment Method,Card,Amount"]
        .concat(
          filteredOrders.map(
            (o) =>
              `${o.id},${o.date},${o.customer},${o.status},${o.paymentMethod},${o.card},${o.amount}`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "orders.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Orders</h1>
        <div className="flex space-x-2">
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Download
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add New
          </button>
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by ID or Customer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-2 border-b">#</th>
              <th className="text-left p-2 border-b">Date</th>
              <th className="text-left p-2 border-b">Customer</th>
              <th className="text-left p-2 border-b">Status</th>
              <th className="text-left p-2 border-b">Payment</th>
              <th className="text-left p-2 border-b">Card</th>
              <th className="text-left p-2 border-b">Amount ($)</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="p-2 border-b">{order.id}</td>
                <td className="p-2 border-b">{order.date}</td>
                <td className="p-2 border-b">{order.customer}</td>
                <td className="p-2 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm ${
                      order.status === "Paid"
                        ? "bg-green-500"
                        : order.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-2 border-b">{order.paymentMethod}</td>
                <td className="p-2 border-b">{order.card}</td>
                <td className="p-2 border-b">${order.amount.toFixed(2)}</td>
              </tr>
            ))}
            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center p-4">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
