import SignupPage from '../../../support/pageObjects/SignupPage';
import LoginPage from '../../../support/pageObjects/LoginPage';
import NotesPage from '../../../support/pageObjects/NotesPage';



const signupPage = new SignupPage();
const loginPage = new LoginPage();
const notesPage = new NotesPage();


describe('Regression - Signup and Login Flow', () => {
  const timestamp = Date.now();
  const email = `testuser+${timestamp}@example.com`;
  const password = 'password123';
  const noteTitle = `Test Note ${timestamp}`;
  // const noteDescription = 'This is a test note description.';
  let noteData;

  before(() => {
   cy.fixture('user').then((data) => {
      noteData = data;
    });
  });


  it('should sign up and log in with same credentials', () => {
    // Sign Up
    signupPage.visit();
    signupPage.fillForm('Test User', email, password, password);
    signupPage.submit();

    cy.wait(5000); // Wait for the signup process to complete

    // cy.contains('User account created successfully').should('be.visible');

    // Click "Click here to login"
    signupPage.clickHereToLogin();

    // Login
    loginPage.fillForm(email, password);
    loginPage.submit();
    cy.wait(5000); 
    // Verify login success
    // cy.get('[data-testid="home"]').should('be.visible');
    cy.url().should('include', '/notes/app'); // Optional check

    cy.wait(5000); 

    notesPage.clickAddNoteButton();
    notesPage.selectCategory('Personal'); //s value exists in the dropdown
    notesPage.setCompleted(true);
    notesPage.enterTitle(noteTitle);
    notesPage.enterDescription(noteData.noteDescription); // 
    cy.wait(10000); // Wait for the description to be set
    notesPage.clickCreateNote();

    // notesPage.verifyNoteExists(noteTitle);


    // progress message
    cy.wait(15000);
    // cy.get('[data-testid="note-card-title"]') .wait(15000).should('be.visible');

    cy.wait(15000).get('[data-testid="toggle-note-switch"]').click();


    cy.wait(15000).get('[data-testid="progress-info"]')
      .should('have.text', 'You have 0/1 notes completed in the all categories');

      notesPage.clickViewButton();

    notesPage.verifyNoteDetailUrl();

    notesPage.clickEditButton();
    notesPage.updateCategory('Work'); //  another valid category
    notesPage.checkCompleteCheckbox();
    notesPage.clickSaveNote();
    notesPage.clickDeleteButton();
    notesPage.confirmDeleteInModal();

// Verify the note is no longer visible
notesPage.verifyNoteDeleted(noteTitle);
notesPage.verifyNoNotesMessageVisible();

  });
  
   });

