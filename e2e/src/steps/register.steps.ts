import {Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { RegisterPage } from '../pages/register.po';

let page: RegisterPage;

Before(() => {
    page = new RegisterPage();
});

Given(/^I am not logged in$/, async () => {
    page.clickDc();
});

When(/^I go to the home page$/, async () => {
    page.goToHomePage();
});

When(/^I try to register$/, async () => {
    page.clickRegister();
    page.selectSC(); 
});

Then(/^I see the register page$/, async () => {
    page.getRegisterText().then((msg) => expect(msg).to.equal("Welcome to the Solid Prototype"));
});