Feature: Send a message
    Go to the chat view and send a message

    Scenario: I login and send a message
        Given I am logged in
        When I send a message
        Then I can see the new message