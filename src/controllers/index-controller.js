'use strict';

/**
 * FUNÇÃO RESPONSÁVEL POR RETORNAR O PREÇO DO METRO QUADRADO
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.returnPrecoMetroQuadrado = (req, res, next) =>{
    try {
        res.status(200).send({
            precoMetroQuadrado: 145.3 
        });
    } catch (error) {
        res.status(503).send(error);
    }
}