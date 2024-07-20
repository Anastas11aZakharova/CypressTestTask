import helper from "./helper";

const profileLinkLocator = "img[class='user-pic']";
const settingsLinkLocator = "a[href='/settings']";
const newArticleLinkLocator = "a[href='/editor']";
const sideBarLocator = "div[class='sidebar']";
class mainPage {

    elements = {
        profileLink: () => cy.get(profileLinkLocator),
        settingsLink: () => cy.get(settingsLinkLocator),
        newArticleLink: () => cy.get(newArticleLinkLocator),
        sideBar: () => cy.get(sideBarLocator),
    }


    checkProfileLinkIsVisible() {
        this.elements.profileLink().should('have.class', 'user-pic')
    }

    checkProfileLinkContainsDefaultText() {
        this.elements.profileLink().should('have.attr', 'alt', helper.userName)
    }

    checkProfileLinkContainsText(text) {
        this.elements.profileLink().should('have.attr', 'alt', text)
    }

    clickOnSettingsLink() {
        this.elements.settingsLink().click()
    }

    clickOnNewArticleLink() {
        this.elements.newArticleLink().click()
    }

    clickOnProfileLink() {
        this.elements.profileLink().parent().click()
    }

    checkSideBarIsVisible() {
        this.elements.sideBar().should('be.visible')
    }

}

module.exports = new mainPage();