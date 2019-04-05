Feature: Login in Solid Community
    GO to the login page and login to Solid Community

    Scenario: I enter the app and login
        Given I open the app and I am not logged in
        When I select Solid Community as ID Provider
        When I click the Go button
        When I enter the correct credentials
        When I click the log in button
        Then I can use the chat