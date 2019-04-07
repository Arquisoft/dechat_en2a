import { browser, by, element, ExpectedConditions } from 'protractor';

export class LoginPage {
    //readonly userName = 'mortadelo';
    //readonly password = 'elSupereselnumero1!';

    userName = 'mortadelo';
    password = 'elSupereselnumero1!';
    ec = ExpectedConditions;

    constructor(name?: string, pass?: string){
        this.userName = name;
        this.password = pass;
        browser.ignoreSynchronization = true;
    }

    navigateTo() {
        browser.get('/');
        element(by.className('fas fa-sign-out-alt')).click();
        return browser.get('/');
    }

    private openCombobox() {
        browser.wait(this.ec.visibilityOf(element(by.css('h1'))), 5000);
        return element(by.className('ng-select-container')).click();
    }

    selectSolidCommunity() {
        this.openCombobox();
        element(by.cssContainingText('.ng-option', 'Solid Community')).click();
        this.clickGoButton();
    }


    private clickGoButton() {
        return element(by.id('btn-go')).click();
    }

    fillUpForm() {
        browser.wait(this.ec.visibilityOf(element(by.css('h4'))));
        element(by.xpath('//*[@id="username"]'))
        .sendKeys(this.userName);
        element(by.xpath('//*[@id="password"]'))
        .sendKeys(this.password);
        this.clickLoginButton();
    }

    private async clickLoginButton() {
        await element(by.id('login')).click();
    }

    getChatInput() {
        return element(by.className('logo')).getText();
    }
}
