export class TagInputBox{
    removeAllTags (){
        // sprawdz czy niepuste
        cy.get('.content ul li')
        cy.get('button').contains('Remove All').click()
        // sprawdz czy puste
        cy.get(".content ul li").should('not.exist')
    }

    removeByx(amount){
 
        cy.get(".content ul li").each(li =>{
            cy.wrap(li).find("i").click()
        })
        cy.get(".content ul li").should('not.exist')
    }
    addTag(amount){
        cy.get(".content ul input").then(input =>{
            let tags = ['c#','c++', 'R', 'html', 'css' ,'pearl', 'js', 'python']
            tags.forEach(tag => {
                cy.wrap(input).type(`${tag} {enter}`, { force: true })
            });
        })
    }


    genTag(amount){
        let tagName = `Tagname-`
        let tagNameList = []
        let n = 0
        while( n < amount){
            tagNameList.push(tagName)
            n++
        }
        return tagNameList
    }
}



export const tagInputBox = new TagInputBox()