'use strict';


/**
 * Função para verificar se o valor é vazio
 */
exports.inputIsValid = (value) =>{
    
    if(isNaN(value))
        return false;

    if(value > 1000 || value < 1)
        return false;

    return true;
}
