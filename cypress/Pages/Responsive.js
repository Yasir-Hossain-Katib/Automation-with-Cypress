class Responsive{

    get url(){
        return "https://inneed.cloud/";
    }

    visit(){
        cy.visit(this.url);
    }

    iPhoneSE(){
        cy.viewport(375,667);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //y.screenshot()
    }
    iPhoneXR(){
        cy.viewport(414,896);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }

    iPhone12Pro(){
        cy.viewport(390,844);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }
    iPhone14ProMax(){
        cy.viewport(430,932);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }
    Pixel7(){
        cy.viewport(412,915);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }

    samsungGalaxyS8plus(){
        cy.viewport(360,740);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }

    samsungGalaxyS20pultra(){
        cy.viewport(412,915);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }
    
    iPadMini(){
        cy.viewport(768,1024);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }

    iPadAir(){
        cy.viewport(820,1180);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }

    iPadPro(){
        cy.viewport(1024,1366);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }

    surfacePro(){
        cy.viewport(912,1368);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }

    surfaceDuo(){
        cy.viewport(540,720);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }

    galaxyzfold5(){
        cy.viewport(344,882);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }

    asusZenbookFold(){
        cy.viewport(853,1280);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }

    samsungGalaxyA51(){
        cy.viewport(412,914);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }

    nestHub(){
        cy.viewport(1024,600);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }

    nestHubMax(){
        cy.viewport(1280,800);
        //cy.get("header").should("be.visible");
        cy.scrollTo("bottom");
        //cy.screenshot()
    }


}


export default new Responsive();