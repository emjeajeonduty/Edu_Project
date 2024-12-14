/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import data from "../../Pages/TestPage";

//Given the user visit the Garena Login Page
Given("the user visit the Garena Login Page",()=>{
    data.visitURL();
})

//When the user input '<Type>'
When("the user input {string}",(Type)=>{

})

// And the user input username '<Username>' and password '<Password>'
When("the user input username {string} and password {string}",(username, password)=>{
    
})

// And the user clicks the login button
When("the user clicks the login button",(Type)=>{
    
})

// And the user should see the homepage
When("When the user input {string}",(Type)=>{
    
})