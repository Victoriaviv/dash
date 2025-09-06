import React from 'react';
import { User, Mail, Phone, MapPin, Printer, Edit } from 'lucide-react';

const OrderDetailPage = () => {
  const orderData = {
    orderNumber: '#95954',
    status: 'Fulfilled',
    customer: {
      name: 'Steve Sutton',
      email: 'handsome-obrien@hotmail.com',
      phone: '+1 (541) 754-3010',
      previousOrders: 11,
      avatar: '👤'
    },
    shippingAddress: {
      line1: '100 Main ST',
      line2: 'PO Box 1022',
      city: 'Seattle',
      state: 'WA',
      zip: '98104',
      country: 'United States of America'
    },
    billingAddress: {
      line1: '1527 Pond Reef Rd',
      city: 'Ketchikan',
      state: 'Alaska',
      zip: '99901',
      country: 'United States of America'
    },
    products: [
      {
        id: '098359NT',
        name: 'Snövalla',
        price: 252.00,
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
    ],
    payment: {
      subtotal: 1762.00,
      shipping: 15.00,
      tax: 105.72,
      total: 1870.72,
      customerPayment: 1870.72,
      status: 'Paid'
    },
    note: "If there are any issues or delays with my order, please don't hesitate to contact me, I value clear communication and appreciate your attention to detail.",
    activity: [
      {
        date: 'SUNDAY, 06 MARCH',
        items: [
          {
            status: 'delivered',
            title: 'Parcel has been delivered',
            detail: 'Recipient: Steve Sutton',
            time: '10:13 AM'
          },
          {
            status: 'out-for-delivery',
            title: 'Parcel is out for delivery',
            time: '05:32 AM'
          },
          {
            status: 'at-station',
            title: 'Parcel has arrived at delivery station',
            time: '03:15 AM'
          }
        ]
      },
      {
        date: 'SATURDAY, 05 MARCH',
        items: [
          {
            status: 'picked-up',
            title: 'Parcel has been picked up by courier',
            time: '08:43 AM'
          },
          {
            status: 'preparing',
            title: 'Seller is preparing to ship your parcel',
            time: '05:32 AM'
          }
        ]
      }
    ]
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const getActivityIcon = (status) => {
    const iconClass = "w-3 h-3 rounded-full";
    switch (status) {
      case 'delivered':
        return <div className={`${iconClass} bg-green-500`}></div>;
      case 'out-for-delivery':
      case 'at-station':
      case 'picked-up':
      case 'preparing':
        return <div className={`${iconClass} bg-blue-500`}></div>;
      default:
        return <div className={`${iconClass} bg-gray-400`}></div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Order: {orderData.orderNumber}
          </h1>
          <div className="flex space-x-3">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Edit className="w-4 h-4" />
              <span>Edit</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Products Ordered */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Products ordered</h2>
              
              <div className="space-y-4">
                {orderData.products.map((product) => (
                  <div key={product.id} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                        {product.image}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">ID: {product.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">{formatPrice(product.price)}</div>
                      <div className="text-sm text-gray-500">Qty: {product.quantity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <h2 className="text-lg font-medium text-gray-900">Payment</h2>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {orderData.payment.status}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">{formatPrice(orderData.payment.subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">{formatPrice(orderData.payment.shipping)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">{formatPrice(orderData.payment.tax)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">{formatPrice(orderData.payment.total)}</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span className="text-gray-900">Customer payment</span>
                    <span className="text-gray-900">{formatPrice(orderData.payment.customerPayment)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <h2 className="text-lg font-medium text-gray-900">Activity</h2>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {orderData.status}
                </span>
              </div>

              <div className="space-y-6">
                {orderData.activity.map((day, dayIndex) => (
                  <div key={dayIndex}>
                    <h3 className="font-medium text-gray-900 mb-4">{day.date}</h3>
                    <div className="space-y-4 relative">
                      {day.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3 relative">
                          <div className="flex-shrink-0 mt-1">
                            {getActivityIcon(item.status)}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{item.title}</div>
                            {item.detail && (
                              <div className="text-sm text-gray-500">{item.detail}</div>
                            )}
                            <div className="text-sm text-gray-500 mt-1">{item.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Customer */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-900 mb-4">Customer</h3>
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                  {orderData.customer.avatar}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{orderData.customer.name}</div>
                  <div className="text-sm text-gray-500">{orderData.customer.previousOrders} previous orders</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{orderData.customer.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{orderData.customer.phone}</span>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-900 mb-4">Shipping Address</h3>
              
              <div className="text-gray-600 space-y-1">
                <div>{orderData.shippingAddress.line1}</div>
                <div>{orderData.shippingAddress.line2}</div>
                <div>{orderData.shippingAddress.city} {orderData.shippingAddress.state} {orderData.shippingAddress.zip}</div>
                <div>{orderData.shippingAddress.country}</div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-900 mb-4">Billing address</h3>
              
              <div className="text-gray-600 space-y-1">
                <div>{orderData.billingAddress.line1}</div>
                <div>{orderData.billingAddress.city}</div>
                <div>{orderData.billingAddress.state} {orderData.billingAddress.zip}</div>
                <div>{orderData.billingAddress.country}</div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-900 mb-4">Note</h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {orderData.note}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>Copyright © 2025 Ecme All rights reserved.</div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-700">Term & Conditions</a>
              <a href="#" className="hover:text-gray-700">Privacy & Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;