/// <reference types="cypress" />
import { terminalLog } from "../support/commands"

describe('Cypress 101 assignment: Test Scenerio 2', () => {
  before(() => {
      cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo')
      cy.viewport('samsung-note9')
      cy.contains('Input Forms').click().should('be.visible')
      cy.contains('Input Form Submit').click({force: true})
      cy.injectAxe()

    })

    it('verify form accessibility using cypress-axe', () => {
        cy.checkA11y('.loginform', terminalLog)
    })

    it('performance metrics of the submission page using lighthouse command', () => {
        cy.get('#name').type('cypress101')
        cy.xpath('//input[@id="inputEmail4"]').type('cypress101@yopmail.com')
        cy.get('#inputPassword4').type('Test@123')
        cy.get('#company').type('test')
        cy.get('#websitename').type('www.gogo.com')
        cy.get('#inputCity').type('kathmandu')
        cy.get('#inputAddress1').type('xyz')
        cy.get('#inputAddress2').type('abc')
        cy.get('#inputState').type('kathmandu')
        cy.get('#inputZip').type('44600')
        cy.get('.btn').click()
    
        cy.get('.success-msg').should('have.text', 'Thanks for contacting us, we will get back to you shortly.')

        const threshold = {
            performance: 55,
            accessibility: 90,
            "best-practices": 80,
            seo: 80,
        };
    
        const lighthouseConfig = {
            formfactor: "mobile",
            screenEmulation: {
                disabled: true,
            }
        }

        cy.lighthouse(threshold, lighthouseConfig)
   })
})
