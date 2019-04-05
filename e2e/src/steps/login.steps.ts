import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import { LoginPage } from '../pages/login.po';

let page: LoginPage;
let welcomeMsg: 'DE-CHAT';

Before(() => {
    page = new LoginPage();
});

Given(/^I open the app and I am not logged in$/, async () => {
    await page.navigateTo();
});

When(/^I select Solid Community as ID Provider$/, async () => {
    await page.openCombobox();
    await page.selectSolidCommunity();
});

When(/^I click the Go button$/, async () => {
    await page.clickGoButton();
});

When(/^I enter the correct credentials$/, async () => {
    await page.fillUpForm();
});

When(/^I click the log in button$/, async () => {
    await page.clickLoginButton();
});

Then(/^I can use the chat$/, async () => {
    expect(await page.getChatInput()).to.equal(welcomeMsg);
});
