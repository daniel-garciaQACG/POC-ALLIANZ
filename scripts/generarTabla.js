const fs = require('fs');
const csv = require('csv-parser');
const examples = [];
const inputFilePath = './Datos.csv';

// Define el formato esperado de la tabla de ejemplos
const expectedHeaders = ['nombreTitular', 'apellidoPaternoTitular', 'apellidoMaternoTitular', 
                        'sexoTitular', 'edadTitular', 'nombreAsegurado', 'apellidoPaternoAsegurado', 
                        'apellidoMaternoAsegurado', 'parentescoAsegurado', 'edadAsegurado'];

// Define una función para validar la tabla de ejemplos
function validateExampleTable(exampleTable) {
  const headers = exampleTable[0];
  if (headers.length !== expectedHeaders.length) {
    return false;
  }
  for (let i = 0; i < headers.length; i++) {
    if (headers[i].trim() !== expectedHeaders[i]) {
      return false;
    }
  }
  return true;
}

// Lee el archivo CSV y reescribe el archivo feature con los nuevos ejemplos
fs.createReadStream(inputFilePath)
  .pipe(csv())
  .on('headers', (headers) => {
    if (!validateExampleTable([headers])) {
      console.error('El archivo CSV no tiene el formato esperado');
      process.exit(1);
    }
  })
  .on('error', () => {
    console.error('El archivo no es un archivo CSV válido');
    process.exit(1);
  })
  .on('data', (row) => {
    examples.push(row);
  })
  .on('end', () => {
    console.log('Datos cargados:');
    console.log(examples);

    // Abrir el archivo feature y almacenar su contenido en una variable
    let featureContent = fs.readFileSync('./features/datosIniciales.feature', 'utf8');

    // Buscar la tabla de ejemplos en el contenido del archivo feature
    const examplesRegex = /Ejemplos:(.*?\|.*?\|.*?\n)(?:\||$)/gs;
    const existingExamplesTable = examplesRegex.exec(featureContent);

    // Construir la nueva tabla de ejemplos
    let newExamplesTable = '\n      | ';
    const headers = Object.keys(examples[0]);
    newExamplesTable += headers.join(' | ') + ' |';
    newExamplesTable += '\n';
    for (const example of examples) {
      newExamplesTable += `      | ${headers.map(header => example[header]).join(' | ')} | \n`;
    }

    if (existingExamplesTable) {
      // Si existe una tabla de ejemplos, reemplazarla en el contenido del archivo feature
      featureContent = featureContent.replace(existingExamplesTable[1], newExamplesTable);
    } else {
      // Si no existe una tabla de ejemplos, agregarla al final del archivo feature
      featureContent += `\n \n Ejemplos:${newExamplesTable}`;
    }

    // Escribir el contenido actualizado del archivo feature de vuelta al archivo
    fs.writeFileSync('./features/datosIniciales.feature', featureContent);
});