import { browser, by, element } from 'protractor';

export class RegisterPage {
    clickDc() {
        element(by.css('.profile-menu')).click().then(() => browser.sleep(1000));
    }

    goToHomePage() {
        browser.get('/');
    }

    clickRegister() {
        element(by.css('#btn-register')).click();
    }

    selectSC() {
        element(by.xpath('(//div/a[@class="provider-register"])[2]')).click()
        .then(() => browser.sleep(1000));
    }

    getRegisterText(){
        return browser.driver.findElement(by.tagName('h1')).getText();
    }
}