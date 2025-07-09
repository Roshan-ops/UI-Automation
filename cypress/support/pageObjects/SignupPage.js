class SignupPage {
  visit() {
    cy.visit('https://practice.expandtesting.com/notes/app');
    cy.get('[data-testid="open-register-view"]').click();
  }

  fillForm(name, email, password, confirmPassword) {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#confirmPassword').type(confirmPassword);
  }

  submit() {
    cy.get('[data-testid="register-submit"]').click();
  }
  clickHereToLogin() {
    cy.wait(15000).get('[data-testid="login-view"]').click();
  }
}

export default SignupPage;
