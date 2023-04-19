const selectors = require('../pageobjects/base.page');
//Subpágina que contiene selectores y métodos específicos para una página
class datosContratante extends selectors{
    // Definir selectores usando métodos getter
    get inputRFC() {
        return $('#P4_RFC');
    }

    get formularioDatosContratante() {
        return $('#datosContratante');
    }

    get selectDireccionTitular() {
        return $('#P4_ES_IGUAL_CONTRATANTE');
    }

    get inputFechaNacimiento1() {
        return $$('tbody tr[data-rownum="1"] td:nth-child(10)')[0];
    }

    get textFechaNacimiento1() {
        return $$('tbody tr[data-rownum="1"] td:nth-child(10)')[0].$('input');
    }

    get inputFechaNacimiento2() {
        return $$('tbody tr[data-rownum="2"] td:nth-child(10)')[0];
    }

    get textFechaNacimiento2() {
        return $$('tbody tr[data-rownum="2"] td:nth-child(10)')[0].$('input');
    }

    get btnGuardarSolicitud () {
        return $('#btnSaveSolicitud');
    }

    get btnSiguiente() {
        return $('//*[@id="B96044945873135773"]');
    }
}

module.exports = {selectors:selectors,datosContratante:datosContratante}