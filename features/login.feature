# language: es

@login

Característica: Iniciar sesión en MyAllianz 2.0

  Escenario: Como usuario, quiero iniciar sesión en MyAllianz 2.0
    Dado que me encuentro en la pagina de log-in
    Cuando Ingreso mis credenciales
    Entonces Se muestra la página de Allianz
    Cuando Leo el archivo "PDFDESCARGADO.pdf"
    Entonces Valido si se encuentra la frase "MASTER" en la página 1 del archivo