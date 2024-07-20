import helper from "./helper";

const titleLocator = "input[placeholder='Article Title']";
const descriptionLocator = "input[name='description']";
const bodyLocator = "textarea[name='body']";
const tagsLocator = "input[placeholder='Enter tags']";
const publishArticleBtnLocator = "button[class='btn btn-lg pull-xs-right btn-primary']";
class newArticlePage {

    elements = {
        articleTitleField: () => cy.get(titleLocator),
        whatThisArticleAboutField: () => cy.get(descriptionLocator),
        writeYourArticleField: () => cy.get(bodyLocator),
        enterTagsField: () => cy.get(tagsLocator),
        publishArticleBtn: () => cy.get(publishArticleBtnLocator),
    }


    enterRandomTextToArticleTitleField() {
        let randomText = helper.createRandomString(10);
        this.elements.articleTitleField().clear().type(randomText)
        return randomText;
    }


    enterRandomTextToWhatThisArticleAboutField() {
        let randomText = helper.createRandomString(15);
        this.elements.whatThisArticleAboutField().type(randomText)
        return randomText;
    }

    enterRandomTextToWriteYourArticleField() {
        let randomText = helper.createRandomString(30);
        this.elements.writeYourArticleField().type(randomText)
        return randomText;
    }

    enterRandomTextToEnterTagsField() {
        let randomText = helper.createRandomString(10);
        this.elements.enterTagsField().type(randomText)
        return randomText;
    }

    clickOnPublishArticleBtn() {
        this.elements.publishArticleBtn().click()
    }

}




module.exports = new newArticlePage();