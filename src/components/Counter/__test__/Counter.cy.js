import React from 'react'
import Counter from '../counter'

describe('<Counter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter />);
    cy.get('p[title=count]').should('have.text', '0')
  })

  it('increments the count when the +1 button is clicked', () => {
    cy.mount(<Counter />);
    cy.get('button').contains('+1').click()
    cy.get('p[title="count"]').should('have.text', '1');
  });

  it('decrements the count when the -1 button is clicked', () => {
    cy.mount(<Counter />);
    cy.get('button').contains('-1').click()
    cy.get('p[title="count"]').should('have.text', '-1');
  });
})