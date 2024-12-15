import 'cypress-xpath';

const URL = "https://sso.garena.com/universal/login?app_id=10100&redirect_uri=https%3A%2F%2Faccount.garena.com%2F&locale=id-ID";
const v_username = "qaedutest";
const v_password = "cobaTesting@123";
const inv_username = "unSalah123";
const inv_password = "pwSalah123";
const unField = "[placeholder='Username Garena / E-Mail / Nomor Handphone']";
const pwField = "[placeholder='Password']";
const lupaPw = ".forgot";
const btnLogin = ".primary";
const logo = ".hd-logo";
const erMessage = ".message";

class data {
    static visitURL(){
        cy.visit(URL);
    }

    static typeUn(username){
        cy.get(unField).type(username);
    }

    static typePw(password){
        cy.get(pwField).type(password);
    }

    static lupaPwForm(){
        cy.get(lupaPw).click();
    }

    static login(){
        cy.get(btnLogin).click();
    }

    static sLogin(){
        cy.get(logo).should('be.visible');
    }
    static eLogin(){
        cy.get(erMessage).should('be.visible');
    }

}

export default data;