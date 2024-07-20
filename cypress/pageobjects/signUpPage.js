import helper from "./helper"
const userNameLocator = "input[placeholder='Username']"
const emailLocator = "input[placeholder='Email']"
const passwordLocator = "input[placeholder='Password']"
const signUpBtnLocator = "button[type='submit']"
class signUpPage {

    elements = {
        userNameField: () => cy.get(userNameLocator),
        emailField: () => cy.get(emailLocator),
        passwordField: () => cy.get(passwordLocator),
        signUpBtn: () => cy.get(signUpBtnLocator)
    }


    checkAllElementsAreVisible() {
        this.elements.userNameField().should('be.visible')
        this.elements.emailField().should('be.visible')
        this.elements.passwordField().should('be.visible')
        this.elements.signUpBtn().should('be.visible')
    }


    signUpWithValidCredentials() {
        let name = helper.createRandomString(10)
        this.elements.userNameField().type(name)
        this.elements.emailField().type(helper.createRandomString(10) + '@gmail.com')
        this.elements.passwordField().type(helper.createRandomString(10))
        this.elements.signUpBtn().click()
        return name
    }

}




module.exports = new signUpPage();