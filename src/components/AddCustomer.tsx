import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Customer } from '../types/Customer';
import { CustomerService } from '../services/CustomerService';

const AddCustomer: React.FC = () => {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState<Customer>({
        name: '',
        email: '',
        address: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await CustomerService.addCustomer(customer);
            navigate('/customers');
        } catch (error) {
            console.error('Error adding customer:', error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="glass-card">
                <h2 className="neon-text mb-4">Add New Customer</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label text-white">Name</label>
                        <input
                            type="text"
                            className="form-control glass-input"
                            value={customer.name}
                            onChange={(e) => setCustomer({...customer, name: e.target.value})}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-white">Email</label>
                        <input
                            type="email"
                            className="form-control glass-input"
                            value={customer.email}
                            onChange={(e) => setCustomer({...customer, email: e.target.value})}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-white">Address</label>
                        <textarea
                            className="form-control glass-input"
                            value={customer.address}
                            onChange={(e) => setCustomer({...customer, address: e.target.value})}
                            required
                        />
                    </div>
                    <div className="d-flex gap-3">
                        <button 
                            type="submit" 
                            className="neon-button neon-button-primary"
                        >
                            Add Customer
                        </button>
                        <button 
                            type="button" 
                            className="neon-button neon-button-secondary"
                            onClick={() => navigate('/customers')}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCustomer;