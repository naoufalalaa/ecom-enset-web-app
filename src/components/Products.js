import React from 'react'

export default function Products(props) {
    console.log(props.products)
    return (
      <div className='flex flex-col'>
              <div className='overflow-x-auto'>
                  <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
                      <table className='min-w-full'>
                          <thead>
                              <tr>
                                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                      Name
                                  </th>
                                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    Quantity
                                  </th>
                                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                                    Price
                                  </th>
                              </tr>
                          </thead>
                          <tbody className='bg-white'>
                              {props.products.map((product, index) => (
                                  <tr key={product.id}>
                                      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                          <div className='flex items-center'>
                                              <div className='ml-4'>
                                                  <div className='text-sm leading-5 font-medium text-gray-900'>
                                                      {product.name}
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                          <div className='flex items-center'>
                                              <div className='ml-4'>
                                                  <div className='text-sm leading-5 font-medium text-gray-900'>
                                                      {product.quantity}
                                                  </div>
                                              </div>
                                          </div>
                                      </td>
                                      <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                          <div className='flex items-center'>
                                              <div className='ml-4'>
                                                  <div className='text-sm leading-5 font-medium text-gray-900'>
                                                    { parseFloat(product.price).toFixed(2) } $
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
  