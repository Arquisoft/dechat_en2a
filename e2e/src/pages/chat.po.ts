import { browser, by, element, ExpectedConditions } from 'protractor';

export class ChatPage {

    ec = ExpectedConditions;

    navigateTo() {
        element(by.xpath('a[starts-with(@href, \'/chat\')]')).click();
        return browser.get('/chat');
    }

    getProof() {
        browser.wait(this.ec.visibilityOf(element(by.className('logo'))));
        element(by.className('logo'));
        return element(by.className('userListWrapper')).isDisplayed();
    }

}