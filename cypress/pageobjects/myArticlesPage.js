const firstArticleHeaderLocator = "a[class='preview-link']>h1";
class myArticlesPage {

    elements = {
        firstArticleHeader: () => cy.get(firstArticleHeaderLocator),
    }

    clickOnFirstArticleHeader() {
        this.elements.firstArticleHeader().first().click()
    }

}




module.exports = new myArticlesPage();