import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomerList from './components/CustomerList';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

function App() {
    return (
        <Router>
            <div className="App min-vh-100">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/customers" element={<CustomerList />} />
                    <Route path="/add" element={<AddCustomer />} />
                    <Route path="/update/:id" element={<UpdateCustomer />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;