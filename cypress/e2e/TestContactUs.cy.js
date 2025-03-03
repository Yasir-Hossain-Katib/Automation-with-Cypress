import ContactFormPage from '../Pages/ContactFormPage';

describe("Contact Form Automation (Inside iFrame)", () => {
  const contactPage = new ContactFormPage();

  it.only("Should successfully submit the form with all valid details", () => {
    contactPage.visit();
    contactPage.fillForm("John Doe", "johndoe@example.com", "1234567890", "This is a test message.");
    contactPage.submitForm();
    contactPage.verifySuccessMessage();
  });

  it("Should fail submission without required fields", () => {
    contactPage.visit();
    contactPage.submitForm();
    cy.iframe(contactPage.iframeSelector).then(($iframe) => {
      const body = $iframe.contents().find('body');
      cy.wrap(body)
        .find('.error-msg') // Update with actual error selector
        .should('be.visible')
        .and('contain.text', 'Please fill out this field');
    });
  });

  it("Should show error for invalid email", () => {
    contactPage.visit();
    contactPage.fillForm("John Doe", "invalid-email", "1234567890", "Testing invalid email.");
    contactPage.submitForm();
    cy.iframe(contactPage.iframeSelector).then(($iframe) => {
      const body = $iframe.contents().find('body');
      cy.wrap(body)
        .find('.error-msg')
        .should('be.visible')
        .and('contain.text', 'Enter a valid email');
    });
  });

  it("Should show error for invalid phone number", () => {
    contactPage.visit();
    contactPage.fillForm("John Doe", "johndoe@example.com", "abc123", "Testing invalid phone.");
    contactPage.submitForm();
    cy.iframe(contactPage.iframeSelector).then(($iframe) => {
      const body = $iframe.contents().find('body');
      cy.wrap(body)
        .find('.error-msg')
        .should('be.visible')
        .and('contain.text', 'Enter a valid phone number');
    });
  });

  it("Should allow optional fields to be empty", () => {
    contactPage.visit();
    contactPage.fillForm("Jane Doe", "janedoe@example.com", "", "");
    contactPage.submitForm();
    contactPage.verifySuccessMessage();
  });
});