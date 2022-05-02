/// <reference types="cypress" />

describe('Add Event Form', () => {
  beforeEach(() => {
    cy.visit('/add', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog')
      },
    })
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

  it('should be able to use the form', () => {
    const testDate = new Date()
    const validDate = testDate.toISOString().split('T')[0]
    const validTime = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: 'UTC',
    }).format(Date.now())

    cy.get('input[name=name]').type('Test Event')
    cy.get('input[name=date]').type(validDate)
    cy.get('input[name=time]').type(validTime)
    cy.get('textarea[name=description]').type(`${'Testing data'}{enter}`)
    cy.get('button').click()

    cy.get('@consoleLog').should('be.calledOnce')
  })
})
