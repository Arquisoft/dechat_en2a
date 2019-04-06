import { browser, by, element } from 'protractor';

export class MessagePage {
    userName: string = 'mortadelo';
    password: string = 'elSupereselnumero1!';

    login() {
        browser.get('/');
        element(by.css('.login-select')).click();
        element(by.xpath('(//div[@class="provider"])[2]')).click();
        element(by.css('#btn-go')).click().then(() => browser.sleep(1000));
        browser.driver.findElement(by.id('username')).sendKeys(this.userName);
        browser.driver.findElement(by.id('password')).sendKeys(this.password);
        browser.driver.findElement(by.id('login')).click();
        return browser.get('/chat');
    }

    writeMessage(msg: string) {
        element(by.css('.chatInput')).sendKeys(msg);
    }

    clickSend() {
        element(by.id('send')).click();//.then(() => browser.sleep(1000));
    }

    getMessageText() {
        return browser.driver.findElement(by.css('.messageContent')).getText();
    }
}