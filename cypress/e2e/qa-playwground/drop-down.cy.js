import { dropdown } from "../../support/page_obj/dropdown"

describe('Dropdown tests', ()=>{
    beforeEach(()=>{
        cy.visit('apps/multi-level-dropdown')
    })

it.only('first', ()=>{
    dropdown.dropdownMenu()
    dropdown.checkSettings()
    dropdown.checkAnimals()
})
})