import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import { LoginPage } from '../pages/login.po';

let page: LoginPage;

Before(() => {
    page = new LoginPage();
});

Given(/^ I open the app and I am not logged in$/, async () => {
    await page.navigateTo();
});

When(/^I enter credentials$/, async () => {
    await page.openCombobox();
    await page.selectSolidCommunity();
    await page.pressButtonGo();
    
    await page.fillUpForm();
});

Then(/^I can use the chat$/, async () => {
    expect(await page.getChatInput().getAttribute('placeholder')).to.equal('Write message here...');
});
