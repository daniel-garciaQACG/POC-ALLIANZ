const {Then, When} = require('@wdio/cucumber-framework');
const helper = require('../helpers/main.helper');
const { assert } = require('chai');
const pdfjsLib = require('pdfjs-dist');
let pdfUrl;

Then(/^Espero "([^"]*)" segundos$/, async function (var1) {
    await browser.pause(var1*1000);
});

function getPDFUrl(archivo) {
    const pdfUrl = `file://${process.cwd()}/${archivo}`;
    return pdfUrl;
}
  
  // Función para cargar el archivo PDF y buscar una palabra en él
async function searchForPhraseInPDF(pdfUrl, phraseToFind, page) {
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
  
    loadingTask.promise.then(function(pdf) {
      const pageNumber = page;
  
      pdf.getPage(pageNumber).then(function(page) {
        page.getTextContent().then(function(textContent) {
          const pageContent = textContent.items.map(item => item.str).join(''); // Convertir los elementos a una cadena de texto
          const phraseFound = pageContent.includes(phraseToFind);
          //console.log(`Page ${pageNumber} content: `, textContent.items);
          assert(phraseFound, `La frase no se encontró`);
        });
      });
    });
}


Then(/^Abro el archivo "([^"]*)"$/, async function (var1) {
    pdfUrl = getPDFUrl(var1);
});

Then(/^Valido si se encuentra la frase "([^"]*)" en la página (\d+) del archivo$/, async (var1, var2) => {
    const phraseToFind = var1;
    await searchForPhraseInPDF(pdfUrl, phraseToFind, var2);
});

When(/^Regreso a la ventana principal$/, async () => {
  const windowHandles = await browser.getWindowHandles();
  await browser.switchToWindow(windowHandles[0]);
});

module.exports = {getPDFUrl, searchForPhraseInPDF}
