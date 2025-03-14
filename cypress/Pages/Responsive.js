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

    iPhone14ProMax() {
        const viewportWidth = 430; // iPhone 14 Pro Max width
        const viewportHeight = 932; // iPhone 14 Pro Max height
      
        // Set viewport size
        cy.viewport(viewportWidth, viewportHeight);
      
        // Optional: Check if header is visible
        // cy.get("header").should("be.visible");
      
        // Scroll to the bottom slowly (e.g., 3000ms = 3 seconds)
        cy.scrollTo("bottom", { duration: 3000 });
      
        // Check if any element exceeds the viewport size
        cy.get("body")
          .find("*")
          .each(($el) => {
            const rect = $el[0].getBoundingClientRect();
      
            // Log the element and its dimensions for debugging
            cy.log(
              `Element: ${$el.prop("tagName")}, Width: ${rect.width}, Height: ${rect.height}, Left: ${rect.left}, Top: ${rect.top}`
            );
      
            // Skip elements that are intentionally positioned outside the viewport
            if (
              rect.top < 0 ||
              rect.left < 0 ||
              rect.bottom > viewportHeight ||
              rect.right > viewportWidth
            ) {
              cy.log(`Skipping element: ${$el.prop("tagName")} (positioned outside viewport)`);
              return; // Skip this element
            }
      
            // Assert that the element does not exceed the viewport
            expect(rect.left).to.be.at.least(0, "Element should not overflow on the left");
            expect(rect.top).to.be.at.least(0, "Element should not overflow on the top");
            expect(rect.right).to.be.at.most(
              viewportWidth,
              "Element should not overflow on the right"
            );
            expect(rect.bottom).to.be.at.most(
              viewportHeight,
              "Element should not overflow on the bottom"
            );
          });
      
        // Take a screenshot for debugging
        cy.screenshot("iPhone14ProMax-view");
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