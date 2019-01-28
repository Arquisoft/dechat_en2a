# language: en
Feature: Search users

Scenario: Search a user
Given I go to the landing page
When I search user "Pepe"
Then I obtain a 200 message
