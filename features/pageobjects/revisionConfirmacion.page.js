const selectors = require('../pageobjects/base.page');
//Subpágina que contiene selectores y métodos específicos para una página
class revisionConfirmacion extends selectors{
    // Definir selectores usando métodos getter
    get btnEnviar() {
        // TO DO
    }

    get btnSeleccionarTodos() {
        // TO DO
    }

    get inputSeleccionarDocumento() {
        // TO DO
    }

    get btnCargar() {
        // TO DO
    }
}

module.exports = {selectors:selectors,revisionConfirmacion:revisionConfirmacion}