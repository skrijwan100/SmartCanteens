import React from 'react'
import { useEffect, useState } from 'react'
import { handleError, handleSuccess } from '../component/ErrorMessage'
const ShowOrder = () => {
  const [order, setOrder] = useState()
  const [loder,setloder]= useState(false)
  useEffect(() => {
    const fecthallorder = async () => {
      setloder(true)
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/v3/userorder/allorder`
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await res.json()
      // console.log(data)
      if (!data.status) {
        handleSuccess('No oredr is done')
        
      }
      console.log(data.order)
      setOrder(data.order)
      setloder(false)
    }
    fecthallorder()
  }, [])

  return (order && loder? <div className='h-[84vh] flex justify-center items-center'><div class="loadermain"></div></div>:
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
                {order && order.length > 0 ? (
                  order.map((data, index) => (
                    <tr key={index} className="hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 border-b border-gray-700 text-gray-300">{data.orderfood}</td>
                      <td className="px-6 py-4 border-b border-gray-700 text-gray-300">{data.quantity}</td>
                      <td className="px-6 py-4 border-b border-gray-700 text-gray-300">{data.totalAmount}</td>
                      <td className="px-6 py-4 border-b border-gray-700">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-900 text-green-200">Paid</span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-gray-400">No orders found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-right">
            <p className="text-gray-400 text-sm">Total Orders: {order?.length || 0}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowOrder