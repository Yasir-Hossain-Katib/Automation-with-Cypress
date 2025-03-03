class Blog
{
  get url(){
    return "https://inneed.cloud/blog/";
  }

  visit(){
    cy.visit(this.url);
  }

  heroTextCheck(){
    cy.get("h2[class='text-textPrimary text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 leading-none']").should("have.text","One-stop resource for all the information")
    cy.get('.text-textTertiary').should("have.text","Extensive research, compiled into valuable insights\n                            and knowledge. It's like a university without the\n                            fees.")
  }

  publish(){
    cy.get('[data-svelte-h="svelte-w947fi"] > .text-textPrimary').should("be.visible");
  }

  checkReadMore1(){
    cy.get('body > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)').click();
    cy.url().should('eq', 'https://inneed.cloud/blog/66cd9be78538f700083bd552/');
    


  }

  checkReadMore2(){
    cy.get('body > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)').click();
    cy.url().should('eq', 'https://inneed.cloud/blog/66cd9be78538f700083bd552/');


  }

  amazonButton(){
    cy.get('a:nth-child(3) button:nth-child(1)').click();
    cy.url().should('eq', 'https://inneed.cloud/blog/?category=66654d3c3b400d000862b672');


  }

  cloudComputingButton(){
    cy.get('body > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)').click();
    cy.url().should('eq', 'https://inneed.cloud/blog/?category=66654d193b400d000862b671');


  }


  awsPartnerButton(){
    cy.get('body > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)').click();
    cy.url().should('eq', 'https://inneed.cloud/blog/?category=66654cef3b400d000862b670');


  }

  costOptimizationButton(){
    cy.get('body > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(5)').click();
    cy.url().should('eq', 'https://inneed.cloud/blog/?category=65f012037f99cc000875e09a');


  }

  clodNativeButton(){
    cy.get('body > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6)').click();
    cy.url().should('eq', 'https://inneed.cloud/blog/?category=65f011db7f99cc000875e099');


  }

  clodNativeButton(){
    cy.get('body > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(6)').click();
    cy.url().should('eq', 'https://inneed.cloud/blog/?category=65f011db7f99cc000875e099');


  }

  productManagementButton(){
    cy.get('body > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(7)').click();
    cy.url().should('eq', 'https://inneed.cloud/blog/?category=65cc98b2c0424400098096ee');


  }

  svelteButton(){
    cy.get('body > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(8)').click();
    cy.url().should('eq', 'https://inneed.cloud/blog/?category=65cc7d4b7c04790008070a48');


  }

  javascriptButton(){
    cy.get('body > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a:nth-child(9)').click();
    cy.url().should('eq', 'https://inneed.cloud/blog/?category=65cc7d2b7c04790008070a47');


  }

  noBlog(){
    cy.visit("https://inneed.cloud/blog/?category=65cc7d2b7c04790008070a47")
    cy.get("div[class='text-textPrimary text-3xl lg:text-4xl font-medium mb-3'] p").should('have.text',"No blog with this category is available");


  }



}


export default new Blog();