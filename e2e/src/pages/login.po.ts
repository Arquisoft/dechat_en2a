import { browser, by, element } from 'protractor';

export class LoginPage{
    readonly userName = 'mortadelo'
    readonly password = 'elSupereselnumero1!'
    navigateTo() {
        browser.get('/');
        element(by.className('fas fa-sign-out-alt')).click();
        return browser.get('/');
    }

    openCombobox(){
        return element(by.partialLinkText('Provider')).click();
    }

    selectSolidCommunity(){
        return element(by.partialLinkText('Community')).click();
    }

    pressButtonGo(){
        return element(by.buttonText('GO')).click();
    }

    fillUpForm(){
        element(by.id('username')).sendKeys(this.userName);
        element(by.id('password')).sendKeys(this.password);
        element(by.id('login')).click();
        
    }

    getChatInput(){
        return element(by.className('chatInput ng-pristine ng-valid ng-touched'));
    }
}