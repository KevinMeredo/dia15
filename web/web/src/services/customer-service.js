import { api } from "./api";

export async function getFoods() {
    const accessToken = sessionStorage.getItem('token');
    const result = await api.get('/foods', {
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
        email: data.email
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
        email: data.email
    }, {
        headers: {
            'Authorization': `Bearer ${JSON.parse(accessToken)}`
        }
    });
    return result;
}
