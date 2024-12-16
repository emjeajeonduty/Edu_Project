import 'cypress-xpath';

const URL = "https://magento.softwaretestingboard.com/";
const loginMenu = ".header.panel [href='https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/']";
//assertion
const assertLogo = "[src='https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg']";
const assertFailMessage = "[data-bind='html: $parent.prepareMessageForHtml(message.text)']";
const s_forgotEmail = "[data-bind='html: $parent.prepareMessageForHtml(message.text)']"
//Login
const lp_emailField = "#email";
const lp_pwField = "[name='login[password]']";
const lp_signInBtn = ".login[name='send'] > span";
const lp_forgotBtn = ".remind > span";
//Forgot
const fp_emailField = "#email_address";
const fp_forgotBtn = ".submit";



class data {
    //visitUrl
    static visitURL(){
        cy.visit(URL);
    }
    
    //assertion
    static assertionLogo(){
        cy.get(assertLogo).should('be.visible');
    }
    static assertionFailed(){
        cy.get(assertFailMessage).should('be.visible');
    }

    static assertionForgot_s(){
        cy.get(s_forgotEmail).should('be.visible');
    }

    //LoginMenu
    static goToLoginPage(){
        cy.get(loginMenu).click();
    }
    //uname & password
    static typeEmail(email){
        cy.get(lp_emailField).type(email);
    }
    static typePwd(password){
        cy.get(lp_pwField).type(password);
    }

    //ForgotMenu
    static goToLoginPage(){
        cy.get(loginMenu).click();
    }

    //signIn & forgot menu
    static signIn(){
        cy.get(lp_signInBtn).click();
    }
    static forgotPwd(){
        cy.get(lp_forgotBtn).click();
    }
    //email type
    static typeEmail(email){
        cy.get(fp_emailField).type(email);
    }
    //
    static sbmt_forgotPwd(){
        cy.get(fp_forgotBtn).click();
    }

}

export default data;