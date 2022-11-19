import React from 'react'

const URL = 'http://localhost:9999/customer-service/customers'

export default function AddCustomer() {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const customer = { name, email }
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data)
                alert('Customer added successfully')
                window.location.href = '/customers'
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }
  return (
    <div className='p-12'>
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
            <h1 className='text-3xl font-bold mb-6'>Add Customer</h1>
        </div>
            
        <form className='w-96' onSubmit={handleSubmit}>
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
            </div>
            <div class="mb-6">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                <input type="email" id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@naoufalalaa.com" required/>
            </div>

            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    </div>
  )
}
