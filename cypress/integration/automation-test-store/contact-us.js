/// <reference types="Cypress" />

describe("Test Contact Us From via Automation Test Store", () => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com")
        /* cy.get('.info_links_footer > :nth-child(5) > a').click() */
        
        //better selector for 'contact us' link on footer
        cy.get('a[href$="contact"]').click()
    })

    it.only("Should be able to submit a successful submission via contact us form",() => {
        //cypress code
        cy.get('#ContactUsFrm_first_name').type('Douglas')
        
        cy.get('#ContactUsFrm_email').type('douglas.davila@oe.com')
        
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')

        cy.get('#ContactUsFrm_enquiry').type('Testing Contact Us Form Submission')
        
        /* cy.xpath('//button[contains(@title, "Submit")]').click() */
        //xpath works, however, it's better to keep built in selectors
        cy.get('button[title="Submit"').click()
        
        cy.get('.contentpanel').should('contain.text', 'Your enquiry has been successfully sent to the store owner!')
        
    });

    it("Should NOT be able to submit a successful submission via contact us form",() => {
        //cypress code
        cy.get('#ContactUsFrm_first_name').type('Douglas')
        /* cy.get('#ContactUsFrm_email').type('douglas.davila@oe.com') */
        cy.get('#ContactUsFrm_enquiry').type('Testing Contact Us Form Submission')
        cy.get('[title="Submit"]').click()
        cy.get('.element_error').should('contain.text', 'Email: is required field! E-Mail Address does not appear to be valid!')
    });



})