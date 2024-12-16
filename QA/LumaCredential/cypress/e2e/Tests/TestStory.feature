Feature: Automation Credential Test on Luma
    As a user, I want to test the login page.

    # Scenario Outline: The user want to login with '<Type>'
    #     Given the user visit the Luma website
    #     When the user clicks on the login menu
    #     And the user input email '<Email>'
    #     And the user input password '<Password>'
    #     And the user clicks the login button
    #     Then the user should see the homepage / error message for '<Expected>' login

    #     Examples:
    #         | Type                             | Expected | Email                | Password        |
    #         | Valid Email & Valid Password     | Success  | qaedutest@gmail.com  | cobaTesting@123 |
    #         | Valid Email & Invalid Password   | Failed   | qaedutest@gmail.com  | pwSalah123      |
    #         | Invalid Email & Valid Password   | Failed   | unSalah123@gmail.com | cobaTesting@123 |
    #         | Invalid Email & Invalid Password | Failed   | unSalah123@gmail.com | pwSalah123      |

    Scenario Outline: The user want to forgot account with '<Type>'
        Given the user visit the Luma website
        When the user clicks on the login menu
        And the user clicks on the 'Forgot Your Password?' menu
        And the user input email '<Email>'
        And the user clicks the 'Reset My Password' button
        Then the user should see the result for '<Expected>' forgot account
        Examples:
            | Type                      | Expected | Email                |
            | Forgot registered email   | Success  | qaedutest@gmail.com  |
            | Forgot unregistered email | Failed   | unSalah123@gmail.com |