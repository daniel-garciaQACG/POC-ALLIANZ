const selectors = require('../pageobjects/base.page');

/**
 * Subpágina que contiene selectores y métodos específicos para una página
 */
class loginPage extends selectors{
    /**
     * Definir selectores usando métodos getter
     */
    get inputUsuario () {
        return $('#usuarioId');
    }

    get inputClaveAcceso () {
        return $('#claveAccesoId');
    }

    get btnLogin () {
        return $('#btn_login');
    }

    get imgLogo () {
        return $('.section-header-logo');
    }

    /**
     * Métodos para encapsular código de automatización para interactuar con la página
    */
    async iniciarSesion (ususario, contrasena) {
        await this.inputUsuario.setValue(ususario);
        await this.inputClaveAcceso.setValue(contrasena);
        await this.btnLogin.click();
    }
}

module.exports = {selectors:selectors,loginPage:loginPage}
