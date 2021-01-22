'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/index-controller');


/**
 *  @swagger
 * paths:
 *  /:
 *      get:
 *          summary: Retornar o preço do metro quadrado
 *          description: Api responsável retornar o preço do metro quadrado
 *          produces:
 *              - application/json
 *          parameters:
 *               - name: metroQuadrado
 *                 description: o valor tem que ser no mínimo 1, e no máximo 10.000 metros quadrados
 *          responses:
 *              '200':
 *                  description: Sucesso, retorna o preço do metro quadrado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              items:
 *                                  $ref:'#/components/schemas/valor'
 *              '402':
 *                  description: Erro, o valor inserido é inválido
 *              '503':
 *                  description: Erro no servidor
 * components:
 *     schemas:
 *         valor:
 *             type: object
 *             properties:
 *                 precoMetroQuadrado:
 *                     type: interger
 *                     format: int64
 */
router.get('/', controller.returnPrecoMetroQuadrado);

module.exports = router;