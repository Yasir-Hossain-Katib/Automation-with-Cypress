describe("Footer Section Tests", () => {
    beforeEach(() => {
      cy.visit('https://inneed.cloud'); 
    });
  
    it("Should display the USA office address correctly", () => {
        cy.get("div[class='mb-2 md:mb-4'] span[class='text-textPrimary text-base']").within(() => {
        cy.contains('USA Office:').should('be.visible');
        cy.contains('901 N Central Expy').should('be.visible');
        cy.contains('McKinney, TX 75069').should('be.visible');
      });
    });

    // it.only("Should display the Bangladesh office address correctly", () => {
    //     cy.get("div[class='mb-2 md:mb-4'] span[class='text-textPrimary text-base']").within(() => {
    //       cy.contains('Bangladesh Office:').should('be.visible');
    //       cy.contains('Flat 11-JK, 10th floor, KA-90, Progoti Sharani, Kuril, Dhaka 1229').should('be.visible');
    //     });
    // });

  
   

  
    it("Should display the USA contact number correctly", () => {
        cy.get('.leading-5 > :nth-child(1) > .flex > span').should("have.text","+1 469-850-9786")
    });

    it("Should display the Bangladesh contact number correctly", () => {
        cy.get('.leading-5 > :nth-child(2) > .flex > span').should("have.text","+880 1779-824-005")
    });
  
    it("Should display the email address correctly", () => {
        cy.get('.leading-5 > :nth-child(3) > .text-base > span').should("have.text","info@inneed.cloud")
    });
  

    it("Should have correct vision link", () => {
      cy.get('.mb-5 > :nth-child(1) > .text-textSecondary').click();
      cy.url().should('eq', 'https://inneed.cloud/about-us/?team=executive#vision');
      
      });

    it("Should have correct key-value link", () => {
      cy.get('.mb-5 > :nth-child(2) > .text-textSecondary').click({force:true});
      cy.url().should('eq', 'https://inneed.cloud/about-us/?team=executive#key-values');
      
      });


    it("Should have correct team link", () => {
      cy.get('.mb-5 > :nth-child(3) > .text-textSecondary').click();
      cy.url().should('eq', 'https://inneed.cloud/about-us/?team=executive#our-team');
      
    });
    
    it("Should have correct cloud service link", () => {
        cy.get('.leading-4 > :nth-child(1) > .text-textSecondary').click();
        cy.url().should('eq', 'https://inneed.cloud/#cloud-services');
      
    });

    it("Should have correct development service link", () => {
        cy.get('.leading-4 > :nth-child(3) > .text-textSecondary').click();
        cy.url().should('eq', 'https://inneed.cloud/#development-services');
      
    });

    it("Should have correct devops service link", () => {
        cy.get('.leading-4 > :nth-child(2) > .text-textSecondary').click();
        cy.url().should('eq', 'https://inneed.cloud/#devops-services');
      
    });

    it("Should have correct professional service link", () => {
        cy.get('.leading-4 > :nth-child(4) > .text-textSecondary').click();
        cy.url().should('eq', 'https://inneed.cloud/#professional-services');
      
    });


  
    
});