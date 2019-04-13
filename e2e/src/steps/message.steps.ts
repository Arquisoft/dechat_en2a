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

When(/^I select a friend$/, async () => {
    page.selectFriend();
});

When(/^I write a message$/, async () => {
    page.writeMessage(msg);
});

When(/^I click send$/, async () => {
    page.clickSend();
});

Then(/^I can see the new message$/, async () => {
    page.isMessageSent().then((sent) => expect(sent).to.equal(true));
});