import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import React  from 'react';
import Navbar from '../components/Navbar'
//import Footer from './components/Footer';
import Home from '../pages/home/Home';

import Customers from '../pages/customers/Customers';
import Inventory from '../pages/inventory/Inventory';
import Orders from '../pages/orders/Orders';
import Customer from '../pages/customers/Customer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/customers" element={<Customers/>} />
        <Route path="/customer/:id" element={<Customer/>} />
        <Route path="/products" element={<Inventory/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/orders/:id" element={<Orders/>} />
      </Routes>
    </Router>
  );
}

export default App;