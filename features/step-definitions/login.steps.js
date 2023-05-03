require ('dotenv').config();
const { Given, When, Then } = require('@wdio/cucumber-framework');
let globalSelectors = require('../pageobjects/login.page');
const loginPageClass = globalSelectors.loginPage;
const selectors = new loginPageClass();

let firstTime = true;

Given(/^Que me encuentro en la pagina de log-in$/, () => {
    if (firstTime) {
        browser.url('https://portal.myallianz.com.mx/web/guest/myallianz');
        browser.maximizeWindow();
    }
});

Then(/^Ingreso "([^"]*)" como mi usuario$/, async function (var1) {
    if (firstTime) {
        await selectors.inputUsuario.setValue(var1);
    }
});

Then(/^Ingreso "([^"]*)" como mi contraseña$/, async function (var1) {
    if (firstTime) {
        await selectors.inputClaveAcceso.setValue(var1);
    }
});


Then(/^Hago click en el boton "Entrar"$/, async function () {
    if (firstTime) {
        await selectors.btnLogin.click();
    }
});


Then(/^Se muestra la página de Allianz$/, async () => {
    if (firstTime) {
        await expect(selectors.imgLogo).toBeExisting();
        
        firstTime = false;
    }
});

