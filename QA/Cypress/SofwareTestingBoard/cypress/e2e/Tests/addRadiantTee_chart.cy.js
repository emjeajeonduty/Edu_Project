import data from '../Pages/dataPages';
/// <reference types="cypress" />

describe('Accessing Web', () => {
    it('Visiting URL', () => {
        data.visitURL()
    });
});