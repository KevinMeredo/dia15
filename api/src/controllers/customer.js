const { HttpHelper } = require('../utils/http-helper');
const { CustomerModel } = require('../models/customer-model');

class CustomerController {
    async create(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { nome, email } = request.body;
            if (!nome) return httpHelper.badRequest('Parâmetros inválidos!');

            if (!email)  return httpHelper.badRequest('Parâmetros inválidos!');

            const customer = await CustomerModel.create({
                nome, email
            });
            return httpHelper.created(customer);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async getAll(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const customers = await CustomerModel.findAll();
            return httpHelper.ok(customers);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async delete(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;
            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');
            const customerExists = await CustomerModel.findOne({ where: { id } });
            if (!customerExists) return httpHelper.notFound('Cliente não encontrado!');
            await CustomerModel.destroy({ where: { id } });
            return httpHelper.ok({
                message: 'Cliente deletado com sucesso!'
            })
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async update(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;
            const { nome, email } = request.body;
            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');
            if (!email)  return httpHelper.badRequest('Parâmetros inválidos!');
            
            const customerExists = await CustomerModel.findByPk(id);
            if (!customerExists) return httpHelper.notFound('cliente não encontrado!');
            await CustomerModel.update({
                nome, email
            }, {
                where: { id }
            });
            return httpHelper.ok({
                message: 'Cliente atualizado com sucesso!'
            });
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }
}

module.exports = { CustomerController };
