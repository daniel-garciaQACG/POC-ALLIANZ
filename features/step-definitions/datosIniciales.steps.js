const {Then} = require('@wdio/cucumber-framework');
let globalSelectors = require('../pageobjects/datosIniciales.page');
const fs = require('fs');
const csv = require('csv-parser');
const selectors = new globalSelectors.datosIniciales();

let data = [];
let firstTime = true;
let executionNumber = 0;



Then(/^Me redirigido a la sección Datos iniciales$/, async () => {
    await browser.url('http://azteslnxapexapp04.myallianz.com.mx:8080/ords/f?p=100:2');
});

Then(/^Ingreso "([^"]*)" como nombre del titular$/, async function (nombre) {
    await selectors.inputNombre.setValue(nombre);
});

Then(/^Ingreso "([^"]*)" como apellido paterno del titular$/, async function (apellidoPaterno) {
    await selectors.inputApellidoPaterno.setValue(apellidoPaterno);
});

Then(/^Ingreso "([^"]*)" como apellido materno del titular$/, async function (apellidoMaterno) {
    await selectors.inputApellidoMaterno.setValue(apellidoMaterno);
});
Then(/^Selecciono "([^"]*)" en el campo sexo$/, async function (sexo) {
    if (sexo === "F"){
        await selectors.radioSexoF.click();
    }else{
        await selectors.radioSexoM.click();
    }
});

Then(/^Ingreso "([^"]*)" como edad del titular$/, async function (edad) {
    await selectors.inputEdad.setValue(edad);
});

Then(/^Agrego a un asegurado$/, async function () {
    await selectors.btnAgregarFila.click();

});

Then(/^Ingreso el nombre del asegurado numero "([^"]*)"$/, async function (var1) {
    await selectors.inputNombreAsegurado.click();
    const nombreAsegurado = data[executionNumber].nombre;
    await selectors.textNombreAsegurado.setValue(nombreAsegurado);

});

Then(/^Ingreso el apellido paterno del asegurado numero "([^"]*)"$/, async function (var1) {
    await selectors.inputApellidoPaternoAsegurado.click();
    const apellidoPaternoAsegurado = data[executionNumber].apellidoPaterno;
    await selectors.textApellidoPaternoAsegurado.setValue(apellidoPaternoAsegurado);
});

Then(/^Ingreso el apellido materno del asegurado numero "([^"]*)"$/, async function (var1) {
    await selectors.inputApellidoMaternoAsegurado.click();
    const apellidoMaternoAsegurado = data[executionNumber].apellidoMaterno;
    await selectors.textApellidoMaternoAsegurado.setValue(apellidoMaternoAsegurado);
});

Then(/^Selecciono el parentesco del asegurado numero "([^"]*)"$/, async function (var1) {
    await selectors.inputParentescoAsegurado.click();
    const parentescoAsegurado = data[executionNumber].parentesco;
    await selectors.textParentescoAsegurado.selectByVisibleText(parentescoAsegurado);
});

Then(/^Ingreso la edad del asegurado numero "([^"]*)"$/, async function (var1) {
    await selectors.inputEdadAsegurado.click();
    const edadAsegurado = data[executionNumber].edad;
    await selectors.textEdadAsegurado.setValue(edadAsegurado);
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

    executionNumber += 1;
});

Then(/^Leo el archivo csv$/, async function () {
    if (firstTime) {
        fs.createReadStream('./Asegurados.csv')
        .pipe(csv())
        .on('data', (row) => {
            data.push(row);
        })
        .on('end', () => {
            console.log('Datos cargados:');
            console.log(data);
        });

        firstTime = false;
    }
});