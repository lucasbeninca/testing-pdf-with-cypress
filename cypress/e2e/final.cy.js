let { readPdf } = require("cypress/scripts/readPdf.js");

describe('testing-pdf-with-cypress', function() {

  beforeEach(() => {
    cy.visit('../app/index.html');

    const readPDF = readPdf;

  });

  it('downloads a simple PDF file', () => {
    cy.contains('simple.pdf')
        .click();

    cy.readFile('cypress/downloads/simple.pdf', 'utf8');
    cy.task('readPdf', 'cypress/downloads/simple.pdf');
  });

  it('downloads a complex PDF file', () => {
    cy.contains('complex.pdf')
        .click();

    cy.readFile('cypress/downloads/complex.pdf');
    cy.task('readPdf', 'cypress/downloads/complex.pdf');
  });
});
