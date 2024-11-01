import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="glass-card text-center p-5">
                <h1 className="neon-text mb-4">Customer Manager</h1>
                <p className="text-white mb-4">Manage your customers with our modern interface</p>
                <div className="d-flex justify-content-center gap-4">
                    <button 
                        className="neon-button neon-button-primary"
                        onClick={() => navigate('/customers')}
                    >
                        View Customers
                    </button>
                    <button 
                        className="neon-button neon-button-secondary"
                        onClick={() => navigate('/add')}
                    >
                        Add Customer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;