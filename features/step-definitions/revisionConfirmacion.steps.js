const {Then, When} = require('@wdio/cucumber-framework');
let globalSelectors = require('../pageobjects/revisionConfirmacion.page');
const { getPDFUrl, searchForPhraseInPDF } = require('./common.steps');
const path = require('path');
const selectors = new globalSelectors.revisionConfirmacion();


When(/^Doy clic en el botón Cargar Documentos$/, async function () {
await selectors.btnCargarDocumentos.click();
});

When(/^Selecciono todos los documentos$/, async function () {
    //const iframe = await browser.findElement('css selector', 'wwvFlowForm');
    //console.log(iframe.getHTML());
    const text = await $$('iframe')[0];
    await browser.switchToFrame(text);
    await browser.pause(1000);


    const btn = await $('thead tr th span.u-selector');
    await btn.click();
});

When(/^Subo mi documento$/, async function () {

    const filePath = path.join(__dirname, "../../PDF_MUESTRA.pdf");
    const remoteFilePath = await browser.uploadFile(filePath);

    const fileInputElement = await browser.$('input[type="file"]');
    await fileInputElement.setValue(remoteFilePath);

});

When(/^Doy clic en el botón Cargar$/, async function () {
    await selectors.btnCargar.click();
});

When(/^Doy clic en el botón Acuse de Documentos$/, async function () {
await selectors.btnAcuseDocumentos.click();
});

Then(/^Valido que corresponda el Número de Solicitud en el archivo "([^"]*)" en la página (\d+)$/, async (var1, var2) => {
const phraseToFind = await $('#P5_ID_SOLICITUD_DISPLAY').getText();
pdfUrl = getPDFUrl(var1);
await searchForPhraseInPDF(pdfUrl, phraseToFind, var2);
});