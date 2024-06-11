import { arrows, Arrows } from "../../support/facilities/keyboard"

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
it('Check typing 9', ()=>{
    cy.get('.code-container input').each(input =>{
        cy.wrap(input).type('9')
        
    })
    //Does success exist
    cy.get('.info.success').should('exist').should('contain.text', 'Success')
})
})

describe('Verify your account by arrows on keyboard', ()=>{
    beforeEach(()=>{
        cy.visit('apps/verify-account/')
    })
    // Correct case click arrow up
    it('Type an corect code by arrow up', ()=>{
        cy.get('.code-container input').each(input =>{
            cy.wrap(input).type(arrows.clickArrow(9, 'up'))
        })
        cy.get('.info.success').should('exist').should('contain.text', 'Success')
    })
    // Incorrect case. Click the arrow up less than 9 times.
    it('Type an inncorect code by arrow up', ()=>{
        cy.get('.code-container input').each(input =>{
            cy.wrap(input).type(arrows.clickArrow(8, 'up'))
        })
        cy.get('.info.success').should('not.exist')
    })
    // Correct case. Click the arrow up more than 9 times. 
    it('Type an corect code by arrow up', ()=>{
        cy.get('.code-container input').each(input =>{
            cy.wrap(input).type(arrows.clickArrow(11, 'up'))
        })
        cy.get('.info.success').should('exist').should('contain.text', 'Success')
    })

        // Incorrect case. Click the arrow down more than 9 times. 
        it('Type an inncorect code by arrow down', ()=>{
            cy.get('.code-container input').each(input =>{
                cy.wrap(input).type(arrows.clickArrow(11, 'down'))
            })
            cy.get('.info.success').should('not.exist')
        })
})