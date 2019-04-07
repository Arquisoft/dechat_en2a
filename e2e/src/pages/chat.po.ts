import { browser, by, element, ExpectedConditions } from 'protractor';

export class ChatPage {

    ec = ExpectedConditions;

    navigateTo() {
        element(by.xpath('a[starts-with(@href, \'/chat\')]')).click();
        return browser.get('/chat');
    }

    getProof() {
        browser.wait(this.ec.visibilityOf(element(by.className('logo'))));
        return element(by.xpath('/html/body/app-root/div/app-chatroom/div[2]/app-chat-form'))
        .getText();
    }

}