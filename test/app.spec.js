const chai = require('chai');
const server = require('../bin/index');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

describe('Index', function(){

    /**
     * TESTE PARA VERIFICAR SE A CHAMADA ESTÁ RETORNANDO O STATUS 404
     */
    it('Chamada da API de calculo status 404', function(done){
        chai.request(server).get('/aws').send().end(function(err, res){
            res.should.have.status(404);
            done();
        });
    });

    /**
     * TESTE PARA VERIFICAR SE A CHAMADA ESTÁ RETORNANDO O PREÇO DO METRO QUADRADO
     */
    it('Chamada da API de calculo 200', function(done){
        chai.request(server).get('/').send().end(function(err, res){
            res.should.have.status(200);
            res.body.should.have.property('precoMetroQuadrado');
            res.body.precoMetroQuadrado.should.be.equal(145.3);
            done();
        });
        
    });

})