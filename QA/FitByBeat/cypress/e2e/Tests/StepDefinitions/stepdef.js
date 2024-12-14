/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import data from "../../Pages/testPage";

// Given the user visit fitbybeat website
Given("the user visit fitbybeat website",() =>{
    data.visitURL();
})

//----------//

// When the user scrolling to BMI calculator form
When("the user scrolling to BMI calculator form",() =>{
    data.scrollToCalculator();
})

// And the user input valid values for Height, Weight, Age
When("the user input valid values for Height, Weight, Age",() =>{
    data.inputHeight('178');
    data.inputWeight('75');
    data.inputAge('26');
})

// And the user select their sex as '<Sex>'
When("the user select their sex as {string}",(sex) =>{
    data.selectSex(sex);
})

// And the user select their activity factor '<Activity>'
When("the user select their activity factor {string}",(activity) =>{
    data.selectActivity(activity);
})

// And the user clicks on the calculate button
When("the user clicks on the calculate button",() =>{
    data.clickButtonCalculate();
})

// Then the user should see the BMI and BMR result
Then("the user should see the BMI and BMR result",() =>{
    data.getResult();
})

