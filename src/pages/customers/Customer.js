import React from 'react'
import axios from 'axios'

//get id form url
const id = window.location.pathname.split('/')[2]
const URL = `http://localhost:9999/customer-service/customers/${id}`


export default function Customer() {
    const [customer, setCustomer] = React.useState(null)
    React.useEffect(() => {
        axios.get(`${URL}`).then((response) => {
            setCustomer(response.data)
        }).catch((error) => {
            console.error(error)
        })
    }, [])
    const deleteButton = document.getElementById('deleteButton')?.addEventListener('click', () => {
        axios.delete(`${URL}`).then((response) => {
            alert('Customer deleted successfully')
            window.location.href = '/customers'
        }).catch((error) => {
            console.error(error)
        })
    })

    if (customer === null) {
        return (
            <div className='flex h-screen' role="status">
                <div className='m-auto'>
                    <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M50 10.5908C27.4013 10.5908 9.08144 28.9107 9.08144 51.5094C9.08144 74.1081 27.4013 92.428 50 92.428C72.5987 92.428 90.9186 74.1081 90.9186 51.5094C90.9186 28.9107 72.5987 10.5908 50 10.5908ZM50 81.428C30.6142 81.428 15.0814 65.8952 15.0814 51.5094C15.0814 37.1236 30.6142 21.5908 50 21.5908C69.3858 21.5908 84.9186 37.1236 84.9186 51.5094C84.9186 65.8952 69.3858 81.428 50 81.428Z" fill="currentColor"/>
                        <path d="M50 21.5908C30.6142 21.5908 15.0814 37.1236 15.0814 51.5094C15.0814 65.8952 30.6142 81.428 50 81.428C69.3858 81.428 84.9186 65.8952 84.9186 51.5094C84.9186 37.1236 69.3858 21.5908 50 21.5908ZM50 72.428C33.4316 72.428 20.0814 59.0778 20.0814 51.5094C20.0814 43.941 33.4316 30.5908 50 30.5908C66.5684 30.5908 79.9186 43.941 79.9186 51.5094C79.9186 59.0778 66.5684 72.428 50 72.428Z" fill="currentColor"/>
                        <path d="M50 30.5908C33.4316 30.5908 20.0814 43.941 20.0814 51.5094C20.0814 59.0778 33.4316 72.428 50 72.428C66.5684 72.428 79.9186 59.0778 79.9186 51.5094C79.9186 43.941 66.5684 30.5908 50 30.5908ZM50 63.428C39.4316 63.428 30.9186 54.915 30.9186 51.5094C30.9186 48.1038 39.4316 39.5908 50 39.5908C60.5684 39.5908 69.0814 48.1038 69.0814 51.5094C69.0814 54.915 60.5684 63.428 50 63.428Z" fill="currentColor"/>
                    </svg>
                    <span className="text-gray-600 font-semibold">Loading...</span>
                </div>
            </div>
        )
    }
  return (
    <div className='flex m-10'> 
        {customer && (
            <div className='m-auto'>
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
                        <tr>
                            <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                                <div className='flex items-center'>
                                    <div className='ml-4'>
                                        <div className='text-sm leading-5 font-medium text-gray-900'>
                                            {customer.name}
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
                    </tbody>
                </table>
            </div>
            <div className='flex flex-wrap -mx-1 lg:-mx-4'>
                <button id='deleteButton' className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                    Delete
                </button>
            </div>
        </div>
        )}
    </div>
  )
}
