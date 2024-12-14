const URL = 'https://fitbybeat.com/';
const el_calculator = '.qodef-bmic-form-holder > .qodef-section-title-holder > .qodef-section-title';
const el_height = '.qodef-grid-row > :nth-child(1) > input';
const el_weight = '.qodef-grid-row > :nth-child(2) > input';
const el_age = '.qodef-grid-row > :nth-child(3) > input';
const el_sex = '.qodef-grid-row > :nth-child(4) > select';
const el_activity = '.qodef-grid-row > :nth-child(5) > select';
const btn_calculate = '.qodef-grid-row > :nth-child(6) > button';
const el_result = '.qodef-bmic-notification-text';

class data {
    static visitURL(){
        cy.visit(URL);
        cy.get('.qodef-mobile-logo-wrapper > a > img').should('be.visible');
    }

    static scrollToCalculator(){
        cy.get(el_calculator).scrollIntoView({easing:'linear', duration:350});
    }
    
    static inputHeight(height){
        cy.get(el_height).type(height);
    }

    static inputWeight(weight){
        cy.get(el_weight).type(weight);
    }

    static inputAge(age){
        cy.get(el_age).type(age);
    }

    static selectSex(sexType){
        cy.get(el_sex).select(sexType, { force: true })
    }

    static selectActivity(activity){
        cy.get(el_activity).select(activity, { force: true })
    }

    static clickButtonCalculate(){
        cy.get(btn_calculate).click();
    }
    static getResult(){
        cy.get(el_result).should('be.visible').and('contain','Your BMI')
    }
}

export default data;