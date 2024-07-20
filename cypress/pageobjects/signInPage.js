import helper from "./helper"
const emailLocator = "input[placeholder='Email']"
const signInBtnLocator = "button[type='submit']"
const passwordLocator = "input[placeholder='Password']"
const errorMessageLocator = "ul[class='error-messages']>li"
class signInPage {

    elements = {
        emailField: () => cy.get(emailLocator),
        signInBtn: () => cy.get(signInBtnLocator),
        passwordField: () => cy.get(passwordLocator),
        errorMessage: () => cy.get(errorMessageLocator)
    }


    enterRandomInvalidEmail() {
        this.elements.emailField().type(helper.createRandomString(10))
    }

    clickOnSignInBtn() {
        this.elements.signInBtn().click()
    }

    checkInvalidEmailMessageIsDisplayed() {
        this.elements.emailField().should('have.class', 'ng-invalid-email')
    }

    enterRandomInvalidPassword() {
        this.elements.passwordField().type(helper.createRandomString(10))
    }

    enterRandomValidEmail() {
        this.elements.emailField().type(helper.createRandomString(10) + '@gmail.com')
    }

    loginWithValidCredentials() {
        this.elements.emailField().type(helper.existingEmail)
        this.elements.passwordField().type(helper.existingPassword)
        this.elements.signInBtn().click()
    }

}


module.exports = new signInPage();