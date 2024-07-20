const titleLocator = "div[class='container']>h1";
const descriptionLocator = "div[class='row article-content']>div>p";
const bodyLocator = "div[class='row article-content']>div>div>p";
const deleteArticleButtonLocator = "button[class='btn btn-outline-danger btn-sm']";
const editArticleButtonLocator = "a[class='btn btn-outline-secondary btn-sm']";
class articlePage {

    elements = {
        titleHeading: () => cy.get(titleLocator),
        descriptionHeading: () => cy.get(descriptionLocator),
        bodyHeading: () => cy.get(bodyLocator),
        deleteArticleBtn: () => cy.get(deleteArticleButtonLocator),
        editArticleBtn: () => cy.get(editArticleButtonLocator),
    }



    clickOnDeleteArticleBtn() {
        this.elements.deleteArticleBtn().click()
    }

    clickOnEditArticleBtn() {
        this.elements.editArticleBtn().click()
    }

}




module.exports = new articlePage();