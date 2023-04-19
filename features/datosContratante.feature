# language: es

@datosContratante
Característica: Revisar los datos de pago del contratante

Antecedentes:
    Dado que me encuentro en la pagina de log-in

  Escenario: Revisar los datos de pago del contratante
    Cuando Ingreso mis credenciales
    Entonces Se muestra la página de Allianz
    Cuando Estoy en la sección Datos iniciales
    Entonces Ingreso "KARINA" como nombre del tittular
    E Ingreso "SANCHEZ" como apellido paterno del titular
    E Ingreso "ESCOBEDO" como apellido materno del titular
    Y Selecciono "F" en el campo sexo
    E Ingreso "28" como edad del titular
    Entonces Agrego a un asegurado
    E Ingreso "LILIA" como el nombre del asegurado numero "1"
    E Ingreso "SANCHEZ" como el apellido paterno del asegurado numero "1"
    E Ingreso "ESCOBEDO" como el apellido materno del asegurado numero "1"
    Y Selecciono "Hermano(F)" como el parentesco del asegurado numero "1"
    E Ingreso "20" como la edad del asegurado numero "1"
    Entonces Doy clic en el botón Guardar cotización
    Y Doy clic en el botón Siguiente
    Entonces Se muestra el formulario de Cobertura Básica
    Y Selecciono "MASTER" como tipo de plan
    Entonces Espero "3" segundos
    Y Selecciono "$145,000,000" como suma
    Y Selecciono "$26,000" como deducible
    Y Selecciono "CIUDAD DE MÉXICO" como entidad
    Entonces Espero "3" segundos
    Y Selecciono "GUSTAVO A. MADERO" como ciudad
    Entonces Espero "3" segundos
    Y Selecciono "10%" como coaseguro
    Y Selecciono "100%" como GUA
    Y Selecciono "Agente" como conducto de cobro
    Entonces Espero "5" segundos
    Y Doy clic en el botón Generar estudio
    Entonces Espero "5" segundos
    Y Descargo el PDF generado de Plan de coberturas
    Entonces Espero "5" segundos
    Cuando Leo el archivo "PDFDescargado.pdf"
    Entonces Valido si se encuentra la frase "MASTER" en la página 1 del archivo
    Y Valido si se encuentra la frase "$145,000,000" en la página 1 del archivo
    Y Valido si se encuentra la frase "$26,000" en la página 1 del archivo
    Y Valido si se encuentra la frase "CIUDAD DE MÉXICO" en la página 1 del archivo
    Y Valido si se encuentra la frase "GUSTAVO A. MADERO" en la página 1 del archivo
    Y Valido si se encuentra la frase "ZONA I" en la página 1 del archivo
    Y Valido si se encuentra la frase "10%" en la página 1 del archivo
    Y Valido si se encuentra la frase "100%" en la página 1 del archivo
    Y Valido si se encuentra la frase "Agente" en la página 2 del archivo
    Y Valido si se encuentra la frase "$64,380.28" en la página 2 del archivo
    Y Regreso a la ventana principal
    Y Doy clic en el botón Guardar cotización 2
    Entonces Espero "3" segundos
    Y Doy clic en el botón Siguiente 2
    Entonces Se muestra el formulario de Datos del contratante
    E Ingreso "SAEK9405289JA" como el RFC del contratante
    Y Doy Tab para sincronizar los datos del contratante
    Entonces Espero "12" segundos
    Y Selecciono en Dirección del titular que "Si" es igual al del contratante
    E Ingreso "28/05/1994" como fecha de nacimiento del contratante
    E Ingreso "01/01/2003" como fecha de nacimiento del dependiente
    Entonces Doy clic en el botón Guardar solicitud
    Entonces Espero "2" segundos
    Y Doy clic en el botón Siguiente 3
    Entonces Espero "10" segundos
