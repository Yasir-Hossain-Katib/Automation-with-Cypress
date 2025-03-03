describe("Footer Section Tests", () => {
    beforeEach(() => {
      cy.visit('https://inneed.cloud'); 
    });
  
    it("Should display the USA office address correctly", () => {
       cy.get("img[src='/Images/socialMedia/LinkedIn svg.png']").click();
       cy.url().should("eq","https://www.linkedin.com/company/inneedcloud/")
        
      });
});

