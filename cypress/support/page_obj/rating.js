

export class Rating {
    constructor() {
        this.emojis = {
            5: 'emojis/emoji-5.png',
            4: 'emojis/emoji-4.png',
            3: 'emojis/emoji-3.png',
            2: 'emojis/emoji-2.png',
            1: 'emojis/emoji-1.png'
        };
        this.ratings = {
            0: '"0 out of 5"',
            1: '"1 out of 5"',
            2: '"2 out of 5"',
            3: '"3 out of 5"',
            4: '"4 out of 5"',
            5: '"5 out of 5"'
        };
        this.text = {
            0: '"Rate your experience"',
            1: '"I just hate it"',
            2: `"I don't like it"`,
            3: '"This is awesome"',
            4: '"I just like it"',
            5: '"I just love it"'
        };
    }

    getPseudoElementContent($els, pseudoElement) {
        const wind = $els[0].ownerDocument.defaultView;
        const style = wind.getComputedStyle($els[0], pseudoElement);
        return style.getPropertyValue('content');
    }

    click_star(review){
        cy.get(`.star-${review}.fas.fa-star`).click()
        cy.get(`.star-${review}.fas.fa-star`).should('have.css', 'color', 'rgb(255, 221, 68)')
      
        for(let i = review; i > 1; i--){
            cy.get(`.star-${i}.fas.fa-star`).should('have.css', 'color', 'rgb(255, 221, 68)')
            if(review<5){
            cy.get(`.star-${i+1}.fas.fa-star`).should('have.css', 'color', 'rgb(204, 204, 204)')}
            
        }

    }

 
    check_rate(review) {
        const presentEmoji = cy.get("li.slideImg");
        const stars = cy.get(".stars");

        stars.should('have.css', 'color').and('eq', 'rgb(178, 190, 205)');
        presentEmoji.find('img').invoke('attr', 'src').then(src => {
            cy.wrap(src);
        });

        cy.get("span.numb").then($els => {
            const contentValue = this.getPseudoElementContent($els, '::before');
            expect(contentValue).to.eq(this.ratings[review]);
        });

        cy.get('span.text').then($els => {
            const contentValue = this.getPseudoElementContent($els, '::before');
            expect(contentValue).to.eq(this.text[review]);
        });
    }
}

export const rating = new Rating();
