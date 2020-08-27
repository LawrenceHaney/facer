import { generateId } from "../uits.js"
export default class Blog {
    constructor({title, body, id}) {
        this.title = title
        this.body = body || ""
        this.id = id || generateId()
        this.penut = []
    }

    get Template() {
        return `<h1 class="col-12">${this.title}</h1> 
        <p class="col-12">${this.body}</p>
        <div class col-12>${this.commits} </div>
        <div class col-12>${this.penutgallery} </div>
        <button type="button" class="btn btn-danger" onclick="app.blogsController.deleteBlog('${this.id}')"> bye</button>`
    }

    get penutgallery(){
        return ` <form onsubmit="app.blogsController.newPenut(event, '${this.id}')">
        <div class="form-group" >
            <label for="">Your advice </label>
            <input type="text" class="form-control" name="penut" id="penut${this.id}" aria-describedby="helpId" placeholder="some text to fill the space">
            <button type="submit" class="btn btn-primary">post forever <i class="fa fa-heart" aria-hidden="true"></i></button>
        </div>
    </form> `
    }
    get commits(){
        let template= ''
        this.penut.forEach(e => {
            template += `<h4> ${e} </h4>
            <button type="button" class="btn btn-danger" onclick="app.blogsController.deletePenut('${this.id}', '${e}')"> bye</button>`
        });
        return template
    }
}