import React from 'react'

const ShowOrder = () => {
  return (
    <div className='w-full min-h-[85vh] flex items-start p-10 justify-center bg-gray-900'>
      <div className="w-full max-w-4xl overflow-hidden shadow-lg rounded-lg border border-gray-700">
        <div className="bg-gray-800 p-6">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Order Details</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-700 text-left">
                  <th className="px-6 py-4 font-semibold text-gray-200 border-b border-gray-600">Food Item</th>
                  <th className="px-6 py-4 font-semibold text-gray-200 border-b border-gray-600">Quantity</th>
                  <th className="px-6 py-4 font-semibold text-gray-200 border-b border-gray-600">Total Amount</th>
                  <th className="px-6 py-4 font-semibold text-gray-200 border-b border-gray-600">Payment Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">Chicken Biryani</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">2</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">200</td>
                  <td className="px-6 py-4 border-b border-gray-700">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-900 text-green-200">Paid</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">Vegetable Pizza</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">1</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">200</td>
                  <td className="px-6 py-4 border-b border-gray-700">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-900 text-green-200">Paid</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">Chocolate Cake</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">1</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">200</td>
                  <td className="px-6 py-4 border-b border-gray-700">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-900 text-yellow-200">Pending</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">French Fries</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">3</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">200</td>
                  <td className="px-6 py-4 border-b border-gray-700">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-900 text-green-200">Paid</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">Iced Coffee</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">2</td>
                  <td className="px-6 py-4 border-b border-gray-700 text-gray-300">200</td>
                  <td className="px-6 py-4 border-b border-gray-700">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-900 text-red-200">Failed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-right">
            <p className="text-gray-400 text-sm">Total Orders: 5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowOrder