Feature: Add a friend on your profile
    GO to the profile page and ADD FRIEND

    Scenario: I go to my profile page and add a friend
        Given: I am logged in and viewing my profile
        When: I provide the URI of another Solid user in the WebID and click ADD FRIEND
        Then: I see that friend in my chat list