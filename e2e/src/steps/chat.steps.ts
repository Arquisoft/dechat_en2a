import {Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';
import { ChatPage } from '../pages/chat.po';

let page: ChatPage;
let msg: string = "Message for cucumber testing";

Before(() => {
    page = new ChatPage();
});

Given(/^Im not logged in$/, async () => {
    await page.signout();
});

When(/^I log in$/, {timeout: 10000}, async () => {
    await page.solidLogin();
});

When(/^I select a friend$/, async () => {
    await page.selectChat();
});

When(/^I write a message$/, async () => {
    await page.writeMessage(msg);
});

When(/^I click send$/, async () => {
    await page.clickSend();
});

Then(/^I can see the new message$/, async () => {
    expect(await page.getMessageText()).to.equal(msg);
});

Then(/^I can delete the message$/, async () => {
    var before = await page.getNumberOfMessages();
    await page.clickDelete();
    var after = await page.getNumberOfMessages();
    expect(before).equal(after + 1);
})