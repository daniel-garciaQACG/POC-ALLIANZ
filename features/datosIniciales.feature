      # language: es
      @datosIniciales
      Característica: Registrar los datos iniciales

      Antecedentes:
      Dado Que me encuentro en la pagina de log-in

      Escenario: Registrar los datos del titular
      Entonces Ingreso "oscarg" como mi usuario
      E Ingreso "pruebaadsol" como mi contraseña
      Y Hago click en el boton "Entrar"
      Entonces Se muestra la página de Allianz
      Y Me redirigido a la sección Datos iniciales
      Entonces Ingreso "<nombreTitular>" como nombre del titular
      E Ingreso "<apellidoPaternoTitular>" como apellido paterno del titular
      E Ingreso "<apellidoMaternoTitular>" como apellido materno del titular
      Y Selecciono "<sexoTitular>" en el campo sexo
      E Ingreso "<edadTitular>" como edad del titular
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

      Ejemplos:
      | nombreTitular | apellidoPaternoTitular | apellidoMaternoTitular | sexoTitular | edadTitular | nombreAsegurado | apellidoPaternoAsegurado | apellidoMaternoAsegurado | parentescoAsegurado | edadAsegurado |
      | KARINA        | SANCHEZ                | ESCOBEDO               | F           | 28          | LILIA           | SANCHEZ                  | ESCOBEDO                 | Hermano(F)          | 20            |
      | DANIEL        | GARCIA                 | MORALES                | M           | 22          | MARIEL          | GARCIA                   | MORALES                  | Hermano(F)          | 30            |
      | SETH NOE      | DIAZ                   | DIAZ                   | M           | 23          | ANDRES          | MENDOZA                  | CARMONA                  | Hermano(M)          | 15            |
