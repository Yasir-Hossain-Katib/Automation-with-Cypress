import HomePage from "../Pages/HomePage";

describe("Homepage",()=>{
  it("Verify the title exists properly or not",()=>{
      HomePage.visit();
      HomePage.title();
  })


  it("Verify the logo exists properly or not",()=>{
      HomePage.visit();
      HomePage.logo();
  })


  it("Verify the Hero text visible or not",()=>{
      HomePage.visit();
      HomePage.herotext();
  })


  it("Verify the our services button is working",()=>{
      HomePage.visit();
      HomePage.servicesButton();
  })


  it("Verify the services dropdown is working",()=>{
      HomePage.visit();
      HomePage.servicesNavDropdown();
  })

  it("Verify the workings of cloud services section",()=>{
      HomePage.visit();
      HomePage.cloudServices();
  })

  it("Verify the workings of devops services section",()=>{
      HomePage.visit();
      HomePage.devopsServices();
  })

  it("Verify the workings of development services section",()=>{
      HomePage.visit();
      HomePage.developmentServices();
  })

  it("Verify the workings of professional services section",()=>{
      HomePage.visit();
      HomePage.professionalServices();
  })


  it("Verify the workings of it consulting services section",()=>{
      HomePage.visit();
      HomePage.itServices();
  })

  it("Verify the workings of managed services section",()=>{
      HomePage.visit();
      HomePage.managedServices();
  })

  it.only("Verify all the items in the navigation menu present or not",()=>{
      HomePage.visit();
      HomePage.navigationCheck();
  })












})