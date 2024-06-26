/// <reference types="cypress" />
import {A11YOptions } from "../fixtures/accessibilityOptions"
import { lighthouseConfig, threshold } from "../fixtures/lighhouseOptions"
import { terminalLog } from "../support/commands"


describe('Cypress 101 assignment: Test Scenerio 1', () => {

  beforeEach(() => {
      cy.visit('/selenium-playground/input-form-demo')  
  })
  it('drag and drop sliders', () => {
      cy.url().should('include', 'selenium-playground/input-form-demo')
      cy.get('P[class="inline-block"]').eq(3).click()
      cy.contains('Drag & Drop Sliders').click()
      cy.get('input[type=range]').invoke('val', '95')
      cy.get('#rangeSuccess').invoke('val', '95').trigger('change')
      cy.get('#rangeSuccess').should('have.text', '95')
  })
});

describe('Cypress 101 assignment: Test Scenerio 2', () => {
  beforeEach(() => {
      cy.viewport('samsung-note9')
      cy.contains('Input Forms').click().should('be.visible')
      cy.contains('Input Form Submit').click({force: true})  

    })

    it('verify form accessibility using cypress-axe', () => {
        cy.injectAxe()
        cy.checkA11y('.loginform',A11YOptions, terminalLog)
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

        cy.lighthouse(threshold, lighthouseConfig)

        cy.get('.success-msg').should('have.text', 'Thanks for contacting us, we will get back to you shortly.')
   })
})
