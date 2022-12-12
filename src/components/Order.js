import React from 'react'
import { Link } from 'react-router-dom'

export default function Order(props) {
    return (
      <div className='flex flex-col'>
              <div className='overflow-x-auto'>
                  <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
                      <table className='min-w-full'>
                          <thead>
                              <tr>
                                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    id
                                  </th>
                                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    Customer Name
                                  </th>
                                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    List of Products
                                  </th>
                                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    Total
                                  </th>
                                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    Status
                                  </th>
                                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    CreatedAt
                                  </th>
                                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    Details
                                  </th>
                              </tr>
                          </thead>
                          <tbody className='bg-white'>
                              {props.orders.map((order, index) => (
                                  <tr key={order.id}>
                                      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                          <div className='flex items-center'>
                                              <div className='ml-4'>
                                                  <div className='text-sm leading-5 font-medium text-gray-900'>
                                                      {order.id}
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                          <div className='flex items-center'>
                                              <div className='ml-4'>
                                                  <div className='text-sm leading-5 font-medium text-blue-500 underline'>
                                                    <Link to={`/customer/${order.id}`}>
                                                      {order.customer.name}
                                                    </Link>
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                          <div className='flex items-center'>
                                              <div className='ml-4'>
                                                  <div className='text-sm leading-5 font-medium text-gray-900'>
                                                      {order.productItems.map((item, index) => (
                                                          <div key={index}>{item.product.name}</div>
                                                      ))}
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                          <div className='flex items-center'>
                                              <div className='ml-4'>
                                                  <div className='text-sm leading-5 font-medium text-gray-900'>
                                                      { parseFloat(order.total).toFixed(2) } $
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                          <div className='flex items-center'>
                                              <div className='ml-4'>
                                                  <div style={{color: order.status==='PENDING'?'orange':order.status==='CREATED'?'green':''}} className='text-sm leading-5 font-medium text-gray-900'>
                                                      {order.status}
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                          <div className='flex items-center'>
                                              <div className='ml-4'>
                                                  <div className='text-sm leading-5 font-medium text-gray-900'>
                                                      {(order.createdAt).split('T')[0]}
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                          <div className='flex items-center'>
                                              <div className='ml-4'>
                                                  <div className='text-sm leading-5 font-medium text-blue-500 underline'>
                                                      <Link to={`/orders/${order.id}`}>
                                                        {`see all the details >>`}
                                                      </Link> 
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
    )
}
  