const selectors = require('../pageobjects/base.page');
// Subpágina que contiene selectores y métodos específicos para una página
class datosIniciales extends selectors {
     //Definicion de selectores usando métodos getter
    get inputRFC() {
        return $('#P2_RFC');
    }
    get inputNombre () {
        return $('#P2_NOMBRE');
    }
    get inputApellidoPaterno () {
        return $('#P2_APELLIDO_P');
    }
    get nCotizacion () {
        return $('#P3_ID_COTIZACION_DISPLAY');
    }
    get inputApellidoMaterno () {
        return $('#P2_APELLIDO_M');
    }
    get datosInicialesLabel () {
        return $('div.t-Wizard-header div div:nth-child(2) ul li div span.t-WizardSteps-label span');
    }
    get radioSexoF () {
        return $('//div[@id="P2_SEXO"]/div/div/div/label');
    }
    get radioSexoM () {
        return $('//div[@id="P2_SEXO"]/div/div/div[2]/label');
    }
    get inputEdad () {
        return $('#P2_EDAD');
    }
    get btnAgregarFila() {
        return $('button[data-action="selection-add-row"]');
    }
    get inputNombreAsegurado() {
        return $$('tbody tr[role="row"].is-inserted td:nth-child(1)')[0];
    }
    get textNombreAsegurado() {
        return $$('tbody tr[role="row"].is-inserted td:nth-child(1)')[0].$('input[type="text"]');
    }
    get inputApellidoPaternoAsegurado() {
        return $$('tbody tr[role="row"].is-inserted td:nth-child(2)')[1];
    }
    get textApellidoPaternoAsegurado() {
        return $$('tbody tr[role="row"].is-inserted td:nth-child(2)')[1].$('input[type="text"]');
    }
    get inputApellidoMaternoAsegurado() {
        return $$('tbody tr[role="row"] td:nth-child(3)')[0];
    }
    get textApellidoMaternoAsegurado() {
        return $$('tbody tr[role="row"] td:nth-child(3)')[0].$('input');
    }
    get inputParentescoAsegurado() {
        return $$('tbody tr[role="row"] td:nth-child(4)')[0];
    }
    get textParentescoAsegurado() {
        return $$('tbody tr[role="row"] td:nth-child(4)')[0].$('div select');
    }
    get inputEdadAsegurado() {
        return $$('tbody tr[role="row"] td:nth-child(5)')[0];
    }
    get textEdadAsegurado() {
        return $$('tbody tr[role="row"] td:nth-child(5)')[0].$('input');
    }
    get btnGuardarCotizacion () {
        return $('#btnSaveCotizacion');
    }
    get btnSiguiente() {
        return $('div.t-Wizard-header div div:nth-child(3) button');
    }
}
module.exports = {selectors:selectors,datosIniciales:datosIniciales}
