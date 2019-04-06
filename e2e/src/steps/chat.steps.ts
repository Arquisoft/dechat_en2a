import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { LoginPage } from '../pages/login.po';
import { ChatPage } from '../pages/chat.po';

let page: LoginPage;
let chatPage: ChatPage;
const message = 'Write message here...';

Before(() => {
    page = new LoginPage();
    chatPage = new ChatPage();
});

When(/^I succesfully introduce my data and register$/, async () => {
    await page.fillUpForm();
});

Then(/^I should see the chat window$/, async () => {
    expect(await chatPage.getProof()).to.equal(message);
});
