require ('dotenv').config();
const { Given, When, Then } = require('@wdio/cucumber-framework');
let globalSelectors = require('../pageobjects/login.page');
const loginPageClass = globalSelectors.loginPage;
const selectors = new loginPageClass();

Given(/^que me encuentro en la pagina de log-in$/, () => {
    browser.url('https://portal.myallianz.com.mx/web/guest/myallianz');
    browser.maximizeWindow();
});

When(/^Ingreso mis credenciales$/, async () => {
    await selectors.iniciarSesion(process.env.USUARIO_PRUEBAS, process.env.CONTRASENA_PRUEBAS);
});

Then(/^Se muestra la página de Allianz$/, async () => {
    await expect(selectors.imgLogo).toBeExisting();
});

Then(/^Ingreso "([^"]*)" como mi usuario$/, async function (var1) {
    await selectors.inputUsuario.setValue(var1);
});
Then(/^Ingreso "([^"]*)" como mi contraseña$/, async function (var1) {
    await selectors.inputClaveAcceso.setValue(var1);
});
Then(/^Hago click en el boton "Entrar"$/, async function () {
    await selectors.btnLogin.click();
});