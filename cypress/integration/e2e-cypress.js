describe('Cowboy Horoscope', function () {

    it('should have the right title', () => {
        cy.visit('http://localhost:3000');
        cy.title().should('include', 'Cowboy Horoscope')
    });

    context('Horoscope', function () {
        beforeEach(function () {
            cy.visit('http://localhost:3000');
        });

        it('does not show horoscope on page load', () => {
            cy.get('[data-test="horoscope"]').should('be', '')
        });

        it('reveals horoscope', () => {
            cy.get('.Select').first().click();
            cy.get('#react-select-2--option-2').click();
            cy.get('.Select').eq(1).click();
            cy.get('#react-select-3--option-3').click();
            cy.get('[data-test="reveal-horoscope"]').click();

            cy.get('[data-test="horoscope"]').should('not.be', '');
        });
    });
});
