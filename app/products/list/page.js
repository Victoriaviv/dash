"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PenSquare, Trash } from "lucide-react";

export default function ProductTable() {
  const router = useRouter();

  const initialProducts = [
    { id: '098327NT', name: 'Flörven', image: '/images/florven.jpg', price: 252.00, quantity: 46, sales: 387, totalSales: 1500 },
    { id: '098359NT', name: 'Snövalla', image: '/images/snovalla.jpg', price: 139.00, quantity: 28, sales: 892, totalSales: 1500 },
    { id: '098383NT', name: 'Echoes Necklace', image: '/images/echoes.jpg', price: 99.00, quantity: 52, sales: 1145, totalSales: 1500 },
    { id: '098342NT', name: 'Lömnäs', image: '/images/lomnas.jpg', price: 68.00, quantity: 92, sales: 651, totalSales: 1500 },
    { id: '098371NT', name: 'Kallaxa', image: '/images/kallaxa.jpg', price: 70.00, quantity: 119, sales: 234, totalSales: 1500 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const deleteProduct = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter(p => p.id !== id));
      setSelectedIds(selectedIds.filter(i => i !== id));
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-md p-6 w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
          <div className="flex space-x-3">
            <button
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              onClick={() => alert("Export functionality not implemented")}
            >
              Export
            </button>
            <button
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              onClick={() => router.push("/products/create")}
            >
              Add Product
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search by name or ID"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Selected Items Info */}
        {selectedIds.length > 0 && (
          <div className="mb-2 text-sm text-gray-600">
            {selectedIds.length} item{selectedIds.length > 1 ? "s" : ""} selected
          </div>
        )}

        {/* Product Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    checked={selectedIds.length === filteredProducts.length && filteredProducts.length > 0}
                    onChange={() => {
                      if (selectedIds.length === filteredProducts.length) setSelectedIds([]);
                      else setSelectedIds(filteredProducts.map(p => p.id));
                    }}
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sales</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.map(product => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      checked={selectedIds.includes(product.id)}
                      onChange={() => toggleSelect(product.id)}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 relative">
                        <Image src={product.image} alt={product.name} fill className="object-cover rounded-full" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">ID: {product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{product.quantity}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{product.sales} Sales</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                      <div
                        className="h-2.5 rounded-full"
                        style={{
                          width: `${(product.sales / product.totalSales) * 100}%`,
                          backgroundColor: product.sales / product.totalSales > 0.7 ? "#22c55e" : "#ef4444",
                        }}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right flex space-x-2 justify-end">
                    <button
                      className="text-indigo-600 hover:text-indigo-900"
                      onClick={() => router.push(`/products/edit/${product.id}`)}
                    >
                      <PenSquare size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => deleteProduct(product.id)}
                    >
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
