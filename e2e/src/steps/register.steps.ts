import {Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { RegisterPage } from '../pages/register.po';

let page: RegisterPage;

Before(() => {
    page = new RegisterPage();
});

Given(/^I am not logged in$/, async () => {
    await page.goToHomePage();
});

When(/^I try to register$/, async () => {
    await page.clickRegister();
    await page.selectSC(); 
});

Then(/^I see the register page$/, async () => {
    expect(await page.getRegisterText()).to.equal("Welcome to the Solid Prototype");
});