class AboutUs
{
  get url(){
    return "https://inneed.cloud/about-us/?team=executive";
  }

  visit(){
    cy.visit(this.url);
  }

  checkHeroText(){
    cy.get("div[class='2xl:col-start-2 2xl:col-span-3'] h1").should("have.text","InNeed is Empowering Businesses Globally");

    
  }

  careerButton(){
    cy.get("div[class='flex justify-center my-6 sm:my-12'] a").should("be.visible");
  }

  ourStory(){
    cy.get("body > div:nth-child(1) > section:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)")
    .should('have.css', 'opacity', '1')
    .should("be.visible");
  }

  ourVision(){
    cy.get("body > div:nth-child(1) > section:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)").should("be.visible");
  }

  keyValues(){
    cy.get("div[class='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center'] h4").should("be.visible");
  }

  customerCentricApproach(){
    cy.get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1)").should("have.text","Customer-Centric Approach")
  }

  innovation(){
    cy.get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > h4:nth-child(1)").should("have.text","Innovation")
  }

  team(){
    cy.window().then((win) => {
        cy.stub(win, 'open').as('windowOpen'); // Stub window.open()
      });
      
      cy.get('.block.w-full.h-full[href="https://www.linkedin.com/in/shamimashrafi"]').click(); // Click the link
      
      cy.get('@windowOpen').should('be.calledWith', 'https://www.linkedin.com/in/shamimashrafi');
  }





}

export default new AboutUs();