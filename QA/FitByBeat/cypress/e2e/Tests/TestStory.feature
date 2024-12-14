Feature: Automation BMI Calculate on FitByBeat
    As a user, I want to calculate my BMI on the FitByBeat website.

    Background: The user is access to the fitbybeat website
        Given the user visit fitbybeat website

    Scenario Outline: Calculate BMI for '<Sex>'
        When the user scrolling to BMI calculator form
        And the user input valid values for Height, Weight, Age
        And the user select their sex as '<Sex>'
        And the user select their activity factor '<Activity>'
        And the user clicks on the calculate button
        Then the user should see the BMI and BMR result

        Examples:
            | Sex    | Activity |
            | male   | light    |
            | female | light    |