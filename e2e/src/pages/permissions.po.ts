import { browser, by, element, ExpectedConditions } from 'protractor';

export class PermissionsPage {

    ec = ExpectedConditions;

    navigateTo() {
        browser.ignoreSynchronization = true;
        browser.wait(this.ec.visibilityOf(element(by.className('chatHeaderWrapper'))));
        element(by.xpath('a[starts-with(@href, \'/permissions\')]')).click();
        return browser.get('/permissions');
    }

    getH1() {
        return element(by.css('h2')).getText();
    }

}
