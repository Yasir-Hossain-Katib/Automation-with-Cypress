class ContactFormPage {
  constructor() {
    this.iframeSelector = 'iframe[src*="https://api.leadconnectorhq.com/widget/form/vB6CGJwh8Ru6hS4Lgrqo"]'; // Update this selector
    this.nameInput = '#full_name'; // Replace with actual selector
    this.emailInput = 'input[name="email"]'; // Replace with actual selector
    this.phoneInput = 'input[name="phone"]'; // Replace with actual selector
    this.messageInput = 'textarea[name="rqqYjImBddJqZMKSFQaI"]';
    this.submitButton = 'button[type="submit"]'; // Replace with actual selector
    this.successMessage = '.thank-you-message'; // Replace with actual selector
  }

  visit() {
    cy.visit('https://inneed.cloud/contact-us/'); // Update with actual page URL
    cy.frameLoaded(this.iframeSelector); // Wait for the iframe to load
  }

  fillForm(name, email, phone, message) {
    cy.iframe(this.iframeSelector).then(($iframe) => {
      const body = $iframe.contents().find('body');
      cy.wrap(body).find(this.nameInput).type(name);
      cy.wrap(body).find(this.emailInput).type(email);
      if (phone) {
        cy.wrap(body).find(this.phoneInput).type(phone);
      }
      if (message) {
        cy.wrap(body).find(this.messageInput).type(message);
      }
    });
  }

  submitForm() {
    cy.iframe(this.iframeSelector).then(($iframe) => {
      const body = $iframe.contents().find('body');
      cy.wrap(body).find(this.submitButton).click();
    });
  }

  verifySuccessMessage() {
    cy.iframe(this.iframeSelector).then(($iframe) => {
      const body = $iframe.contents().find('body');
      cy.wrap(body)
        .find(this.successMessage)
        .should('be.visible')
        .and('contain.text', 'Thank you for your message.');
    });
  }
}

export default ContactFormPage;