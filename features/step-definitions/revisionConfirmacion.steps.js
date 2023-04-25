const {Then, When} = require('@wdio/cucumber-framework');
let globalSelectors = require('../pageobjects/revisionConfirmacion.page');
const { getPDFUrl, searchForPhraseInPDF } = require('./common.steps');
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

When(/^Doy clic en el botón Acuse de Documentos$/, async function () {
    await selectors.btnAcuseDocumentos.click();
});

Then(/^Valido que corresponda el Número de Solicitud en el archivo "([^"]*)" en la página (\d+)$/, async (var1, var2) => {
    const phraseToFind = await $('#P5_ID_SOLICITUD_DISPLAY').getText();
    pdfUrl = getPDFUrl(var1);
    await searchForPhraseInPDF(pdfUrl, phraseToFind, var2);
});