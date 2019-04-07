Feature: Go to profile
  Display correctly the profile page

  Scenario: Home Page and Profile Page
    Given I am on the home page
    When I navigate to the profile page
    Then I should see the profile´s page components