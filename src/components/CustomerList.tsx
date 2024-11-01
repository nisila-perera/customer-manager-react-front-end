import React, { useEffect, useState } from 'react';
import { Customer } from '../types/Customer';
import { CustomerService } from '../services/CustomerService';
import { useNavigate } from 'react-router-dom';

const CustomerList: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {
        const data = await CustomerService.getAllCustomers();
        setCustomers(data);
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this customer?')) {
            await CustomerService.deleteCustomer(id);
            loadCustomers();
        }
    };

    return (
        <div className="container mt-4">
            <div className="glass-card">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="neon-text m-0">Customer List</h2>
                    <button 
                        className="neon-button neon-button-primary"
                        onClick={() => navigate('/add')}
                    >
                        Add New Customer
                    </button>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(customer => (
                                <tr key={customer.id}>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.address}</td>
                                    <td>
                                        <div className="d-flex gap-2">
                                            <button 
                                                className="neon-button neon-button-secondary"
                                                onClick={() => navigate(`/update/${customer.id}`)}
                                            >
                                                Edit
                                            </button>
                                            <button 
                                                className="neon-button neon-button-primary"
                                                onClick={() => handleDelete(customer.id!)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CustomerList;