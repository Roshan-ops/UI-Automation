import SignupPage from '../../support/pageObjects/SignupPage';
const signupPage = new SignupPage();

describe('Sign Up Flow - Smoke', () => {
  it('User can sign up successfully', () => {
    const timestamp = Date.now();
    const email = `testuser+${timestamp}@example.com`;

    signupPage.visit('/notes/ap');
    signupPage.fillForm('Test User', email, 'password123', 'password123');
    signupPage.submit();

    cy.wait(15000); // Wait for the signup process to complete

    // cy.get('b').should('be.visible'); 

    // Click "Click here to login"
    signupPage.clickHereToLogin();

    // Assertion to check login page is visible
    cy.get('[data-testid="login-email"]').should('be.visible'); 
  });
  });
