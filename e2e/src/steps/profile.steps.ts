import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import {ProfilePage} from '../pages/profile.po';

let page: AppPage;
let profilePage: ProfilePage;


Before(() => {
    page = new AppPage();
    profilePage = new ProfilePage();
});

When(/^I navigate to the profile page$/, async () => {
    await profilePage.navigateTo();

});

Then(/^I should see the profile´s page components$/, async () => {
    expect(await profilePage.getH1()).to.equal('Profile');
});
