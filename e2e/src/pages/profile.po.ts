import { browser, by, element, WebDriver } from 'protractor';

export class ProfilePage {

    navigateTo() {
        browser.ignoreSynchronization = true;
        var profile = element(by.xpath('/html/body/app-root/div/div/app-navbar/div/div/a[2]'));
        browser.actions().mouseMove(profile).click();
        return browser.get('/profile');
    }

    getH1() {
        return element(by.css('h1')).getText();
    }

}
