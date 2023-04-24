const selectors = require('../pageobjects/base.page');
//Subpágina que contiene selectores y métodos específicos para una página
class revisionConfirmacion extends selectors{
    // Definir selectores usando métodos getter
    get btnCargarDocumentos() {
        return $('//div[@id="wizardContainer"]/div/div/div[2]/table/tbody/tr/td[2]/button');
    }

    get btnSeleccionarTodos() {  
        //return $('/html/body/form/div/div[2]/div/div/div/div[2]/div/div[2]/div/div/div[1]/div/div/div[5]/div[3]/div[1]/div[3]/div[4]/table/tbody/tr[1]/th');
    }

    get inputSeleccionarDocumento() {
        // TO DO
    }

    get btnCargar() {
        // TO DO
    }
}

module.exports = {selectors:selectors,revisionConfirmacion:revisionConfirmacion}