describe("Contact Form Automation (Inside iFrame)", () => {
    

    it.skip("Success Message when all the inputs are valid", () => {
        cy.visit("https://api.leadconnectorhq.com/widget/form/vB6CGJwh8Ru6hS4Lgrqo"); 
        cy.get("#full_name").type("John Doe");
        cy.get('input[name="email"]').type("johndoe@example.com");
        cy.get('input[name="phone"]').type("1234567890");
        cy.get('textarea[name="rqqYjImBddJqZMKSFQaI"]').type("This is a test message.");
        cy.get('button[type="submit"]').click();
      
        cy.get('#inline-vB6CGJwh8Ru6hS4Lgrqo')
          .should("be.visible")
          
      });

      it("Should show error when required fields are missing", () => {
        cy.visit("https://api.leadconnectorhq.com/widget/form/vB6CGJwh8Ru6hS4Lgrqo");

        cy.get('input[name="phone"]').type("01237567891");
        cy.get('textarea[name="rqqYjImBddJqZMKSFQaI"]').type("This is a test message.");
      
        cy.get('button[type="submit"]').click();
      
        cy.get('#form-full_name > #error-container')
          .should("be.visible")
        cy.get('.f-odd > .form-builder--item > #error-container')
           .should("be.visible") 
          
      });

      it("Should show error for invalid email format", () => {
        cy.visit("https://api.leadconnectorhq.com/widget/form/vB6CGJwh8Ru6hS4Lgrqo");
      
        cy.get("#full_name").type("John De");
        cy.get('input[name="email"]').type("invalid-email"); 
        cy.get('input[name="phone"]').type("1234567490");
        cy.get('textarea[name="rqqYjImBddJqZMKSFQaI"]').type("Testing invalid email.");
        cy.get('button[type="submit"]').click();
      
        cy.get('.f-odd > .form-builder--item > #error-container') 
          .should("be.visible")
          
      });


      it("Should show error for invalid phone number", () => {
        cy.visit("https://api.leadconnectorhq.com/widget/form/vB6CGJwh8Ru6hS4Lgrqo");
      
        cy.get("#full_name").type("John Doe");
        cy.get('input[name="email"]').type("johndoe@example.com");
        cy.get('input[name="phone"]').type("abc123"); 
        cy.get('textarea[name="rqqYjImBddJqZMKSFQaI"]').type("Testing invalid phone.");
        cy.get('button[type="submit"]').click();
      
        cy.get('#error-container')
          .should("be.visible")
          
      });
      

      it.skip("Should allow optional fields to be empty", () => {
        cy.visit("https://api.leadconnectorhq.com/widget/form/vB6CGJwh8Ru6hS4Lgrqo");
      
        cy.get("#full_name").type("Jane Doe");
        cy.get('input[name="email"]').type("janedoe@example.com");
        cy.get('button[type="submit"]').click();
      
        cy.get('#inline-vB6CGJwh8Ru6hS4Lgrqo')
          .should("be.visible")
          
      });


      it("Should show errors when all fields are empty", () => {
        cy.visit("https://api.leadconnectorhq.com/widget/form/vB6CGJwh8Ru6hS4Lgrqo");
      
        cy.get('button[type="submit"]').click();
      
        
      });


      it("Should visible the contact image ",()=>{
         cy.visit("https://inneed.cloud/contact-us/");
         cy.get("img[src='/Images/contact-us/contact.png']").should("be.visible");

      })


      it("Should visible the Dallas Office ",()=>{
       
        cy.visit("https://inneed.cloud/contact-us/");
        cy.get(':nth-child(1) > .text-lg > h4')
          .should('include.text', 'Dallas Office');
        cy.get(':nth-child(1) > .text-textTertiary > :nth-child(1)')
          .should("have.text","901 N Central Expy");
        cy.get(':nth-child(1) > .text-textTertiary > :nth-child(2)')
          .should("have.text","McKinney, TX 65069")

        

       

      })

      it("Should visible the Los Angeles Office ",()=>{
       
        cy.visit("https://inneed.cloud/contact-us/");
        cy.get(':nth-child(2) > .text-lg > h4')
          .should('include.text', 'Los Angeles Office');
        cy.get(':nth-child(2) > .text-textTertiary > :nth-child(1)')
          .should("have.text","Los Angeles,");
        cy.get(':nth-child(2) > .text-textTertiary > :nth-child(2)')
          .should("have.text","CA")

        

       

      })
      it("Should visible the North Carolina Office ",()=>{
       
        cy.visit("https://inneed.cloud/contact-us/");
        cy.get(':nth-child(3) > .text-lg > h4')
          .should('include.text', 'North Carolina Office');
        cy.get(':nth-child(3) > .text-textTertiary > :nth-child(1)')
          .should("have.text","Los Angeles,");
        cy.get(':nth-child(3) > .text-textTertiary > :nth-child(2)')
          .should("have.text","CA")

        

       

      })
      it("Should visible the India Office ",()=>{
       
        cy.visit("https://inneed.cloud/contact-us/");
        cy.get(':nth-child(4) > .text-lg > h4')
          .should('include.text', 'India Office');
        cy.get(':nth-child(4) > .text-textTertiary > :nth-child(1)')
          .should("have.text","India");
        

        

       

      })
      it("Should visible the Bangladesh Office ",()=>{
       
        cy.visit("https://inneed.cloud/contact-us/");
        cy.get(':nth-child(5) > .text-lg > h4')
          .should('include.text', 'Bangladesh Office');
        cy.get(':nth-child(5) > .text-textTertiary > :nth-child(1)')
          .should("have.text","KA-90, Progoti Sharani,");
        cy.get(':nth-child(5) > .text-textTertiary > :nth-child(2)')
          .should("have.text","Kuril, Dhaka 1229, BD")

        

       

      })

      it("Should visible the Japan Office ",()=>{
       
        cy.visit("https://inneed.cloud/contact-us/");
        cy.get(':nth-child(6) > .text-lg > h4')
          .should('include.text', 'Japan Office');
        cy.get(':nth-child(6) > .text-textTertiary > :nth-child(1)')
          .should("have.text","4-17-7 Kaijin, Funabashi City,");
        cy.get(':nth-child(6) > .text-textTertiary > :nth-child(2)')
          .should("have.text","Chiba Prefecture, Japan")

        

       

      })

      it("Should visible the Australia Office ",()=>{
       
        cy.visit("https://inneed.cloud/contact-us/");
        cy.get(':nth-child(7) > .text-lg > h4')
          .should('include.text', 'Australia Office');
        cy.get(':nth-child(7) > .text-textTertiary > :nth-child(1)')
          .should("have.text","1G Homebush Bay Drive,");
        cy.get(':nth-child(7) > .text-textTertiary > :nth-child(2)')
          .should("have.text","Rhodes, NSW-2138")

        

       

      })


      
      
      
      
  
   
  });
  