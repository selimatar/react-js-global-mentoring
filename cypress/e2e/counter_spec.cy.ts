describe('Counter spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('increments the count when the +1 button is clicked', () => {
    cy.get('button').contains('+1').click();
    cy.get('p[title="count"]').should('have.text', '1');
  });

  it('decrements the count when the -1 button is clicked', () => {
    cy.get('button').contains('-1').click();
    cy.get('p[title="count"]').should('have.text', '-1');
  });
});
