import { browser, by, element } from 'protractor';

export class RegisterPage {
    async clickDc() {
        return await browser.driver.findElement(by.css('#logout')).click().then(() => browser.sleep(1000));
    }

    async goToHomePage() {
        return await browser.driver.get('localhost:4200');
    }

    async clickRegister() {
        return await browser.driver.findElement(by.css('#btn-register')).click();
    }

    async selectSC() {
        return await browser.driver.findElement(by.xpath('(//div/a[@class="provider-register"])[2]')).click()
        .then(() => browser.sleep(1000));
    }

    async getRegisterText(){
        return await browser.driver.findElement(by.tagName('h1')).getText();
    }
}