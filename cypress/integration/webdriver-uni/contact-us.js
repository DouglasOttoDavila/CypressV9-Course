/// <reference types="Cypress" />

describe("Test Contact Us From via WebdriverUni", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    })

    it("Should be able to submit a successful submission via contact us form",() => {
        //cypress code
        cy.document().should('have.property', 'charset', 'UTF-8')
        /* cy.document().should('have.property', 'charset').and('eq','UTF-8') */

        cy.title().should('eq', 'WebDriver | Contact Us')

        /* cy.url().should('eq', 'https://webdriveruniversity.com/Contact-Us/contactus.html') */
        cy.url().should('contain','contactus')

        cy.get('[name="first_name"]').type("Douglas")
        cy.get('[name="last_name"]').type("D'Avila")
        cy.get('[name="email"]').type("douglas.davila@oe.com")
        cy.get('[name="message"]').type('Testing Message for Cypress V9 Course')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required",() => {
        /* cy.get('[name="first_name"]').type("Douglas") */
        cy.get('[name="last_name"]').type("D'Avila")
        /* cy.get('[name="email"]').type("douglas.davila@oe.com") */
        cy.get('[name="message"]').type('Testing Message for Cypress V9 Course')
        cy.get('[type="submit"]').click()

        /* cy.get('body').should('contain.text', 'Error: all fields are required') */
        //command above can be used, however, the below one is simpler and works as well
        cy.get('body').contains('Error: all fields are required')
    });

})