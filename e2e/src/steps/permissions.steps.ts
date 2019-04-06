import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { LoginPage } from '../pages/login.po';
import { PermissionsPage } from '../pages/permissions.po';

let page: LoginPage;
let permissionsPage: PermissionsPage;
const message = 'Permissions';

Before(() => {
    page = new LoginPage();
    permissionsPage = new PermissionsPage();
});

Given(/^I open the app and I am not logged in$/, async () => {
    await page.navigateTo();
});

When(/^I navigate to the permissions page$/, async () => {
    await permissionsPage.navigateTo();
});

Then(/^I should see the permissions' page components$/, async () => {
    expect(await permissionsPage.getH1()).to.equal(message);
});
