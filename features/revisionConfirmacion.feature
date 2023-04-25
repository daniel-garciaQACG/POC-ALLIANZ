# language: es

@revisionConfirmacion
Característica: Revisar y confirmar los datos registrados

Antecedentes:
    Dado Que me encuentro en la pagina de log-in

  Escenario: Revisar y confirmar los datos del contratante y el plan de coberturas
    Entonces Ingreso "oscarg" como mi usuario
    E Ingreso "pruebaadsol" como mi contraseña
    Y Hago click en el boton "Entrar"
    Entonces Se muestra la página de Allianz
    Y Me redirigido a la sección Datos iniciales
    Entonces Ingreso "KARINA" como nombre del tittular
    E Ingreso "SANCHEZ" como apellido paterno del titular
    E Ingreso "ESCOBEDO" como apellido materno del titular
    Y Selecciono "F" en el campo sexo
    E Ingreso "28" como edad del titular
    Entonces Espero "3" segundos
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
    Y Selecciono "MASTER" como tipo de plan
    Entonces Espero "10" segundos
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
    Y Valido si se encuentra la frase "Agente" en la página 1 del archivo
    Y Valido si se encuentra la frase "$64,380.28" en la página 2 del archivo
    Y Cierro el PDF del navegador
    Y Regreso a la ventana principal
    Y Doy clic en el botón Guardar cotización 2
    Entonces Espero "3" segundos
    Y Doy clic en el botón Siguiente 2
    Entonces Espero "5" segundos
    Y Me redirigido a la sección Datos del contratante
    E Ingreso "SAEK9405289JA" como el RFC del contratante
    Entonces Espero "20" segundos
    Y Selecciono en Dirección del titular que "Si" es igual al del contratante
    E Ingreso "28/05/1994" como fecha de nacimiento del contratante
    E Ingreso "01/01/2003" como fecha de nacimiento del dependiente
    Entonces Doy clic en el botón Guardar solicitud
    Entonces Espero "2" segundos
    Y Doy clic en el botón Siguiente 3
    Entonces Espero "15" segundos
    Y Doy clic en el botón Acuse de Documentos
    Entonces Espero "5" segundos
    Y Descargo el PDF generado
    Entonces Espero "3" segundos
    Y Abro el archivo "PDFDescargado.pdf"
    Entonces Valido que corresponda el Número de Solicitud en el archivo "PDFDescargado.pdf" en la página 1
    Y Valido si se encuentra la frase "KARINA" en la página 1 del archivo
    Y Valido si se encuentra la frase "SANCHEZ" en la página 1 del archivo
    Y Valido si se encuentra la frase "ESCOBEDO" en la página 1 del archivo
    Y Valido si se encuentra la frase "ATZAYACATL 118 , PORVENIR, 57430" en la página 1 del archivo
    Y Valido si se encuentra la frase "Sin coberturas adicionales" en la página 2 del archivo
    Y Valido si se encuentra la frase "30%" en la página 2 del archivo
    Y Valido si se encuentra la frase "MASTER" en la página 2 del archivo
    Y Valido si se encuentra la frase "BASICA" en la página 2 del archivo
    Y Valido si se encuentra la frase "ZONA I" en la página 2 del archivo
    Y Valido si se encuentra la frase "$145,000,000" en la página 2 del archivo
    Y Valido si se encuentra la frase "$26,000" en la página 2 del archivo
    Y Valido si se encuentra la frase "10%" en la página 2 del archivo
    Y Valido si se encuentra la frase "100%" en la página 2 del archivo
    Y Valido si se encuentra la frase "16%" en la página 3 del archivo
    Y Valido si se encuentra la frase "MATRIZ" en la página 3 del archivo
    Y Valido si se encuentra la frase "009009" en la página 3 del archivo
    Y Valido si se encuentra la frase "OSCAR GARCIA" en la página 3 del archivo
    Y Valido si se encuentra la frase "Agente" en la página 3 del archivo
    Y Valido si se encuentra la frase "Anual" en la página 3 del archivo
    Y Cierro el PDF del navegador
    Y Regreso a la ventana principal
    Y Doy clic en el botón Cargar Documentos
    Entonces Espero "15" segundos
    Cuando Selecciono todos los documentos
    Y Subo mi documento
    Y Doy clic en el botón Cargar
    Entonces Espero "5" segundos