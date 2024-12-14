Feature: Automation Credential Test on Garena
    As a user, I want to test the login page.

    Background: The user is access to the Garena website
        Given the user visit the Garena Login Page

    Scenario Outline: Credential Test for '<Type>'
        When the user input '<Type>'
        And the user input username '<Username>' and password '<Password>'
        And the user clicks the login button
        And the user should see the homepage

        Examples:
            | Type                                    | Expected | Username   | Password        |
            | Valid Username & Valid Password         | Success  | qaedutest  | cobaTesting@123 |
            | Valid Username & Invalid Password       | Failed   | qaedutest  | pwSalah123      |
            | Invalid Username & Valid Password       | Failed   | unSalah123 | cobaTesting@123 |
            | Invalid Username & Invalid Password     | Failed   | unSalah123 | pwSalah123      |
            | Forgot registered Username & Password   | Success  | qaedutest  |                 |
            | Forgot unregistered Username & Password | Failed   | unSalah123 |                 |

