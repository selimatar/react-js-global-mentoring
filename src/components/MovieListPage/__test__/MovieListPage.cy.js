import React from 'react'
import MovieListPage from '../movieListPage'

describe('Movie List Page', () => {

    beforeEach(() => {
        // run these tests as if in a desktop
        // browser with a 720p monitor
        cy.viewport(1280, 720)
    })

    it('renders movie list page', () => {
        cy.mount(<MovieListPage />);
        cy.get('.movie-filtering').should('be.visible');
    });

    describe('SearchForm functionality', () => {
        it('should pass and modify search query state', () => {
            const searchQuery = '';
            // Visit the page containing the SearchForm component
            cy.mount(<MovieListPage />)
            // Assert that the initial search query is set correctly
            cy.get('.search-input').should('have.value', searchQuery)
      
            // Modify the search query by typing into the input field
            const newQuery = 'new query';
            cy.get('.search-input').type(newQuery)

            // Submit the form by triggering a submit event on the form element
            cy.get('form').submit()

            // Assert that the search query state has been modified
            cy.get('.search-input').should('have.value', newQuery)
        });
    });

    describe('MovieTile functionality', () => {
        it('should render movie details instead of search form when movie tile clicked', () => {
            //render the movie list page
            cy.mount(<MovieListPage />);
            cy.get('.search-form').should('be.visible')

            //click button to test the components render or not
            cy.get('.movie-image').eq(0).click()
            cy.get('.search-form').should('not.exist')
            cy.get('.movie-details').should('exist')
        });
    });
});
  