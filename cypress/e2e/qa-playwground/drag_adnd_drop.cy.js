describe("Check corresponding spots", () => {
    beforeEach(() => {
        cy.visit('apps/sortable-list/');
    });

    it('First attempt', () => {
        cy.get('button#check').click();
        cy.get('ul#draggable-list li').each(item => {
            cy.wrap(item).should('have.class', 'wrong').then(hasClass => {
                cy.wrap(item).find('div.draggable i')
            });
        });
    });
});
