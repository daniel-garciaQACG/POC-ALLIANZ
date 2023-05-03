# language: es

@planCoberturas
Característica: Registrar el plan de coberturas

Antecedentes:
    Dado Que me encuentro en la pagina de log-in

  Escenario: Registrar los datos del plan de coberturas
    Entonces Ingreso "oscarg" como mi usuario
    E Ingreso "pruebaadsol" como mi contraseña
    Y Hago click en el boton "Entrar"
    Entonces Se muestra la página de Allianz
    Y Me redirigido a la sección Datos iniciales
    Entonces Ingreso "KARINA" como nombre del titular
    E Ingreso "SANCHEZ" como apellido paterno del titular
    E Ingreso "ESCOBEDO" como apellido materno del titular
    Y Selecciono "F" en el campo sexo
    E Ingreso "28" como edad del titular
    Entonces Espero "3" segundos
    Entonces Agrego a un asegurado
    Y Leo el archivo csv
    E Ingreso el nombre del asegurado numero "1"
    E Ingreso el apellido paterno del asegurado numero "1"
    E Ingreso el apellido materno del asegurado numero "1"
    Y Selecciono el parentesco del asegurado numero "1"
    E Ingreso la edad del asegurado numero "1"
    Entonces Espero "2" segundos
    Entonces Doy clic en el botón Guardar cotización
    Entonces Espero "5" segundos
    Y Doy clic en el botón Siguiente
    Entonces Debo ser redirigido a la pagina de coberturas
    Y Debo obtener un Numero de cotizacion
    Y Selecciono "MASTER" como tipo de plan
    Entonces Espero "5" segundos
    Y Selecciono "$145,000,000" como suma
    Y Selecciono "$26,000" como deducible
    Y Selecciono "CIUDAD DE MÉXICO" como entidad
    Entonces Espero "3" segundos
    Y Selecciono "GUSTAVO A. MADERO" como ciudad
    Entonces Espero "3" segundos
    Y Selecciono "10%" como coaseguro
    Y Selecciono "100%" como GUA
    Entonces Espero "5" segundos
    Y Selecciono "Agente" como conducto de cobro
    Entonces Espero "5" segundos
    Y Doy clic en el botón Generar estudio
    Entonces Espero "5" segundos
    Y Descargo el PDF generado
    Entonces Espero "3" segundos
    Y Abro el archivo "PDFDescargado.pdf"
    Entonces Valido que corresponda el Número de Cotización en el archivo "PDFDescargado.pdf" en la página 1
    Y Valido si se encuentra la frase "MASTER" en la página 1 del archivo
    Y Valido si se encuentra la frase "$145,000,000" en la página 1 del archivo
    Y Valido si se encuentra la frase "$26,000" en la página 1 del archivo
    Y Valido si se encuentra la frase "CIUDAD DE MÉXICO" en la página 1 del archivo
    Y Valido si se encuentra la frase "GUSTAVO A. MADERO" en la página 1 del archivo
    Y Valido si se encuentra la frase "ZONA I" en la página 1 del archivo
    Y Valido si se encuentra la frase "10%" en la página 1 del archivo
    Y Valido si se encuentra la frase "100%" en la página 1 del archivo
    Y Valido si se encuentra la frase "Agente" en la página 2 del archivo
    Y Valido si se encuentra la frase "$64,380.28" en la página 2 del archivo
    Y Cierro el PDF del navegador
    Y Regreso a la ventana principal
    Y Doy clic en el botón Guardar cotización 2
    Entonces Espero "3" segundos
    Y Doy clic en el botón Siguiente 2
    Entonces Espero "5" segundos