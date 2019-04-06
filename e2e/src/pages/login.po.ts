import { browser, by, element } from 'protractor';

export class LoginPage {
    //readonly userName = 'mortadelo';
    //readonly password = 'elSupereselnumero1!';

    userName = 'mortadelo';
    password = 'elSupereselnumero1!';

    constructor(name?: string, pass?: string){
        this.userName = name;
        this.password = pass;
    }

    navigateTo() {
        browser.get('/');
        element(by.className('fas fa-sign-out-alt')).click();
        return browser.get('/');
    }

    openCombobox() {
        return element(by.className('ng-select-container')).click();
    }

    selectSolidCommunity() {
        this.openCombobox();
        var comboBox = element(by.className('ng-dropdown-panel login-select ng-select-bottom'));
        var options = comboBox.findElements(by.tagName('option')).
        then(function(options) {
            options[1].click();
        });
        //Check it it is the correct option
        expect(element(by.class('ng-option ng-option-marked')).getText()).toEqual('Solid Community');
        this.clickGoButton();
    }


    clickGoButton() {
        return element(by.id('btn-go')).click();
    }

    fillUpForm() {
        element(by.id('username')).sendKeys(this.userName);
        element(by.id('password')).sendKeys(this.password);
        this.clickLoginButton();
    }

    clickLoginButton() {
        element(by.id('login')).click();
    }

    getChatInput() {
        return element(by.className('logo')).getText();
    }
}
