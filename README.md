## Testing PDF in Cypress
Short example on how to test content of PDF file in Cypress




## CONTEM AJUSTE NO PACOTE "PARSE-PDF"
OLD

    const fs = require("fs");
    const Pdf = require('./lib/pdf-parse.js');

    module.exports = Pdf;

    let isDebugMode = !module.parent;

    //process.env.AUTO_KENT_DEBUG


    //for testing purpose
    if (isDebugMode) {

    let PDF_FILE = './test/data/05-versions-space.pdf';
    let dataBuffer = fs.readFileSync(PDF_FILE);
    Pdf(dataBuffer).then(function(data) {
        fs.writeFileSync(`${PDF_FILE}.txt`, data.text, {
            encoding: 'utf8',
            flag: 'w'
        });
        debugger;
    }).catch(function(err) {
        debugger;
    });

    }



NEW

     const fs = require("fs");
     const Pdf = require('./lib/pdf-parse.js');

     module.exports = Pdf;

    let isDebugMode = !module.parent;

    //process.env.AUTO_KENT_DEBUG

    // Verifica se o ambiente é o cliente (navegador)
     if (typeof window === 'undefined') {
    //for testing purpose
     if (isDebugMode) {
        let PDF_FILE = './test/data/05-versions-space.pdf';
        let dataBuffer = fs.readFileSync(PDF_FILE);
        Pdf(dataBuffer).then(function(data) {
            fs.writeFileSync(`${PDF_FILE}.txt`, data.text, {
               encoding: 'utf8',
               flag: 'w'
    });
      debugger;
    }).catch(function(err) {
      debugger;
    });
    }

