import { browser, by, element } from 'protractor';

export class RegisterPage {
    async clickDc() {
        await element(by.css('.profile-menu')).click().then(() => browser.sleep(1000));
    }

    async goToHomePage() {
        await browser.get('/');
    }

    async clickRegister() {
        await element(by.css('#btn-register')).click();
    }

    async selectSC() {
        await element(by.xpath('(//div/a[@class="provider-register"])[2]')).click()
        .then(() => browser.sleep(1000));
    }

    async getRegisterText(){
        return await browser.driver.findElement(by.tagName('h1')).getText();
    }
}