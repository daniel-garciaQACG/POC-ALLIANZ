# language: es

@login

Característica: Iniciar sesión en MyAllianz 2.0

  Escenario: Como usuario, quiero iniciar sesión en MyAllianz 2.0
    Dado Que me encuentro en la pagina de log-in
    Entonces Ingreso "oscarg" como mi usuario
    E Ingreso "pruebaadsol" como mi contraseña
    Y Hago click en el boton "Entrar"
    Entonces Se muestra la página de Allianz