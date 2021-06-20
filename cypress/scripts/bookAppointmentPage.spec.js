export class bookAppointmentPage{

    chooseFacility(facility){
        cy.get("#combo_facility").select(facility)
        
    }

    applyForReadMission(apply){
        if (apply == true) {
            cy.get('#chk_hospotal_readmission').click()
        }
    }

    HealthcareProgram(program){
        if (program == 'medicare') {
            cy.get(':nth-child(3) > .col-sm-4 > :nth-child(1)').click()
        }
        else if (program == 'medicaid') {
            cy.get('.col-sm-4 > :nth-child(2)').click()            
        }

        else{
            cy.get('.col-sm-4 > :nth-child(3)').click()
        }
    }

    VisitDate(date){
        cy.get('#txt_visit_date').type(date)
    }

    AddComment(comment){
        cy.get('#txt_comment').click()
        cy.get('#txt_comment').type(comment)
    }

    clickBookbtn(){
        cy.get('#btn-book-appointment').click()
    }
}