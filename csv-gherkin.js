const fs = require('fs');
const csv = require('csv-parser');

const inputFilePath = './Titulares.csv';

const tableHeaders = [];
const tableRows = [];

fs.createReadStream(inputFilePath)
  .pipe(csv())
  .on('headers', (headers) => {
    headers.forEach(header => {
      tableHeaders.push(header.trim());
    });
  })
  .on('data', (data) => {
    const row = [];
    Object.values(data).forEach(value => {
      row.push(value.trim());
    });
    tableRows.push(row);
  })
  .on('end', () => {
    console.log(`|${tableHeaders.join(' | ')} |`);
    tableRows.forEach(row => {
      console.log(`| ${row.join(' | ')} |`);
    });
});