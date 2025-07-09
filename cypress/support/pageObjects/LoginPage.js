class LoginPage {
  visit() {
    cy.visit('notes/app');
    cy.get('a[href="/notes/app/login"]').click(); // Click on the Login button
  }

  fillForm(email, password) {
    cy.get('[data-testid="login-email"]').type(email);
    cy.get('[data-testid="login-password"]').type(password);
  }

  submit() {
    cy.get('[data-testid="login-submit"]').click();
  }
}

export default LoginPage;

