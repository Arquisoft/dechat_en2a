import { browser, by, element } from 'protractor';

export class ChatPage {
    userName: string = 'mortadelo';
    password: string = 'elSupereselnumero1!';

    async signout() {
        return await browser.driver.findElement(by.css('#logout')).click().then(() => browser.sleep(2000));
    }

    async solidLogin() {
        await browser.driver.get('localhost:4200');
        await element(by.css('.login-select')).click();
        await element(by.xpath('(//div[@class="provider"])[2]')).click();
        await element(by.css('#btn-go')).click().then(() => browser.sleep(2000));
        await browser.driver.findElement(by.id('username')).sendKeys(this.userName);
        await browser.driver.findElement(by.id('password')).sendKeys(this.password);
        await browser.driver.findElement(by.id('login')).click();
        return await browser.driver.get('localhost:4200/chat').then(() => browser.sleep(2000));
    }

    async selectChat() {
        return await browser.driver.findElement(by.tagName('app-chat-item')).click();
    }

    async writeMessage(msg: string) {
        return await browser.driver.findElement(by.css('.chatInput')).sendKeys(msg);
    }

    async clickSend() {
        return await browser.driver.findElement(by.id('send')).click().then(() => browser.sleep(1000));
    }

    async getMessageText() {
        return await browser.driver.findElement(by.css('.messageContent')).getText();
    }

    async clickDelete() {
        return await browser.driver.findElement(by.css('#del')).click();
    }

    async getNumberOfMessages() {
        var messages = await browser.driver.findElements(by.css('.messageContent'));
        return messages.length;
    }
}