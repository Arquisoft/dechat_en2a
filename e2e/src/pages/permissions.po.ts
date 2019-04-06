import { browser, by, element } from 'protractor';

export class PermissionsPage {

    navigateTo() {
        element(by.xpath('a[starts-with(@href, \'/permissions\')]')).click();
        return browser.get('/permissions');
    }

    getH1() {
        return element(by.css('h2')).getText();
    }

}
