const {Then, When} = require('@wdio/cucumber-framework');
const globalSelectors = require('../pageobjects/planCoberturas.page');
const { getPDFUrl, searchForPhraseInPDF } = require('./common.steps');
const selectors = new globalSelectors.planCoberturas();


Then(/^Se muestra el formulario de Cobertura Básica$/, async () => {
    await expect(selectors.formularioCoberturaBasica).toBeExisting();
});

Then(/^Valido que corresponda el Número de Cotización en el archivo "([^"]*)" en la página (\d+)$/, async (var1, var2) => {
    const phraseToFind = await $('#P3_ID_COTIZACION_DISPLAY').getText();
    pdfUrl = getPDFUrl(var1);
    await searchForPhraseInPDF(pdfUrl, phraseToFind, var2);
  });

Then(/^Selecciono "([^"]*)" como tipo de plan$/, async function (var1) {
    await selectors.selectPlan.selectByVisibleText(var1);
});

Then(/^Selecciono "([^"]*)" como suma$/, async function (var1) {
    await selectors.selectSuma.selectByVisibleText(var1);
});

Then(/^Selecciono "([^"]*)" como deducible$/, async function (var1) {
    await selectors.selectDeducible.selectByVisibleText(var1);
});

Then(/^Selecciono "([^"]*)" como entidad$/, async function (var1) {
    await selectors.selectEntidad.selectByVisibleText(var1);
});

Then(/^Selecciono "([^"]*)" como ciudad$/, async function (var1) {
    await selectors.selectCiudad.selectByVisibleText(var1);
});

Then(/^Selecciono "([^"]*)" como coaseguro$/, async function (var1) {
    await selectors.selectCoaseguro.selectByVisibleText(var1);
});

Then(/^Selecciono "([^"]*)" como GUA$/, async function (var1) {
    await selectors.selectGUA.selectByVisibleText(var1);
});

Then(/^Selecciono "([^"]*)" como conducto de cobro$/, async function (var1) {
    await selectors.selectConductoCobro.selectByVisibleText(var1);
});

When(/^Doy clic en el botón Generar estudio$/, async () => {
    await selectors.btnGenerarEstudio.click();
});

When(/^Descargo el PDF generado de Plan de coberturas$/, async () => {
    await browser.savePDF('./PDFDescargado.pdf');
});

When(/^Doy clic en el botón Guardar cotización 2$/, async () => {
    await selectors.btnGuardarCotizacion.click();
});

When(/^Doy clic en el botón Siguiente 2$/, async () => {
    await selectors.btnSiguiente.click();
});