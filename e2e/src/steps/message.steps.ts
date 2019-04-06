import {Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { MessagePage } from '../pages/message.po';

let page: MessagePage;
let msg: string = "Hello cucumber can you work pls";

Before(() => {
    page = new MessagePage();
});

Given(/^I am logged in$/, {timeout: 10000}, async () => {
    await page.login();
});

When(/^I send a message$/, async () => {
    await page.writeMessage(msg);
    await page.clickSend();
});

Then(/^I can see the new message$/, {timeout: 5000}, async () => {
    expect(await page.getMessageText()).to.equal(msg);
});