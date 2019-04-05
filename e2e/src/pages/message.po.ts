import { browser, by, element } from 'protractor';

export class MessagePage {
    userName: string = 'mortadelo';
    password: string = 'elSupereselnumero1!';

    login() {
        browser.get('/');
        element(by.css('.login-select')).click();
        element(by.xpath('(//div[@class="provider"])[2]')).click();
        element(by.css('#btn-go')).click();
        //this.waitForLoginPage(); //times out
        element(by.css('#username')).sendKeys(this.userName);
        element(by.css('#password')).sendKeys(this.password);
        element(by.css('#login')).click();
        return browser.get('/chat');
    }

    waitForLoginPage() {
        return browser.wait(() => {
            browser.isElementPresent(by.css('#username'));
        });
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