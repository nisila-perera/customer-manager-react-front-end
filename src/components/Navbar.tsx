import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg glass-navbar">
            <div className="container">
                <Link className="navbar-brand neon-text" to="/">Customer Manager</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    style={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link 
                                className={`nav-link ${location.pathname === '/customers' ? 'active' : ''}`} 
                                to="/customers"
                            >
                                Customers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className={`nav-link ${location.pathname === '/add' ? 'active' : ''}`} 
                                to="/add"
                            >
                                Add Customer
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;