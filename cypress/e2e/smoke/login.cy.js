import LoginPage from '../../support/pageObjects/LoginPage';
const loginPage = new LoginPage();

describe('Login Flow - Smoke',{tags:['@smoke']}, () => {
  it('User can log in successfully', () => {
    const email = 'test34@yopmail.com'; 
    const password = 'password123';   

    loginPage.visit();
    loginPage.fillForm(email, password);
    loginPage.submit();
     cy.wait(15000); 

    
    cy.get('[data-testid="home"]').should('be.visible'); 
  });
});
