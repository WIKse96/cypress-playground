describe('Check booster', ()=>{
    beforeEach(()=>{
        cy.visit('apps/shadow-dom/')
    })

it('check booster', ()=>{
    cy.get('progress-bar').invoke('attr', 'percent').then(percent =>{
        cy.wrap(percent).should('eq', '5')
        
    })
    cy.get('button').click()
    cy.get('progress-bar').invoke('attr', 'percent').then(percent =>{
        cy.wrap(percent).should('eq', '95')
        
    })
    })})