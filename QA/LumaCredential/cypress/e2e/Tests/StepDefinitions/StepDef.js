/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import data from "../../Pages/TestPage";

//Given the user visit the Garena Login Page
Given("the user visit the Garena Login Page",()=>{
    data.visitURL();
})

// And the user input username '<Username>' and password '<Password>'
When("the user input username {string} and password {string}",(username, password)=>{
    data.typeUn(username);
    data.typePw(password);
})

// And the user clicks the login button
When("the user clicks the login button",()=>{
    data.login();
})

// Then the user should see the homepage / error message for '<Expected>' login
Then("the user should see the homepage / error message for {string} login",(expected)=>{
    if(expected==='Success'){
        data.sLogin()
    }else{
        data.eLogin();
    }
})