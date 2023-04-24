const {Then, When} = require('@wdio/cucumber-framework');
let globalSelectors = require('../pageobjects/datosIniciales.page');
const selectors = new globalSelectors.datosIniciales();

Then(/^Me redirigido a la sección Datos iniciales$/, async () => {
    await browser.url('http://azteslnxapexapp04.myallianz.com.mx:8080/ords/f?p=100:2');
});

Then(/^Ingreso "([^"]*)" como nombre del tittular$/, async function (var1) {
    await selectors.inputNombre.setValue(var1);
});

Then(/^Ingreso "([^"]*)" como apellido paterno del titular$/, async function (var1) {
    await selectors.inputApellidoPaterno.setValue(var1);
});

Then(/^Ingreso "([^"]*)" como apellido materno del titular$/, async function (var1) {
    await selectors.inputApellidoMaterno.setValue(var1);
});
Then(/^Selecciono "([^"]*)" en el campo sexo$/, async function (var1) {
    if (var1 === "F"){
        await selectors.radioSexoF.click();
    }else{
        await selectors.radioSexoM.click();
    }
});

Then(/^Ingreso "([^"]*)" como edad del titular$/, async function (var1) {
    await selectors.inputEdad.setValue(var1);
});

Then(/^Agrego a un asegurado$/, async function () {
    await selectors.btnAgregarFila.click();

});

Then(/^Ingreso "([^"]*)" como el nombre del asegurado numero "([^"]*)"$/, async function (var1,var2) {
    await selectors.inputNombreAsegurado.click();
    await selectors.textNombreAsegurado.setValue(var1);

});

Then(/^Ingreso "([^"]*)" como el apellido paterno del asegurado numero "([^"]*)"$/, async function (var1,var2) {
    await selectors.inputApellidoPaternoAsegurado.click();
    await selectors.textApellidoPaternoAsegurado.setValue(var1);
});

Then(/^Selecciono "([^"]*)" como el parentesco del asegurado numero "([^"]*)"$/, async function (var1,var2) {
    await selectors.inputParentescoAsegurado.click();
    await selectors.textParentescoAsegurado.selectByVisibleText(var1);
});

Then(/^Ingreso "([^"]*)" como la edad del asegurado numero "([^"]*)"$/, async function (var1,var2) {
    await selectors.inputEdadAsegurado.click();
    await selectors.textEdadAsegurado.setValue(var1);
});

Then(/^Ingreso "([^"]*)" como el apellido materno del asegurado numero "([^"]*)"$/, async function (var1,var2) {
    await selectors.inputApellidoMaternoAsegurado.click();
    await selectors.textApellidoMaternoAsegurado.setValue(var1);
});

Then(/^Doy clic en el botón Guardar cotización$/, async function () {
    await browser.execute('window.scrollTo(0,0);');
    await selectors.btnGuardarCotizacion.click();
});

Then(/^Doy clic en el botón Siguiente$/, async function () {
    await selectors.btnSiguiente.click();
});

Then(/^Debo ser redirigido a la pagina de coberturas$/, async function () {
    await expect(selectors.datosInicialesLabel).toHaveText('(Completed)')
});

Then(/^Debo obtener un Numero de cotizacion$/, async function () {
    console.log(selectors.nCotizacion.getText())
    await expect(selectors.nCotizacion).toBeExisting()
});