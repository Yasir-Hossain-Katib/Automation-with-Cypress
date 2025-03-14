import Responsive from "../Pages/Responsive";


beforeEach(()=>{
    Responsive.visit();
})
describe("Responsive Design Test",()=>{
    it("Test iPhone SE View",()=>{
        
        Responsive.iPhoneSE();
    })

    it("Test iPhone XR View",()=>{
        
        Responsive.iPhoneXR();
    })

    it("Test iPhone 12 Pro View",()=>{
        
        Responsive.iPhone12Pro();
    })

    it.only("Test iPhone 14 Pro Max View",()=>{
        
        Responsive.iPhone14ProMax();
    })

    it("Test Pixel 7 View",()=>{
        
        Responsive.Pixel7();
    })

    it("Test Samsung Galaxy S8+ View",()=>{
        
        Responsive.samsungGalaxyS8plus();
    })

    it("Test Samsung Galaxy S20 Ultra View",()=>{
        
        Responsive.samsungGalaxyS20pultra();
    })

    it("Test Samsung Galaxy S20 Ultra View",()=>{
        
        Responsive.samsungGalaxyS20pultra();
    })

    it("Test iPad Mini View",()=>{
        
        Responsive.iPadMini();
    })

    it("Test iPad Air View",()=>{
        
        Responsive.iPadAir();
    })

    it("Test iPad Pro View",()=>{
        
        Responsive.iPadPro();
    })

    it("Test Surface Pro 7 View",()=>{
        
        Responsive.surfacePro();
    })

    it("Test Surface Duo View",()=>{
        
        Responsive.surfaceDuo();
    })

    it("Test Galaxy Z Fold 5 View",()=>{
        
        Responsive.galaxyzfold5();
    })

    it("Test Asus Zenbook Fold View",()=>{
        
        Responsive.galaxyzfold5();
    })

    it("Test Samsung Galaxy A51/71 View",()=>{
        
        Responsive.samsungGalaxyA51();
    })

    it("Test Nest Hub View",()=>{
        
        Responsive.nestHub();
    })

    it("Test Nest Hub Maxx View",()=>{
        
        Responsive.nestHubMax();
    })

    
       
})

