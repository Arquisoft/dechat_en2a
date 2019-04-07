import { browser, by, element } from 'protractor';

export class ProfilePage {
    readonly webID = 'https://thomsp.solid.community/profile/card#me'
    navigateToProfile() {
        return browser.get('/profile');
    }

    provideFriend() {
        element(by.id('webIdAdd')).sendKeys(this.webID);
        element(by.id('submit')).click();
    }

    navigateToChat() {
        return browser.get('/chat');
    }

    viewFriend() {
        return element(by.className('userList ng-pristine ng-valid ng-touched'));
    }
}