import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import {ProfilePage} from '../pages/profile.po';
import {MyLoginPo} from '../pages/myLogin.po';

let page: AppPage;
let profilePage: ProfilePage;
let loginPage: MyLoginPo;


Before(() => {
    page = new AppPage();
    profilePage = new ProfilePage();
    loginPage = new MyLoginPo();
});

Given(/^I open the app and I am logged in$/, async () => {
    await page.navigateTo();
    await loginPage.fillform();
});

When(/^I navigate to the profile page$/, async () => {
    await profilePage.navigateTo();

});

Then(/^I should see the profile´s components$/, async () => {
    expect(await profilePage.getH1()).to.equal('Profile');
});
