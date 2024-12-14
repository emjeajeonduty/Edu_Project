const URL = "https://sso.garena.com/universal/login?app_id=10100&redirect_uri=https%3A%2F%2Faccount.garena.com%2F&locale=id-ID";
const v_username = "qaedutest";
const v_password = "cobaTesting@123";
const inv_username = "unSalah123";
const inv_password = "pwSalah123";

class data {
    static visitURL(){
        cy.visit(URL);
    }

    static login(username, password){
        cy.get
    }

}

export default data;