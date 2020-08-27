import { generateId } from "../uits.js"
export default class Blog {
    constructor({ title, body, id }) {
        this.title = title
        this.body = body || ""
        this.id = id || generateId()
        this.penut = []
    }

    get Template() {
        return `
        
        <div class="row card bg-success d-flex p-2 m-3">
            <i class="fa fa-ban text-danger align-self-end" aria-hidden="true"
                onclick="app.blogsController.deleteBlog('${this.id}')"></i>
            <div class="card bg-secondary m-2">
                <h1 class="col-6">${this.title}</h1>
                <p class="col-12">${this.body}</p>
            </div>
            <div class="d-flex col-12 p-2">${this.commits} </div>
            <div class="col-12">${this.penutgallery} </div>
        </div>`
    }

    get penutgallery() {
        return ` <form onsubmit="app.blogsController.newPenut(event, '${this.id}')">
        <div class="form-group" >
            <label for="">Your advice </label>
            <input type="text" class="form-control" name="penut" id="penut${this.id}" aria-describedby="helpId" placeholder="some text to fill the space">
            <button type="submit" class="btn btn-primary m-2">post forever <i class="fa fa-heart" aria-hidden="true"></i></button>
        </div>
    </form> `
    }
    get commits() {
        let template = ''
        this.penut.forEach(e => {
            template += `
            <i class="fa fa-ban text-danger justify-self-right " aria-hidden="true"
            onclick="app.blogsController.deletePenut('${this.id}', '${e}')"></i>
            <h4> ${e} </h4>
            <hr>`
        });
        return template
    }
}