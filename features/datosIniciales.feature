# language: es

@datosIniciales
Característica: Registrar los datos iniciales

Antecedentes:
  Dado que me encuentro en la pagina de log-in


  Escenario: Registrar los datos del titular
    Entonces Ingreso "oscarg" como mi usuario
    E Ingreso "pruebaadsol" como mi contraseña
    Y Hago click en el boton "Entrar"
    Entonces Se muestra la página de Allianz
    Cuando Estoy en la sección Datos iniciales
    Entonces Ingreso "KARINA" como nombre del tittular
    E Ingreso "SANCHEZ" como apellido paterno del titular
    E Ingreso "ESCOBEDO" como apellido materno del titular
    Y Selecciono "F" en el campo sexo
    E Ingreso "28" como edad del titular
    Entonces Espero "10" segundos
    Entonces Agrego a un asegurado
    E Ingreso "LILIA" como el nombre del asegurado numero "1"
    E Ingreso "SANCHEZ" como el apellido paterno del asegurado numero "1"
    E Ingreso "ESCOBEDO" como el apellido materno del asegurado numero "1"
    Y Selecciono "Hermano(F)" como el parentesco del asegurado numero "1"
    E Ingreso "20" como la edad del asegurado numero "1"
    Entonces Doy clic en el botón Guardar cotización
    Y Doy clic en el botón Siguiente
    Entonces Debo ser redirigido a la pagina de coberturas
    Y Debo obtener un Numero de cotizacion