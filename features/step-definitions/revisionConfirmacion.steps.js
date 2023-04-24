const {Then, When} = require('@wdio/cucumber-framework');
let globalSelectors = require('../pageobjects/revisionConfirmacion.page');
const path = require('path');
const selectors = new globalSelectors.revisionConfirmacion();


When(/^Doy clic en el botón Cargar Documentos$/, async function () {
    await selectors.btnCargarDocumentos.click();
});

When(/^Selecciono todos los documentos$/, async function () {
    //await selectors.btnSeleccionarTodos.click();
});

When(/^Subo mi documento$/, async function () {
    /*
    const filePath = path.join(__dirname, "../../PDF MUESTRA DOCUMENTOS GMMI.pdf");
    const remoteFilePath = await browser.uploadFile(filePath);

    await selectors.inputSeleccionarDocumento.setValue(remoteFilePath);
    */
});

When(/^Doy clic en el botón Cargar$/, async function () {
    /*
    await selectors.btnCargar.click();
    */
});