require('cypress-xpath');

const url = "https://magento.softwaretestingboard.com/";
const logo = "//a[@class='logo']//img[1]"
const product_RadiantTee = "//a[@title='Radiant Tee']"


class data {
    static visitURL(){
        cy.visit(url);
        cy.xpath(logo).should('be.visible')
    }
}

export default data;