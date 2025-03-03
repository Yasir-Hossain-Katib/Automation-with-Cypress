import 'cypress-real-events/support';



class HomePage
{
  get url(){
    return "https://inneed.cloud/";
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

  checkCaseStudies(){
    cy.get('.h-8').click()
    cy.get('.menu > :nth-child(2) > .text-xl').click();
    cy.get("section[id='projects'] h4").should("have.text","Our projects")
  }


  


  checkBlog(){
    cy.get('.h-8').click()
    cy.get('.menu > :nth-child(3) > .text-xl').click({force:true});
    cy.url().should("eq","https://inneed.cloud/blog/");
  }


  checkAboutUs(){
    cy.get('.h-8').click()
    cy.get('.menu > :nth-child(4) > .duration-500').click();
    cy.get(':nth-child(4) > .submenu > :nth-child(1) > :nth-child(1) > .block').should("have.text","- About InNeed")
  }

  checkAboutInNeed(){
    cy.get('.h-8').click()
    cy.get('.menu > :nth-child(4) > .duration-500').click();
    cy.get(':nth-child(4) > .submenu > :nth-child(1) > :nth-child(1) > .block').click();
    cy.url().should("eq","https://inneed.cloud/about-us/?team=executive");
  } 

  checkExecutiveTeam(){
    cy.get('.h-8').click()
    cy.get('.menu > :nth-child(4) > .duration-500').click();
    cy.get('.submenu > :nth-child(1) > :nth-child(2) > .block').click();
    cy.url().should("eq","https://inneed.cloud/about-us/?team=executive#our-team");
  }

  checkAdvisoryTeam(){
    cy.get('.h-8').click()
    cy.get('.menu > :nth-child(4) > .duration-500').click();
    cy.get(':nth-child(1) > .text-xl > li > .block').click();
    cy.url().should("eq","https://inneed.cloud/about-us/?team=advisory#our-team");
  }

  checkCareer(){
    cy.get('.h-8').click()
    cy.get('.menu > :nth-child(5) > .duration-500').click();
    cy.url().should("eq","https://inneed.cloud/#");
  }

  checkAWS(){
    cy.get('.h-8').click()
    cy.get('.menu > :nth-child(6) > .duration-500').click();
    cy.url().should("eq","https://inneed.cloud/#");
  }


  checkContactUs(){
    cy.get('.h-8').click();
    cy.get(':nth-child(7) > a > .text-center > .font-normal').click();
    cy.url().should("eq","https://inneed.cloud/contact-us/");
  }

  checkAWSCredentials(){
    cy.get("section[id='aws-partner'] h4").should("have.text","InNeed AWS Credentials");
  }

  checkAWSpartnerImage(){
    cy.get("img[alt='AWS Partner Newtwork']").should("be.visible")
  }

  checkAWSadvancedTier(){
    
    cy.get("img[alt='aws-advance-tier-services']").should("be.visible")
  }

  checkAWSlamdaDelivery(){
    
    cy.get("img[alt='aws-lamda-delivery']").should("be.visible")
  }

  checkAWSpublicSector(){
    
    cy.get("img[alt='aws-pubbic-sector']").should("be.visible")
  }

  checkAWSwellArchitectPartner(){
    
    cy.get("img[alt='well-architect-partner-program']").should("be.visible")
  }

  checkOurProjectsTitleLine(){
    cy.get("body > div:nth-child(1) > section:nth-child(5) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1)").should("have.text","Success Stories Built With InNeed");
  }

  checkProjects(){
    cy.get("img[class='w-28 sm:w-32 md:w-36 lg:w-64']").scrollIntoView(); 

  }


  checkUSAOffice(){
    cy.get("div[class='mb-2 md:mb-4']").should("be.visible");
  }


  checkBangladeshOffice(){
    cy.get("div[class='mb-2'] span[class='text-textPrimary text-base']").should("be.visible");

   

    
  }
  
}

export default new HomePage();