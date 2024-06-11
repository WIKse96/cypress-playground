export class Dropdown{
    
    dropdownMenu(){
        cy.get('nav.navbar ul li').eq(3).click()
        cy.get("a.menu-item").eq(0).should('contain', 'My Profile')
        cy.get("a.menu-item").eq(1).should('contain', 'Settings')
        cy.get("a.menu-item").eq(2).should('contain', 'Animals')     
    }

    checkSettings(){
        if(!cy.get('a.menu-item')){
            cy.get('nav.navbar ul li').eq(3).click()
        }
        cy.get("a.menu-item").eq(1).click()
        cy.get("div.menu.menu-secondary-enter-done").find('a')
        cy.get('h2').click()
    }
    checkAnimals(){
        if(!cy.get('a.menu-item')){
            cy.get('nav.navbar ul li').eq(3).click()
        }
        // cy.get('nav.navbar ul li').eq(3).click()
        cy.get("a.menu-item").eq(2).should('contain', 'Animals').click()
        cy.get("div.dropdown div.menu.menu-secondary-enter-done a").each(link =>{
            cy.wrap(link).should('exist')
        })



    }
}

export const dropdown = new Dropdown