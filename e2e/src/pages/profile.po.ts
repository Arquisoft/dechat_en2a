import { browser, by, element } from 'protractor';

export class ProfilePage {

    navigateTo() {
        element(by.xpath('a[starts-with(@href, \'/profile\')]')).click();
        return browser.get('/profile');
    }

    getH1() {
        return element(by.css('h1')).getText();
    }

}
