const {Then, When} = require('@wdio/cucumber-framework');
let globalSelectors = require('../pageobjects/datosContratante.page');
const selectors = new globalSelectors.datosContratante();


Then(/^Se muestra el formulario de Datos del contratante$/, async function () {
    // TO DO
});

When(/^Ingreso "([^"]*)" como el RFC del contratante$/, async function (var1) {
    await selectors.inputRFC.setValue(var1 + "\ue004");
});

When(/^Doy Tab para sincronizar los datos del contratante$/, async function () {
    //await selectors.inputRFC.setValue("\ue004");
});

When(/Selecciono en Dirección del titular que "([^"]*)" es igual al del contratante$/, async function (var1)  {
    if (var1 === "No"){
        await selectors.selectDireccionTitular.selectByVisibleText("No");
    }else{
        await selectors.selectDireccionTitular.selectByVisibleText("Si");
    }
});

When(/^Ingreso "([^"]*)" como fecha de nacimiento del contratante$/, async function (var1)  {
    await selectors.inputFechaNacimiento1.doubleClick();
    await selectors.textFechaNacimiento1.setValue(var1);
});

When(/^Ingreso "([^"]*)" como fecha de nacimiento del dependiente$/, async function (var1)  {
    await selectors.inputFechaNacimiento2.doubleClick();
    await selectors.textFechaNacimiento2.setValue(var1);
});

Then(/^Doy clic en el botón Guardar solicitud$/, async function () {
    await browser.execute('window.scrollTo(0,0);');
    await selectors.btnGuardarSolicitud.click();
});

When(/^Doy clic en el botón Siguiente 3$/, async function () {
    await selectors.btnSiguiente.click();
});