import axios from 'axios';
import { Customer } from '../types/Customer';

const BASE_URL = 'http://localhost:8080/customer';

export const CustomerService = {
    getAllCustomers: async () => {
        const response = await axios.get<Customer[]>(`${BASE_URL}/get-all`);
        return response.data;
    },

    addCustomer: async (customer: Customer) => {
        const response = await axios.post<Customer>(`${BASE_URL}/add-customer`, customer);
        return response.data;
    },

    updateCustomer: async (customer: Customer) => {
        const response = await axios.put<Customer>(`${BASE_URL}/update-customer`, customer);
        return response.data;
    },

    deleteCustomer: async (id: number) => {
        await axios.delete(`${BASE_URL}/delete-by-id/${id}`);
    },

    getCustomerById: async (id: number) => {
        const response = await axios.get<Customer>(`${BASE_URL}/search-by-id/${id}`);
        return response.data;
    }
};