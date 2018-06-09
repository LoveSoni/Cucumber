Feature: Free CRM Login feature
Scenario: Fre CRM Login test scenario

Given User is on LoginPage
When title of LoginPage is FreeCrm
Then user can enter details
Then user can click on the login button
Then user on home page

Scenario: create new contact
Given user on the home page
When user move over on the contact
Then user click on the new contact
Then user enter first name and lastname
Then user click on Save button
Then verify new contact created
Then close browser