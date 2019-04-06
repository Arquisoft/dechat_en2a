import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { LoginPage } from '../pages/login.po';

let page: LoginPage;
const welcomeMsg = 'DE-CHAT';

Before(() => {
    page = new LoginPage();
});

Given(/^I open the app and I am not logged in$/, async () => {
    await page.navigateTo();
});

When(/^I select Solid Community as ID Provider and click GO$/, async () => {
    await page.selectSolidCommunity();
});

When(/^I enter the correct credentials and click login$/, async () => {
    await page.fillUpForm();
});

Then(/^I can use the chat$/, async () => {
    expect(await page.getChatInput()).to.equal(welcomeMsg);
});
