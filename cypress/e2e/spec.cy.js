import homePage from "../pageobjects/homePage"
import signInPage from "../pageobjects/signInPage"
import mainPage from "../pageobjects/mainPage"
import settingsPage from "../pageobjects/settingsPage"
import newArticlePage from "../pageobjects/newArticlePage"
import articlePage from "../pageobjects/articlePage"
import myArticlesPage from "../pageobjects/myArticlesPage"
import signUpPage from "../pageobjects/signUpPage"



describe('testing of https://conduit.realworld.how/', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with invalid password', () => {
    homePage.clickOnSignin();
    signInPage.enterRandomValidEmail();
    signInPage.enterRandomInvalidPassword();
    signInPage.clickOnSignInBtn();
    signInPage.elements.errorMessage().should('have.text', 'email or password is invalid')
  })

  it('Login with empty email', () => {
    homePage.clickOnSignin();
    signInPage.enterRandomInvalidPassword();
    signInPage.clickOnSignInBtn();
    signInPage.elements.errorMessage().should('have.text', 'email can\'t be blank')
  })

  it('Login with empty password', () => {
    homePage.clickOnSignin();
    signInPage.enterRandomValidEmail();
    signInPage.clickOnSignInBtn();
    signInPage.elements.errorMessage().should('have.text', 'password can\'t be blank')
  })

  it('Login with valid credentials', () => {
    homePage.clickOnSignin();
    signInPage.loginWithValidCredentials();
    mainPage.checkProfileLinkIsVisible();
    mainPage.checkProfileLinkContainsDefaultText();
  })


  it('Check logout', () => {
    homePage.clickOnSignin();
    signInPage.loginWithValidCredentials();
    mainPage.clickOnSettingsLink();
    settingsPage.clickOnLogoutBtn();
    homePage.signInLinkIsVisible();
  })

  it('Create new article', () => {
    homePage.clickOnSignin();
    signInPage.loginWithValidCredentials();
    mainPage.clickOnNewArticleLink();
    let title = newArticlePage.enterRandomTextToArticleTitleField();
    let description = newArticlePage.enterRandomTextToWhatThisArticleAboutField();
    let body = newArticlePage.enterRandomTextToWriteYourArticleField();
    newArticlePage.enterRandomTextToEnterTagsField();
    newArticlePage.clickOnPublishArticleBtn();
    articlePage.elements.titleHeading().should('have.text', title)
    articlePage.elements.descriptionHeading().should('have.text', description)
    articlePage.elements.bodyHeading().should('have.text', body)
  })

  it('Delete article', () => {
    homePage.clickOnSignin();
    signInPage.loginWithValidCredentials();
    mainPage.clickOnNewArticleLink();
    let title = newArticlePage.enterRandomTextToArticleTitleField();
    newArticlePage.enterRandomTextToWhatThisArticleAboutField();
    newArticlePage.enterRandomTextToWriteYourArticleField();
    newArticlePage.enterRandomTextToEnterTagsField();
    newArticlePage.clickOnPublishArticleBtn();
    articlePage.clickOnDeleteArticleBtn();
    mainPage.checkSideBarIsVisible();
    mainPage.clickOnProfileLink();
    myArticlesPage.elements.firstArticleHeader().first().should('be.visible')
    myArticlesPage.elements.firstArticleHeader().first().should('not.have.text', title)
  })

  it('Check that user is redirected to sign up page when liking a post', () => {
    homePage.clickOnLikeBtn();
    signUpPage.checkAllElementsAreVisible();
  })

  it('Sign up a new user', () => {
    homePage.clickOnSignUpLink();
    let name = signUpPage.signUpWithValidCredentials();
    mainPage.checkProfileLinkContainsText(name)
  })


  it('Edit article', () => {
    homePage.clickOnSignin();
    signInPage.loginWithValidCredentials();
    mainPage.clickOnProfileLink();
    myArticlesPage.clickOnFirstArticleHeader();
    articlePage.clickOnEditArticleBtn();
    let title = newArticlePage.enterRandomTextToArticleTitleField();
    newArticlePage.clickOnPublishArticleBtn();
    articlePage.elements.titleHeading().should('have.text', title)
  })



})