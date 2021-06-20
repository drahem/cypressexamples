/// <reference types="cypress" />

import { loginPage } from "../scripts/loginPage.spec"
import {bookAppointmentPage} from "../scripts/bookAppointmentPage.spec"

describe("test making appointment", function(){
    const login = new loginPage()
    const appointment = new bookAppointmentPage()

    beforeEach(() => {
        // before each test, we can automatically preserve the
        // 'session_id' and 'remember_token' cookies. this means they
        // will not be cleared before the NEXT test starts.
        //
        // the name of your cookies will likely be different
        // this is an example
        Cypress.Cookies.preserveOnce('session_id', 'remember_token')
      })
    

    it("test login", function(){
        
        // open website 
        cy.visit("https://katalon-demo-cura.herokuapp.com/")
        
        // assert page title
        cy.title().should("eq", "CURA Healthcare Service")

        // assert using https
        cy.location('protocol').should('eq', 'https:')

        // go to login page 
        cy.get('#menu-toggle > .fa').click()
        cy.get('.sidebar-nav > :nth-child(4) > a').click()

        // assert being at login page 
        cy.contains("Please login to make appointment.").should("be.visible")

        // enter login data
        login.enterName("John Doe")
        login.enterPassword("ThisIsNotAPassword")
        cy.get("#btn-login").click()

        // assert successful login 
        cy.get('#btn-book-appointment').should("be.visible")

    })

    it("test making appointment", function(){
        cy.get("#btn-make-appointment").click()
        appointment.chooseFacility("Hongkong CURA Healthcare Center")   
        appointment.applyForReadMission(true)
        appointment.VisitDate("20/06/2021")
        appointment.HealthcareProgram("medicaid")
        appointment.AddComment("this is a comment about the visit.")
        appointment.clickBookbtn()

        // assert booking success 
        cy.get('.text-center > .btn').should("be.visible")
        cy.contains("Appointment Confirmation").should("be.visible")


    })
})