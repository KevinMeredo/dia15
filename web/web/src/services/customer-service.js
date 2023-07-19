import { api } from "./api";

export async function getCustomers() {
    const accessToken = sessionStorage.getItem('token');
    const result = await api.get('/customers', {
        headers: {
            'Authorization': `Bearer ${JSON.parse(accessToken)}`
        }
    });
    return result;
}

export async function deleteCustomer(id) {
    const accessToken = sessionStorage.getItem('token');
    const result = await api.delete(`/customer/${id}`, {
        headers: {
            'Authorization': `Bearer ${JSON.parse(accessToken)}`
        }
    });
    return result;
}

export async function updateCustomer(data) {
    const accessToken = sessionStorage.getItem('token');
    const result = await api.put(`/customer/${data.id}`, {
        nome: data.nameCustomer,
        email: data.emailCustomer
    }, {
        headers: {
            'Authorization': `Bearer ${JSON.parse(accessToken)}`
        }
    });
    return result;
}

export async function createCustomer(data) {
    const accessToken = sessionStorage.getItem('token');
    const result = await api.post('/customer', {
        nome: data.nameCustomer,
        email: data.emailCustomer
    }, {
        headers: {
            'Authorization': `Bearer ${JSON.parse(accessToken)}`
        }
    });
    return result;
}
