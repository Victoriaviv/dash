"use client"
import React, { useState } from 'react';
import { Package, User, MapPin, CreditCard, Search, Plus, Minus } from 'lucide-react';

const EditOrderPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([
    {
      id: '098359NT',
      name: 'Snövalla',
      price: 504.00,
      quantity: 2,
      image: '📦'
    },
    {
      id: '098336NT',
      name: 'Maneki Neko Poster',
      price: 389.00,
      quantity: 1,
      image: '🖼️'
    },
    {
      id: '098368NT',
      name: 'Ektöra',
      price: 869.00,
      quantity: 1,
      image: '🪑'
    }
  ]);

  const [customerDetails, setCustomerDetails] = useState({
    firstName: 'Steve Sutton',
    userName: 'Sutton',
    email: ''
  });

  const [addressInfo, setAddressInfo] = useState({
    country: 'United States',
    address: '123 Main St',
    city: 'New York',
    postalCode: '10001'
  });

  const [paymentInfo, setPaymentInfo] = useState({
    method: 'Paypal',
    paypalEmail: 'handsome-obrien@hotmail.com'
  });

  const [searchQuery, setSearchQuery] = useState('');

  const updateQuantity = (productId, change) => {
    setSelectedProducts(products => 
      products.map(product => 
        product.id === productId 
          ? { ...product, quantity: Math.max(0, product.quantity + change) }
          : product
      ).filter(product => product.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Edit order</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              {/* Select Products Step */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Package className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Select products</h3>
                  <p className="text-sm text-gray-500 mt-1">Add product to purchase list.</p>
                </div>
              </div>

              {/* Customer Details Step */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Customer details</h3>
                  <p className="text-sm text-gray-500 mt-1">Enter customer information like name, email & phone number.</p>
                </div>
              </div>

              {/* Address Information Step */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Address Information</h3>
                  <p className="text-sm text-gray-500 mt-1">Provide shipping address details.</p>
                </div>
              </div>

              {/* Payment Step */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Payment</h3>
                  <p className="text-sm text-gray-500 mt-1">Enter payment method and details to complete the transaction.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Select Products Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-gray-900">Select products</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Browse products
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search product"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Product Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="text-right py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="text-right py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {selectedProducts.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="py-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                              {product.image}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{product.name}</div>
                              <div className="text-sm text-gray-500">ID: {product.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 text-right font-medium text-gray-900">
                          {formatPrice(product.price)}
                        </td>
                        <td className="py-4 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <button
                              onClick={() => updateQuantity(product.id, -1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            >
                              <Minus className="w-4 h-4 text-gray-600" />
                            </button>
                            <span className="w-8 text-center font-medium text-gray-900">{product.quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, 1)}
                              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            >
                              <Plus className="w-4 h-4 text-gray-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total */}
              <div className="flex justify-end mt-6 pt-6 border-t border-gray-200">
                <div className="text-right">
                  <div className="text-lg font-semibold text-gray-900">
                    Total: {formatPrice(calculateTotal())}
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Details Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Customer details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    value={customerDetails.firstName}
                    onChange={(e) => setCustomerDetails({...customerDetails, firstName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">User Name</label>
                  <input
                    type="text"
                    value={customerDetails.userName}
                    onChange={(e) => setCustomerDetails({...customerDetails, userName: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={customerDetails.email}
                  onChange={(e) => setCustomerDetails({...customerDetails, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>
            </div>

            {/* Address Information Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Address Information</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <select
                    value={addressInfo.country}
                    onChange={(e) => setAddressInfo({...addressInfo, country: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="United States">🇺🇸 United States</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <input
                    type="text"
                    value={addressInfo.address}
                    onChange={(e) => setAddressInfo({...addressInfo, address: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      value={addressInfo.city}
                      onChange={(e) => setAddressInfo({...addressInfo, city: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                    <input
                      type="text"
                      value={addressInfo.postalCode}
                      onChange={(e) => setAddressInfo({...addressInfo, postalCode: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Payment</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment method</label>
                  <select
                    value={paymentInfo.method}
                    onChange={(e) => setPaymentInfo({...paymentInfo, method: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Paypal">💳 Paypal</option>
                    <option value="Credit Card">💳 Credit Card</option>
                    <option value="Bank Transfer">🏦 Bank Transfer</option>
                  </select>
                </div>

                {paymentInfo.method === 'Paypal' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Paypal email</label>
                    <input
                      type="email"
                      value={paymentInfo.paypalEmail}
                      onChange={(e) => setPaymentInfo({...paymentInfo, paypalEmail: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <button className="px-6 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                Delete
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrderPage;