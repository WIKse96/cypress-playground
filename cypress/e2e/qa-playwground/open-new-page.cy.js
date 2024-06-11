describe('Open new tab', ()=>{
    beforeEach(()=>{
        cy.visit('apps/new-tab/')
    })

    it('Open new page and check', ()=>{
        // verify link
        // cy.get('a#open').then((href)=>{
        //     cy.visit(href)
        // })
        
        // open new tab
        cy.get('a#open').click()
    })
})