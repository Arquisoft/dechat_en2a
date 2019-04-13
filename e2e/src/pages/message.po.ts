import { browser, by, element } from 'protractor';

export class MessagePage {
    userName: string = 'mortadelo';
    password: string = 'elSupereselnumero1!';

    async login() {
        await browser.get('/');
        await element(by.css('.login-select')).click();
        await element(by.xpath('(//div[@class="provider"])[2]')).click();
        await element(by.css('#btn-go')).click().then(() => browser.sleep(1000));
        await browser.driver.findElement(by.id('username')).sendKeys(this.userName);
        await browser.driver.findElement(by.id('password')).sendKeys(this.password);
        await browser.driver.findElement(by.id('login')).click();
        return browser.get('/chat');
    }

    async selectFriend() {
        await element(by.tagName('app-friend-item')).click();
    }

    async writeMessage(msg: string) {
        await element(by.css('.chatInput')).sendKeys(msg);
    }

    async clickSend() {
        await browser.driver.findElement(by.id('send')).click();
    }

    async isMessageSent() {
        return (await browser.driver.findElement(by.css('.messageContent')).isDisplayed());
    }
}