import 'cypress-real-events/support';



class HomePage
{
  get url(){
    return "https://inneed.cloud/#";
  }

  visit(){
    cy.visit(this.url);
  }


  title(){
    cy.title("eq","InNeed Intelligent Cloud");
  }

  logo(){
    cy.get("img[alt='Logo']").should("be.visible");
  }

  herotext(){
    cy.get("div[class='relative flex items-center min-h-[230px] md:min-h-[230px] lg:min-h-[300px] xl:min-h-[340px]']").should("be.visible");
  }

  servicesButton(){
    cy.get("div[class='w-full'] div a").click();
    cy.wait(1000);
    cy.get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1)").should('have.text',"Cloud Services")
  }


  servicesNavDropdown(){
    cy.get('.h-8').click()
    .wait(500)
      .get('.menu > :nth-child(1) > .duration-500').click()
      .wait(500)
      .get(':nth-child(1) > .submenu > :nth-child(1) > li > .block').should("have.text","- Cloud Services").click()
      
  
  }



  cloudServices(){
    cy.get('.h-8').click()
    .wait(500)
      .get('.menu > :nth-child(1) > .duration-500').click()
      .wait(500)
      .get(':nth-child(1) > .submenu > :nth-child(1) > li > .block').should("have.text","- Cloud Services").click()
      .get('body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1)').should("have.text","Cloud Services")
      .wait(500)
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1)").click()
      .wait(300)
      .get('body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(3) > div:nth-child(1) > div:nth-child(2)').click()
      .wait(300)
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4) > div:nth-child(1) > div:nth-child(2)").click()
      .wait(300)
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(5) > div:nth-child(1) > div:nth-child(2)").click()
      .wait(300)
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(6) > div:nth-child(1) > div:nth-child(2)").click()
      .wait(300)
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(7) > div:nth-child(1) > div:nth-child(2)").click()
      .wait(300)
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(8) > div:nth-child(1) > div:nth-child(2)").click()
      .wait(300)
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(9) > div:nth-child(1) > div:nth-child(2)").click()

  
  }
    
   
  devopsServices(){
    cy.get('.h-8').click()
    
      .get('.menu > :nth-child(1) > .duration-500').click()
      .get(':nth-child(2) > li > .block').click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1)").should("have.text","DevOps Services")
      .wait(300)
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2) > div:nth-child(1) > div:nth-child(2)").click()
      .wait(300)
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(3) > div:nth-child(1) > div:nth-child(2)").click()
      .wait(300)
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4) > div:nth-child(1) > div:nth-child(2)").click()
      .wait(300)
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(5) > div:nth-child(1) > div:nth-child(2)").click()
      .wait(300)
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > button:nth-child(6) > div:nth-child(1) > div:nth-child(2)").click()

  }

  developmentServices(){
    cy.get('.h-8').click()
    
      .get('.menu > :nth-child(1) > .duration-500').click()
      .get('.submenu > :nth-child(3) > li > .block').click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1)").should("have.text","Development Services")
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > button:nth-child(3) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4) > div:nth-child(1) > div:nth-child(2)").click()

  }


  professionalServices(){
    cy.get('.h-8').click()
    
      .get('.menu > :nth-child(1) > .duration-500').click()
      .get('.submenu > :nth-child(4) > li > .block').click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1)").should("have.text","Professional Services")
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(3) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(5) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(6) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(7) > div:nth-child(1) > div:nth-child(2)").click()
      



  }

  itServices(){
    cy.get('.h-8').click()
    
      .get('.menu > :nth-child(1) > .duration-500').click()
      .get('.submenu > :nth-child(5) > li > .block').click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1)").should("have.text","IT Consulting Services")
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(3) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(5) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(6) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > button:nth-child(7) > div:nth-child(1) > div:nth-child(2)").click()
      



  }
  
  managedServices(){
    cy.get('.h-8').click()
    
      .get('.menu > :nth-child(1) > .duration-500').click()
      .get('.submenu > :nth-child(6) > li > .block').click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1)").should("have.text","Managed Services")
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > button:nth-child(3) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > button:nth-child(5) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > button:nth-child(6) > div:nth-child(1) > div:nth-child(2)").click()
      .get("body > div:nth-child(1) > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1) > div:nth-child(2) > button:nth-child(7) > div:nth-child(1) > div:nth-child(2)").click()
      
     
      



  }
  

  navigationCheck(){
    cy.get('.h-8').click()
    .wait(500)
      .get('.menu > :nth-child(1) > .duration-500').click()
      cy.get('.menu').should("have.text",'Services\n                                 - Cloud Services - DevOps Services - Design Services - Development Services - Professional Services - IT Consulting Services - Managed Services Case Studies BLOG  About Us\n                                 - About InNeed - Executive Team - Advisory Team CAREER AWS Contact Us ')
      
  }


  
























































}

export default new HomePage();