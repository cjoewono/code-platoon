describe('Going into the about page from home', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('can go to About page to Character page and back to Home page', () => {
    cy.get('nav a').contains('About').click();
    cy.url().should('include', '/about');

    cy.get('nav a').contains('Characters').click();
    cy.url().should('include', '/characters');

    cy.get('nav a').contains('Rick & Morty').click();
    cy.url().should('include', '/');

  });
})