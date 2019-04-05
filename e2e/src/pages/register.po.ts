import { browser, by, element } from 'protractor';

export class RegisterPage {
    goToHomePage() {
        return browser.get('/');
    }

    clickRegister(){
        return element(by.css('#btn-register')).click();
    }

    selectInrupt() {
        return element(by.xpath('(//div/a[@class="provider-register"])[1]')).click();
    }

    getRegisterText(){
        return element(by.xpath('//div[@class="header-bar"]/p')).getText();
    }
}