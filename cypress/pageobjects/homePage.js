const signInLocator = "a[href='/login']"
const likeBtnLocator = "button[class='btn btn-sm btn-outline-primary pull-xs-right']"
const signUpLocator = "a[href='/register']"
class homePage {


    elements = {
        signInLink: () => cy.get(signInLocator),
        likeBtn: () => cy.get(likeBtnLocator),
        signUpLink: () => cy.get(signUpLocator)
    }


    clickOnSignin() {
        this.elements.signInLink().click()
    }

    signInLinkIsVisible() {
        this.elements.signInLink().should('be.visible')
    }

    clickOnLikeBtn() {
        this.elements.likeBtn().first().click()
    }


    clickOnSignUpLink() {
        this.elements.signUpLink().click({ force: true })
    }

}


module.exports = new homePage();