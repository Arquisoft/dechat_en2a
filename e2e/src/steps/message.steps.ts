import {Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { MessagePage } from '../pages/message.po';

let page: MessagePage;
let msg: string = "Message for cucumber testing";

Before(() => {
    page = new MessagePage();
});

Given(/^I am logged in$/, {timeout: 10000}, async () => {
    await page.login();
});

When(/^I select a friend$/, async () => {
    await page.selectFriend();
});

When(/^I write a message$/, async () => {
    await page.writeMessage(msg);
});

When(/^I click send$/, async () => {
    await page.clickSend();
});

Then(/^I can see the new message$/, async () => {
    expect(await page.isMessageSent()).to.equal(msg);
});