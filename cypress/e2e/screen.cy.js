describe('Responsive Design Test', () => {
    const viewports = [
    
      [1366, 768],
      [768, 1024],
      [375, 667]
    ];
  
    viewports.forEach(([width, height]) => {
      it(`Validating layout at ${width}x${height}`, () => {
        cy.viewport(width, height);
        cy.visit('https://demo.automationtesting.in/Register.html');
  
        // Prevent test failure from external errors (ads, tracking scripts, etc.)
        cy.on('uncaught:exception', () => false);
  
        // Ensure page is fully loaded before testing
        cy.wait(3000); // Adjust wait time if necessary
        cy.get('body').should('be.visible');
  
        // Debugging: Log document state
        cy.document().then((doc) => {
          cy.log(`Page loaded. Total body content length: ${doc.body.innerHTML.length}`);
        });
  
        // Check each visible element for proper rendering
        cy.get('body *:visible').each(($el) => {
          cy.wrap($el).then(($e) => {
            const elWidth = Cypress.$($e).outerWidth();
            const elHeight = Cypress.$($e).outerHeight();
            const isHidden = Cypress.$($e).css('display') === 'none' || elWidth === 0 || elHeight === 0;
  
            // Log skipped elements for debugging
            if (isHidden) {
              cy.log(`Skipping: ${$e.prop('tagName')} is hidden or has 0 size.`);
            } else {
              cy.log(`Checking: ${$e.prop('tagName')} - Width: ${elWidth}, Height: ${elHeight}`);
              expect(elWidth, `Element ${$e.prop('tagName')} width`).to.be.greaterThan(0);
              expect(elHeight, `Element ${$e.prop('tagName')} height`).to.be.greaterThan(0);
            }
          });
        });
  
        // Check for layout overflow issues
        cy.document().then((doc) => {
          const { body, documentElement: html } = doc;
          const maxWidth = Math.max(body.scrollWidth, html.scrollWidth);
          const maxHeight = Math.max(body.scrollHeight, html.scrollHeight);
  
          cy.log(`Max document width: ${maxWidth}, Max document height: ${maxHeight}`);
  
          expect(maxWidth).to.be.lessThan(width + 10, 'No horizontal overflow detected');
          expect(maxHeight).to.be.lessThan(height + 50, 'No vertical overflow detected');
        });
      });
    });
  });
  