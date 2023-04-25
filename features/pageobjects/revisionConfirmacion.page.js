const selectors = require('../pageobjects/base.page');
//Subpágina que contiene selectores y métodos específicos para una página
class revisionConfirmacion extends selectors{
// Definir selectores usando métodos getter
    get btnCargarDocumentos() {
        return $('//div[@id="wizardContainer"]/div/div/div[2]/table/tbody/tr/td[2]/button');
    }
    get tablaDocumentos() {
        return $('div.documentosGrid_ig_grid_vc')
    }
    get btnSeleccionarTodos() {
        //return $('div.documentosGrid_ig_grid_vc div:nth-child(1) div:nth-child(1) div:nth-child(1) table');
        //return $('/html/body/form/div/div[2]/div/div/div/div[2]/div/div[2]/div/div/div[1]/div/div/div[5]/div[3]/div[1]/div[3]/div[4]/table/tbody/tr[1]/th');
        return $('div.documentosGrid_ig_grid_vc div:nth-child(1) div:nth-child(1) div:nth-child(1) table thead tr');
    }

    get iframe(){
        return $('//iframe[@title="Carga de documentos"]');
    }

    get inputSeleccionarDocumento() {
        return $('#P11_DOCUMENTO');
    }

    get btnCargar() {
        return $('#B45548755160282614');
    }

    get btnAcuseDocumentos() {
        return $('#B53924363439848211');
    }
}

module.exports = {selectors:selectors,revisionConfirmacion:revisionConfirmacion}