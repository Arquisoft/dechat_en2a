Feature: Go to permissions
  Display correctly the permissions page

  Scenario: Home Page and Permissions Page
    Given I open the app and I am not logged in
    When I navigate to the permissions page
    Then I should see the permissions' page components