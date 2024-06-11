import 'cypress-iframe';

describe('iframe', ()=>{
    beforeEach(()=>{
        cy.visit('apps/iframe/')
    })

it('nested iframe', ()=>{
    cy.frameLoaded()
    cy.iframe("#frame1").within(()=>{
        cy.frameLoaded("#frame2")
        cy.iframe("#frame2").within(()=>{

            cy.get('a').click()
            cy.get('p#msg').should('have.text', 'Button Clicked')
        })
        
        
    
    })

})})