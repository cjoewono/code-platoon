describe('Character Collection Test', () => {

  beforeEach(() => {
    cy.visit('/characters');
  });

  it('can add Rick Sanchez and Morty Smith', () => {
    cy.get('input[name="name"]').clear().type('Rick Sanchez');
    cy.get('button[type="submit"]').click();
    cy.get('#cardHolder').contains('Rick Sanchez');

    cy.get('input[name="name"]').clear().type('Morty Smith');
    cy.get('button[type="submit"]').click();
    cy.get('#cardHolder').contains('Morty Smith');
  });

  it('can go to detail page and go back to collection', () => {
    cy.get('input[name="name"]').clear().type('Rick Sanchez');
    cy.get('button[type="submit"]').click();
    cy.get('#cardHolder').contains('Rick Sanchez');

    cy.get('#cardHolder a').contains('View Details').first().click();
    cy.url().should('include', '/characters/');

    cy.get('button').contains('Back to Collection').click();
    cy.url().should('include', '/characters');
  });
  
  it('can remove a character', () => {
    cy.get('input[name="name"]').clear().type('Rick Sanchez');
    cy.get('button[type="submit"]').click();
    cy.get('#cardHolder').contains('Rick Sanchez');
    cy.get('#cardHolder button').contains('Delete').first().click();
    cy.get('#cardHolder').children().should('have.length', 3);

    cy.get('#cardHolder').contains('Rick Sanchez');
    cy.get('#cardHolder button').contains('Delete').first().click();
    cy.get('#cardHolder').children().should('have.length', 2);

    cy.get('#cardHolder').contains('Rick Sanchez');
    cy.get('#cardHolder button').contains('Delete').first().click();
    cy.get('#cardHolder').children().should('have.length', 1);

    cy.get('#cardHolder').contains('Rick Sanchez');
    cy.get('#cardHolder button').contains('Delete').first().click();
    cy.get('#cardHolder').children().should('have.length', 0);
    });

});