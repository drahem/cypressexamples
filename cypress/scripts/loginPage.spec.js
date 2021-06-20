export class loginPage{
    enterName(name){
        cy.get('#txt-username').type(name)
    }

    enterPassword(password){
        cy.get('#txt-password').type(password)
    }

}

