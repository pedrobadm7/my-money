const express = require('express')

module.exports = function(server) {

    //Definir URL base para todas as rotas
    const router = express.Router();
    server.use('./api', router) //Definindo URL base para a API

    //Rotas de Ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.resgister(router, '/billingCycles') //Registrar todos os webservices Rest dentro da URL './billingCycles'
}