Feature: Login feature

    As a user I want to login to app

    # Background: Open browser
    #     Given I open the url

    @smoke 
    Scenario: check valid login
        When I enter username
        And I enter password
        And I click login
        Then I should see dashboard
        And I capture screenshot

    @regression
    Scenario: check login with data args
        When I type username as "Admin"
        And I type password as "admin123"
        And I click login
        Then I should see "Dashboard"

    @regression
    Scenario Outline: check login with diff sets of data
        When I type username as "<username>"
        And I type password as "<password>"
        And I click login
        Then I should see textlabel "<message>"

        Examples:
            | username | password | message             |
            | Admin    | admin123 | Dashboard           |
            | Admin    | admin124 | Invalid credentials |
            | Admin123 | admin123 | Invalid credentials |
            | Admin    | 12233    | Invalid credentials |

    @regression
    Scenario: exceptions for non-implementations
        Then Create new step defs
        And implement new stepdefinition


    @regression
    Scenario: check datatable
        When I enter username and password
            | username | password |
            | Admin    | admin123 |
        Then I should see textlabel "Dashboard"