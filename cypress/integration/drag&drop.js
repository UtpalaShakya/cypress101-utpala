/// <reference types="cypress" />

describe('Cypress 101 assignment: Test Scenerio 1', () => {

    before(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo')  
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