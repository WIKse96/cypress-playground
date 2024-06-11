import { rating } from "../../support/page_obj/rating"

describe('rating', ()=>{
    beforeEach(()=>{
        cy.visit('apps/rating/')
    })

    it('check  stars', ()=>{
        rating.check_rate(0)
        rating.click_star(1)
        rating.check_rate(1)
        rating.click_star(2)
        rating.check_rate(2)
        rating.click_star(1)
        rating.check_rate(1)
        rating.click_star(5)
        rating.check_rate(5)
        rating.click_star(2)
        rating.check_rate(2)

    })
})