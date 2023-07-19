require('../database');

const { FoodModel } = require('../models/food-model');
const { CustomerModel } = require('../models/customer-model')

const foods = [
    {
        nome: 'Arroz',
        unidadeMedida: 'Kilograma'
    },
    {
        nome: 'Maça',
        unidadeMedida: 'Grama'
    },
    {
        nome: 'Leite',
        unidadeMedida: 'Mililitro'
    },
    {
        nome: 'Feijão',
        unidadeMedida: 'Kilograma'
    },
    {
        nome: 'Farinha de Trigo',
        unidadeMedida: 'Kilograma'
    },
    {
        nome: 'Tomate',
        unidadeMedida: 'Kilograma'
    },
    {
        nome: 'Banana',
        unidadeMedida: 'Kilograma'
    },
    {
        nome: 'Melância',
        unidadeMedida: 'Kilograma'
    },
    {
        nome: 'Mandioca',
        unidadeMedida: 'Kilograma'
    },
    {
        nome: 'Ovos',
        unidadeMedida: 'Grama'
    },
    {
        nome: 'Coca Cola',
        unidadeMedida: 'Litro'
    },
    {
        nome: 'Óleo',
        unidadeMedida: 'Litro'
    },
    {
        nome: 'Carne Moída',
        unidadeMedida: 'Kilograma'
    },
    {
        nome: 'Vinagre',
        unidadeMedida: 'Mililitro'
    },
    {
        nome: 'Costela',
        unidadeMedida: 'Kilograma'
    },
    {
        nome: 'Peito de Frango',
        unidadeMedida: 'Kilograma'
    },
    {
        nome: 'Suco',
        unidadeMedida: 'Mililitro'
    },
];

const customers = [
    {
        nome: 'Kevin',
        email: 'kevinmedeiros159@gmail.com'
    },
    {
        nome: 'Jorge',
        email: 'Jorge23@gmail.com'
    },
];

(async () => {
    for (let food of foods) {
        await FoodModel.create({
            nome: food.nome,
            unidadeMedida: food.unidadeMedida
        });
    }
    for (let customer of customers) {
        await CustomerModel.create({
            nome: customer.nome,
            email: customer.email
        });
    }
    console.log('Tudo cadastrado!');
})();
