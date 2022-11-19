import React from 'react'

const URL = 'http://localhost:9999/inventory-service/products'

export default function AddProduct() {
    const [name, setName] = React.useState('')
    const [quantity, setQuantity] = React.useState('')
    const [price, setPrice] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        document.getElementById('subFor').disabled = true
        const product = { name, quantity, price }
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data)
                alert('Product added successfully')
                window.location.href = '/products'
            })
            .catch((error) => {
                document.getElementById('subFor').disabled = false
                console.error('Error:', error)
            })
    }
  return (
    <div className='p-12'>
        <div className='flex flex-wrap -mx-1 lg:-mx-4'>
            <h1 className='text-3xl font-bold mb-6'>Add Product</h1>
        </div>
            
        <form className='w-96' onSubmit={handleSubmit}>
            <div class="mb-6">
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Product name</label>
                <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
            </div>
            <div class="mb-6">
                <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 ">Quantity</label>
                <input type="number" id='quantity' name='quantity' value={quantity} onChange={e => setQuantity(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Quantity" required/>
            </div>
            <div class="mb-6">
                <label for="price" class="block mb-2 text-sm font-medium text-gray-900 ">Price</label>
                <input type="text" id='price' name='price' value={price} onChange={e => setPrice(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Price" required/>
            </div>

            <button id='subFor' type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    </div>
  )
}
