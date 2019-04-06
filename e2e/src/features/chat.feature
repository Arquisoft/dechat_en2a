Feature: Go to chat window
    Display correctly the chat page

Scenario: Log in and go to chat
    Given I open the app and I am not logged in
    Given I succesfully introduce my data and register
    Then I should see the chat window