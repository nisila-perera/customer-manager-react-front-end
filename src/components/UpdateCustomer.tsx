import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Customer } from '../types/Customer';
import { CustomerService } from '../services/CustomerService';

const UpdateCustomer: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [customer, setCustomer] = useState<Customer>({
        id: 0,
        name: '',
        email: '',
        address: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadCustomer();
    }, []);

    const loadCustomer = async () => {
        try {
            if (id) {
                const data = await CustomerService.getCustomerById(parseInt(id));
                setCustomer(data);
            }
        } catch (err) {
            setError('Failed to load customer data');
            console.error('Error loading customer:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await CustomerService.updateCustomer(customer);
            navigate('/customers');
        } catch (error) {
            console.error('Error updating customer:', error);
            setError('Failed to update customer');
        }
    };

    if (loading) {
        return (
            <div className="container mt-4">
                <div className="glass-card text-center">
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mt-4">
                <div className="glass-card">
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                    <button 
                        className="neon-button neon-button-secondary"
                        onClick={() => navigate('/customers')}
                    >
                        Back to Customers
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="glass-card">
                <h2 className="neon-text mb-4">Update Customer</h2>
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
                            Update Customer
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

export default UpdateCustomer;