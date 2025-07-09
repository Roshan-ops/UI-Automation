class NotesPage {
  clickAddNoteButton() {
    cy.wait(15000).get('[data-testid="add-new-note"]').click();
  }

  selectCategory(category) {
    cy.get('[data-testid="note-category"]').select(category);
  }

  setCompleted(isCompleted) {
    cy.get('[data-testid="note-completed"]')
      .then(($checkbox) => {
        if ($checkbox.prop('checked') !== isCompleted) {
          cy.wrap($checkbox).click();
        }
      });
  }

  enterTitle(title) {
    cy.get('[data-testid="note-title"]').clear().type(title);
  }

  enterDescription(noteDescription) {
    cy.get('[data-testid="note-description"]').clear().type(noteDescription);
  }

  clickCreateNote() {
    cy.get('[data-testid="note-submit"]').click();
  }

  verifyNoteExists(title) {
    cy.get('[data-testid="note-card-title"]').should('exist');
  }

  // Click the completion toggle switch on the note
  toggleNoteCompletion() {
    cy.get('[data-testid="toggle-note-switch"]').click();
  }

  // Verify the progress text
  verifyProgressText(expectedText) {
    cy.get('[data-testid="progress-info"]').should('have.text', expectedText);
  }
  clickViewButton() {
  cy.wait(15000).get('[data-testid="note-view"]').first().click();
}

// Verify that URL contains the note ID
verifyNoteDetailUrl() {
  cy.url().should('match', /\/notes\/app\/notes\/[a-zA-Z0-9]+$/);
}

clickEditButton() {
  cy.wait(15000).get('[data-testid="note-edit"]').click();
}

// Update category from dropdown
updateCategory(category) {
  cy.get('[data-testid="note-category"]').select(category);
}

checkCompleteCheckbox() {
  cy.get('[data-testid="note-completed"]').then(($checkbox) => {
    if (!$checkbox.is(':checked')) {
      cy.wrap($checkbox).click();
    }
  });
}

// Click the Save button
clickSaveNote() {
  cy.wait(15000).get('[data-testid="note-submit"]').click(); 
}
clickDeleteButton() {
  cy.wait(25000).get('[data-testid="note-delete"]').click({ force: true }). wait(10000); 
}

// Confirm deletion in the modal
confirmDeleteInModal() {
  // cy.contains('.modal-title', 'Delete note?').should('be.visible');
  cy.wait(20000).get('[data-testid="note-delete-confirm"]').click();
}

// Optionally verify the note was deleted
verifyNoteDeleted(title) {
  cy.wait(20000).contains(title).should('not.exist');

}
  verifyNoNotesMessageVisible() {
  cy.wait(9000).get('[data-testid="no-notes-message"]').should('be.visible');
}
}



export default NotesPage;
