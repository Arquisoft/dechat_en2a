import { browser, by, element } from 'protractor';

export class RegisterPage {
    goToHomePage() {
        return browser.get('/');
    }

    clickRegister(){
        return element(by.css('#btn-register')).click();
    }

    selectSC() {
        return element(by.xpath('(//div/a[@class="provider-register"])[2]')).click()
        .then(() => browser.sleep(1000));
    }

    getRegisterText(){
        return browser.driver.findElement(by.tagName('h1')).getText();
    }
}