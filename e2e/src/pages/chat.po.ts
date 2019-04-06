import { browser, by, element } from 'protractor';

export class ChatPage {

    navigateTo() {
        element(by.xpath('a[starts-with(@href, \'/chat\')]')).click();
        return browser.get('/chat');
    }

    getProof() {
        return element(by.className('chatInput ng-untouched ng-pristine ng-valid'))
        .getText();
    }

}