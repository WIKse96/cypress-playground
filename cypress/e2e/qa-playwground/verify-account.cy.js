describe('Verify your account by typing', ()=>{
    beforeEach(()=>{
        cy.visit('apps/verify-account/')
    })

it('Check typing 1', ()=>{
    cy.get('.code-container input').each(input =>{
        cy.wrap(input).type('1')
        
    })
    //Does success exist
    cy.get('.info.success').should('not.exist')
})
//typing 9. Correct test case
it.only('Check typing 9', ()=>{
    cy.get('.code-container input').each(input =>{
        cy.wrap(input).type('9')
        
    })
    //Does success exist
    cy.get('.info.success').should('exist').should('contain.text', 'Success')
})
})