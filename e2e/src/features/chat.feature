Feature: Send a message
    Go to the chat view and send a message

    Scenario: I login and send a message
        Given Im not logged in
        When I log in
        When I select a friend
        When I write a message
        When I click send
        Then I can see the new message