Feature: Register a new account
    A new user would try to Register

    Scenario: User goes through the registration process
        Given I am not logged in
        When I try to register
        Then I see the register page