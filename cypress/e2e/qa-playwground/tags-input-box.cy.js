import { tagInputBox } from "../../support/page_obj/tags-input-box";

describe('Verify removing tags',()=> {
    beforeEach(()=>{
        cy.visit('apps/tags-input-box/')
    })

    it('Check remove all', ()=>{
        tagInputBox.removeAllTags()
    })
    it('Remove each via x', ()=>{
        tagInputBox.removeByx()
    })
})
describe('Verify adding tags',()=> {
    beforeEach(()=>{
        cy.visit('apps/tags-input-box/')
    })

    it('Check remove all', ()=>{
        tagInputBox.removeAllTags()
    })
    it('Add tags', ()=>{
        tagInputBox.addTag(3)
    })
   
})

