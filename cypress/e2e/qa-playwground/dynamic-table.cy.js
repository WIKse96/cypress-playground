context('Dynamics tables', ()=>{
    beforeEach(()=>{
        cy.visit('/apps/dynamic-table/')
    })

    it('Find real name Iron Man', ()=>{
        cy.get('tbody').contains('tr', 'Iron Man').then(tRow =>{
            //Check Iron Man real name
            cy.wrap(tRow).find(".px-6.py-4.whitespace-nowrap span.text-sm.font-medium.text-white-900").should('have.text', "Anthony 'Tony' Stark")
            
        })
    })
    it('Chcek number tr is > 1', ()=>{
        cy.get('tbody').find('tr').should('have.length.at.least', 1)
    })

    it('Check all superhero have avatar', ()=>{
        cy.get('tbody').find('tr td div div img')
    })
// Check header of table. Does contain correct text 
    it('Chceck headers', ()=>{
      cy.get('thead').find('th').then(th =>{
        cy.wrap(th).should('contain', 'Superhero')
        cy.wrap(th).should('contain', 'Status')
        cy.wrap(th).should('contain', 'Real Name')
      })  
    })
// Check statuses. All should be active and green
    it('Chck statuses', ()=>{
       cy.get('tbody').find('tr').each(statusHero =>{
        cy.wrap(statusHero).find('td').eq(1).find('span').should('have.text', 'Active').should('have.class', 'bg-green-400 text-green-800')

       })
    })

})