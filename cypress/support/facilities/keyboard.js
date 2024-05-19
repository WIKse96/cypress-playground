export class Arrows{
    // n - how many times 
    // arrow - which arrow
    clickArrow(n, arrow){
        let stringToReturn = ''
        let i = 0
        while (i<n){
            stringToReturn += `{${arrow}Arrow}`
            i++
        }
        return stringToReturn
    }
}
export const arrows = new Arrows()