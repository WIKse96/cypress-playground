export class TagInputBox{
    removeAllTags (){
        // sprawdz czy niepuste
        cy.get('.content ul li')
        cy.get('button').contains('Remove All').click()
        // sprawdz czy puste
        cy.get(".content ul li").should('not.exist')
    }

    removeByx(){
 
        cy.get(".content ul li").each(li =>{
            cy.wrap(li).find("i").click()
        })
        cy.get(".content ul li").should('not.exist')
    }

    addTag(amount){


        cy.get(".content ul input")
    }

    genTag(amount){
        
    }
}



export const tagInputBox = new TagInputBox()