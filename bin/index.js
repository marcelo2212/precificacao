'use strict'

const app = require('../src/app');
const http = require('http');

const port = normalizePort(process.env.PORT || '8100');
//const host = '0.0.0.0';
app.set('port', port);

const server = http.createServer(app);
//host,
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('API RODANDO NA PORTA...: ' + port);
    }
});

server.on('error', onError);

/**
 * FUNÇÃO PARA TRATAMENTO DE ERROS
 * @param {error} error 
 */
function onError(error) {
    if (error.syscall !== 'listen')
        throw error;

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' precisa de privilégio para a utilização');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' está em uso');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * FUNÇÃO PARA NORMALIZAR A PORTA DA API
 * @param {*} val 
 */
function normalizePort(val){
    const port = parseInt(val, 10);
    
    if(isNaN(port))
        return val;

    if(port >= 0)
        return port;

    return false;
}

module.exports = server