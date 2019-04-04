import {browser, by, element, until} from 'protractor';
import elementsLocated = until.elementsLocated;
const userName1 = 'mortadelo';
const password1 = 'elSupereselnumero1!';
export class MyLoginPo {



    fillform() {
        browser.element(by.xpath('input')).click();
        browser.element(by.xpath('input')).sendKeys('Solid Community');
        browser.element(by.partialLinkText('Community')).click();
        browser.element(by.id('btn-go')).click();

        browser.element(by.id('username')).sendKeys(userName1);
        browser.element(by.id('password')).sendKeys(password1);
        browser.element(by.id('login')).click();
    }
}
