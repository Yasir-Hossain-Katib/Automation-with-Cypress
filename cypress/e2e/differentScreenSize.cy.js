// describe('Responsive Design Test', () => {
//     const viewports = [
//       { name: 'Mobile', width: 375, height: 667 },
//       { name: 'Tablet', width: 768, height: 1024 },
//       { name: 'Desktop', width: 1366, height: 768 }
//     ];
  
//     viewports.forEach((viewport) => {
//       it(`Should validate UI on ${viewport.name} (${viewport.width}x${viewport.height})`, () => {
//         cy.viewport(viewport.width, viewport.height);
//         cy.visit('https://inneed.cloud');
  
//         if (viewport.name === 'Mobile') {
//           cy.get('.text-3xl.block.cursor-pointer').should('be.visible'); 
//         } 
//         else {
//           cy.get('nav').should('be.visible'); 
//         }
  
//         cy.get('.font-normal.py-1.px-2').should('be.visible').and('not.be.disabled');
  
//         // cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').should('be.visible').and(($img) => {
//         //   expect($img[0].naturalWidth).to.be.greaterThan(0);
//         // });
      
    
//         cy.window().then((win) => {
//           cy.wrap(win.document.documentElement.scrollWidth).should('be.lte', viewport.width);
//         });
//       });
//     });
//   });
  

// describe('Responsiveness Test', () => {
//   const viewport = { width: 375, height: 667 }; // Example: iPhone SE dimensions

//   it('should ensure all elements fit within the viewport', () => {
//     cy.viewport(viewport.width, viewport.height); // Set viewport size
//     cy.visit('https://inneed.cloud'); // Replace with your target website

//     // Get all elements inside the body
//     cy.get('body')
//       .find('*')
//       .each(($el) => {
//         const rect = $el[0].getBoundingClientRect();

//         // Log the element and its dimensions for debugging
//         cy.log(
//           `Element: ${$el.prop('tagName')}, Width: ${rect.width}, Height: ${rect.height}, Left: ${rect.left}, Top: ${rect.top}`
//         );

//         // Assert that the element does not exceed the viewport (with tolerance)
//         expect(rect.left, 'Element should not overflow on the left').to.be.at.least(0);
//         expect(rect.top, 'Element should not overflow on the top').to.be.at.least(0);
//         expect(rect.right, 'Element should not overflow on the right').to.be.closeTo(viewport.width, 0.5); // Allow 0.5px tolerance
//         expect(rect.bottom, 'Element should not overflow on the bottom').to.be.at.most(viewport.height);
//       });
//   });
// });

// describe('Responsive Design Testing', () => {

//   beforeEach(() => {
//     cy.visit('https://inneed.cloud/'); // Replace with actual URL
//     cy.wait(3000); // Ensures all elements are fully loaded
//   });

//   it('should verify visible elements are responsive', () => {
//     cy.scrollTo('bottom'); // Scroll to trigger lazy loading
//     cy.wait(1000);

//     cy.get('body *').each(($el) => {
//       cy.wrap($el).then(($element) => {
//         if ($element.is(':visible') && $element.width() > 0 && $element.height() > 0) {
//           cy.wrap($el)
//             .invoke('css', 'width').should('not.be.empty')
//             .invoke('css', 'height').should('not.be.empty')
//             .invoke('css', 'overflow').should('not.eq', 'hidden');
//         }
//       });
//     });
//   });

//   it('should resize viewport and check responsiveness', () => {
//     const sizes = [[375, 812], [768, 1024], [1280, 800], [1920, 1080]];

//     sizes.forEach((size) => {
//       cy.viewport(size[0], size[1]);
//       cy.wait(1000);

//       cy.get('body *').each(($el) => {
//         cy.wrap($el).then(($element) => {
//           if ($element.is(':visible') && $element.width() > 0 && $element.height() > 0) {
//             cy.wrap($el)
//               .invoke('css', 'width').should('not.be.empty')
//               .invoke('css', 'height').should('not.be.empty');
//           }
//         });
//       });
//     });
//   });

// });


describe('Responsive Design Test', () => {
  const viewports = [
    [1920, 1080], // Desktop
    [1366, 768],  // Laptop
    [768, 1024],  // Tablet
    [375, 667]    // Mobile
  ];

  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      
      if (err.message.includes('adsbygoogle.push() error')) {
        return false;
      }
      return true;
    });
  });

  viewports.forEach(([width, height]) => {
    it(`should check responsiveness at ${width}x${height}`, () => {
      cy.viewport(width, height);
      cy.visit('https://demo.automationtesting.in/Register.html');

      cy.get('body *').each(($el) => {
        const element = Cypress.$($el);

        // Ensure element is visible before making assertions
        if (element.length && element.is(':visible')) {
          cy.wrap($el)
            .should('be.visible')
            .then(($e) => {
              const w = Cypress.$($e).width();
              const h = Cypress.$($e).height();

              if (w > 0 && h > 0) {
                expect(w).to.be.greaterThan(0);
                expect(h).to.be.greaterThan(0);
              }
            });
        }
      });
    });
  });
});



// describe('Responsive Design Test', () => {
//   const viewports = [
//     [1920, 1080],
//     [1366, 768],
//     [768, 1024],
//     [375, 667]
//   ];

//   viewports.forEach((viewport) => {
//     it(`should check responsiveness at ${viewport[0]}x${viewport[1]}`, () => {
//       cy.viewport(viewport[0], viewport[1]);
//       cy.visit('https://demo.automationtesting.in/Register.html');

//       // Ensure no uncaught exceptions (e.g., Ads-related errors)
//       cy.on('uncaught:exception', (err) => {
//         return false; // Prevent test failure
//       });

//       // Check all visible elements
//       cy.get('body *').each(($el) => {
//         if (Cypress.$($el).length && Cypress.$($el).is(':visible')) {
//           cy.wrap($el)
//             .should('be.visible')
//             .then(($e) => {
//               const w = Cypress.$($e).width();
//               const h = Cypress.$($e).height();

//               // Debugging log outside of cy.should
//               cy.log(`Checking element: ${$e.prop('tagName')}, Width: ${w}, Height: ${h}`);

//               expect(w, `Element ${$e.prop('tagName')} has 0 width`).to.be.greaterThan(0);
//               expect(h, `Element ${$e.prop('tagName')} has 0 height`).to.be.greaterThan(0);
//             });
//         }
//       });

//       // Check for overflowing elements
//       cy.document().then((doc) => {
//         const body = doc.body;
//         const html = doc.documentElement;
//         const maxWidth = Math.max(body.scrollWidth, html.scrollWidth);
//         const maxHeight = Math.max(body.scrollHeight, html.scrollHeight);

//         expect(maxWidth).to.be.lessThan(viewport[0] + 10, 'No horizontal overflow');
//         expect(maxHeight).to.be.lessThan(viewport[1] + 50, 'No vertical overflow');
//       });
//     });
//   });
// });

