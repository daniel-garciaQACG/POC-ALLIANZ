const selectors = require('../pageobjects/base.page');
/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class planCoberturas extends selectors {
    /**
     * Definir selectores usando métodos getter
     */
    get formularioCoberturaBasica() {
        return $('#camposBasicaContainer');
    }

    get selectPlan() {
        return $('#P3_PLAN_MOSTRADO');
    }

    get selectSuma() {
        return $('#P3_SUMA_ASEGURADA');
    }

    get selectDeducible() {
        return $('#P3_DEDUCIBLE');
    }

    get selectEntidad() {
        return $('#P3_ENTIDAD');
    }

    get selectCiudad() {
        return $('#P3_CIUDAD');
    }

    get selectCoaseguro() {
        return $('#P3_COASEGURO');
    }

    get selectGUA() {
        return $('#P3_GUA');
    }

    get selectConductoCobro() {
        return $('#P3_CONDUCTO_COBRO');
    }

    get btnUrgenciaExtranjero() {
        return $('//table[@id="tabla_planes"]/tbody/tr[3]/td[3]/div/div/div/button');
    }

    get btnEnfermedadesCatastroficas() {
        return $('//table[@id="tabla_planes"]/tbody/tr[4]/td[3]/div/div/div/button');
    }

    get btnGenerarEstudio() {
        return $('//*[@id="generarEstudio"]');
    }

    get btnGuardarCotizacion() {
        return $('#B45650304403706736');
    }

    get btnSiguiente() {
        return $('#B96044318963135767');
    }
}

module.exports = {selectors:selectors,planCoberturas:planCoberturas}