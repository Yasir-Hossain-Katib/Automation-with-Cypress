import AboutUS from "../Pages/AboutUS"

describe("AboutUs",()=>{
    it("Verify the hero text is correct or not",()=>{
        AboutUS.visit();
        AboutUS.checkHeroText();

    })

    it("Verify career button is visible or not",()=>{
        AboutUS.visit();
        AboutUS.careerButton();

    })

    it("Verify our story section exist or not",()=>{
        AboutUS.visit();
        AboutUS.ourStory();

    })

    it("Verify our vision section exist or not",()=>{
        AboutUS.visit();
        AboutUS.ourVision();

    })

    it("Verify key values section exist or not",()=>{
        AboutUS.visit();
        AboutUS.keyValues();

    })

    it("Verify customer centric approach is visible or not",()=>{
        AboutUS.visit();
        AboutUS.customerCentricApproach();

    })

    it("Verify innovation is visible or not",()=>{
        AboutUS.visit();
        AboutUS.innovation();

    })
    it.only("Verify innovation is visible or not",()=>{
        AboutUS.visit();
        AboutUS.team();

    })
})