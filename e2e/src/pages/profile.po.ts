import { browser, by, element, ExpectedConditions } from 'protractor';

export class ProfilePage {

    ec = ExpectedConditions;

    navigateTo() {
        browser.ignoreSynchronization = true;
        browser.wait(this.ec.visibilityOf(element(by.className('chatHeaderWrapper'))));
        element(by.xpath('a[starts-with(@href, \'/profile\')]')).click();
        return browser.get('/profile');
    }

    getH1() {
        return element(by.css('h1')).getText();
    }

}
