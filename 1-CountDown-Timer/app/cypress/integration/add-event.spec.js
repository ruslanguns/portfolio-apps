/// <reference types="cypress" />

describe('Add Event Form', () => {
  beforeEach(() => {
    cy.clock(new Date('2022-05-01'), ['Date'])

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

  it('should be displayed the time input field', () => {
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

  it.only('should be able to use the form', () => {
    cy.intercept('POST', '/api', { fixture: 'eventCreated.json' }).as(
      'createEventAPI'
    )
    const name = 'Test Event'
    const date = '2022-05-02'
    const time = '10:00'
    const description = `${'Testing data'}`

    cy.get('input[name=name]').type(name)
    cy.get('input[name=date]').type(date)
    cy.get('input[name=time]').type(time)
    cy.get('textarea[name=description]').type(description)

    cy.get('button').click()

    // cy.get('@consoleLog').should('be.calledOnce')
    cy.wait('@createEventAPI')
      .its('request.body')
      .should('deep.equal', JSON.stringify({ name, date, time, description }))
  })

  it.skip('name should be a required field', () => {
    cy.get('button').click()

    // FIXME: when form is implemented
    cy.get('@consoleLog').should('not.be.calledOnce')
  })

  it('should have a warning message if name is invalid', () => {
    cy.get('button').click()

    cy.get('small').should('contain', 'name is a required field')
  })

  it.skip('date should be a required field', () => {
    cy.get('input[name=name]').type('Test Event')

    cy.get('button').click()

    // FIXME: when form is implemented
    cy.get('@consoleLog').should('not.be.calledOnce')
  })

  it('should have a warning message if date is missing or is invalid', () => {
    cy.get('input[name=name]').type('Test Event')

    cy.get('button').click()

    cy.get('small').should('contain', 'date is missing or is invalid')
  })

  it('should have a warning message if date is before now', () => {
    const testDate = new Date(Date.now() - 1000 * 60 * 60 * 24)
      .toISOString()
      .split('T')[0]

    cy.get('input[name=name]').type('Test Event')
    cy.get('input[name=date]').type(testDate)

    cy.get('button').click()

    cy.get('small').should('contain', 'date must be at least from today')
  })

  it('should have a warning message if time is before when is today', () => {
    const now = new Date()
    const todayDate = new Date(now).toISOString().split('T')[0]
    const oneMinuteAgo = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
      timeZone: 'UTC',
    }).format(now.getTime() - 1000)

    cy.get('input[name=name]').type('Test Event')
    cy.get('input[name=date]').type(todayDate)
    cy.get('input[name=time]').type(oneMinuteAgo)

    cy.get('button').click()

    cy.get('small').should('contain', 'time must be later than now()')
  })
})
