const logoutBtnLocator = "button[class='btn btn-outline-danger']";
class settingsPage {

    elements = {
        logoutBtn: () => cy.get(logoutBtnLocator),
    }


    clickOnLogoutBtn() {
        this.elements.logoutBtn().click()
    }

}




module.exports = new settingsPage();