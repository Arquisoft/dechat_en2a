Feature: Go to chat window
    Display correctly the chat page

Scenario: Log in and go to chat
    Given I open the app and I log in
    Given I succesfully register
    Then I should see the chat window