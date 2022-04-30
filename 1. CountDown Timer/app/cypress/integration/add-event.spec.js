/// <reference types="cypress" />

describe('Add Event Form', () => {
  beforeEach(() => {
    cy.visit('/add')
  })

  it('should display a heading', () => {
    cy.get('h1').should('contain', 'Submit an event')
  })

  it('should display add event in the title', () => {
    cy.title().should('eq', 'Add an event')
  })

  it('should be displayed the name input field', () => {
    cy.get('label').should('contain', 'Name *')
    cy.get('input[name="name"]').should('be.visible')
  })

  it('should be displayed the date input field', () => {
    cy.get('label').should('contain', 'Date *')
    cy.get('input[name="date"]').should('be.visible')
  })

  it('should be displayed the date input field', () => {
    cy.get('label').should('contain', 'Time')
    cy.get('input[name="date"]').should('be.visible')
  })

  it('should be displayed the description textarea field', () => {
    cy.get('label').should('contain', 'Description')
    cy.get('textarea[name="description"]').should('be.visible')
  })

  it('should be displayed the submit button', () => {
    cy.get('button').should('contain', 'Start')
  })
})
