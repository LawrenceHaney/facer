import { generateId } from "../uits.js"
export default class Blog {
    constructor({title}) {
        this.title = title
        this.id = generateId()
    }

    get Template() {
        return `<h1>${this.title}</h1>`
    }
}