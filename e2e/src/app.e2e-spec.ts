import { browser } from 'protractor';

describe('Page Title E2E Test', () => {

    beforeEach(() => {
        browser.get('http://localhost:4200');
    });

    it('should verify the page title', () => {

        let pageTitle = browser.getTitle();
        expect(pageTitle).toEqual('De-Chat');

    });

    it('should verify the page title manually', () => {

        // Manuelle Auflösung der Promise
        let pageTitle = browser.getTitle()
            .then(function (result) {
                return result;
            });

        expect(pageTitle).toEqual('De-Chat');

    });

});