Feature: Go to profile
  Display correctly the profile page

  Scenario: Home Page and Profile Page
    Given I open the app and I am not logged in
    When I navigate to the profile page
    Then I should see the profile´s page components