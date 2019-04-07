import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import { LoginPage } from '../pages/login.po';
import { ProfilePage } from '../pages/friend.po'

let page: ProfilePage;

Before(() => {
    page = new ProfilePage();
});

Given(/^ I am logged in and viewing my profile$/, async () => {
    await page.navigateToProfile();
});

When(/^ I provide the URI of another Solid user in the WebID and click ADD FRIEND$/, async () => {
    await page.provideFriend();
});

Then(/^ I see that friend in my chat list$/, async () => {
    await page.navigateToChat();
    expect(await page.viewFriend()).to.equal('Thomas Perry');
});