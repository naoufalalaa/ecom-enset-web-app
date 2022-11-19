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
            console.log(error)
        })
    }, [])

  return (
    <div>
        {customer && (
            <div>
                <h1>{customer.name}</h1>
                <p>{customer.email}</p>
            </div>
        )}
    </div>
  )
}
