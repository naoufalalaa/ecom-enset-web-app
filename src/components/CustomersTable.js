import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomersTable(props) {
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
                                    Email
                                </th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            {props.customers.map((customer, index) => (
                                <tr key={customer.id}>
                                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                        <div className='flex items-center'>
                                            <div className='ml-4'>
                                                <div className='text-sm leading-5 font-medium '>
                                                   ÷ <Link to={`/customer/${customer.id}`}>{customer.name}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                        <div className='flex items-center'>
                                            <div className='ml-4'>
                                                <div className='text-sm leading-5 font-medium text-gray-900'>
                                                    {customer.email}
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
