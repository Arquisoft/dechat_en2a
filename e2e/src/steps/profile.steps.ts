import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import {ProfilePage} from '../pages/profile.po';
import {LoginPage} from '../pages/login.po';

let page: AppPage;
let profilePage: ProfilePage;
let login: LoginPage;


Before(() => {
    page = new AppPage();
    profilePage = new ProfilePage();
    login = new LoginPage();
});

Given(/^I open the app and I am logged in$/, async () => {
    await page.navigateTo();
    await login.selectSolidCommunity();
    await login.fillUpForm();
});

When(/^I navigate to the profile page$/, async () => {
    await profilePage.navigateTo();

});

Then(/^I should see the profile´s components$/, async () => {
    expect(await profilePage.getH1()).to.equal('Profile');
});
