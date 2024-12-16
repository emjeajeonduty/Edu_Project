/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import data from "../../Pages/TestPage";


//LoginTest
// Given the user visit the Luma website
Given("the user visit the Luma website",() =>{
    data.visitURL();
    data.assertionLogo();
})

// When the user clicks on the login menu
When("the user clicks on the login menu",() =>{
    data.goToLoginPage();
})

// And the user input mail '<Email>'
When("the user input email {string}",(email) =>{
    data.typeEmail(email);
})

// And the user input password '<Password>'
When("the user input password {string}",(password) =>{
    data.typePwd(password);
})

// And the user clicks the login button
When("the user clicks the login button",() =>{
    data.signIn();
})

// Then the user should see the homepage / error message for '<Expected>' login
Then("the user should see the homepage / error message for {string} login",(expected) =>{
    if(expected==='Success'){
        data.assertionLogo();
    }else{
        data.assertionFailed();
    }
})

//----------//
//ForgotTest
// Given the user visit the Luma website
Given("the user visit the Luma website",() =>{
    data.visitURL();
    data.assertionLogo();
})

// When the user clicks on the login menu
When("the user clicks on the login menu",() =>{
    data.goToLoginPage();
})

//And the user clicks on the 'Forgot Your Password?' menu
When("the user clicks on the 'Forgot Your Password?' menu",() =>{
    data.forgotPwd();
})

// And the user input email '<Email>'
When("the user input email {string}",(email) =>{
    data.typeEmail(email);
})

// And the user clicks the 'Reset My Password' button
When("the user clicks the 'Reset My Password' button",() =>{
    data.sbmt_forgotPwd();
})

// Then the user should see the result for '<Expected>' forgot account
Then("the user should see the result for {string} forgot account",(expected) =>{
    if(expected==='Success'){
        data.assertionForgot_s();
    }else{
        data.assertionForgot_s();
    }
})