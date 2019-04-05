import { browser, by, element } from 'protractor';

export class MessagePage {
    userName: string = 'mortadelo';
    password: string = 'elSupereselnumero1!';

    login() {
        browser.get('/');
        element(by.css('.login-select')).click();
        //element(by.css('???')).click(); Get the provider
        element(by.css('#btn-go')).click();
        element(by.css('#username')).sendKeys(this.userName);
        element(by.css('#password')).sendKeys(this.password);
        element(by.css('#login')).click();
        return browser.get('/chat');
    }

    writeMessage(msg: string) {
        element(by.css('.chatInput')).sendKeys(msg);
    }

    clickSend() {
        element(by.css('.chatButton')).click();
    }

    getMessageText() {
        return element(by.css('.messageContent')).getText();
    }
}