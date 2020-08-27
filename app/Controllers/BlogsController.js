import STORE from "../store.js";
import BlogsService from "../Services/BlogsService.js";

function _drawblog(){
  document.getElementById("blogs").innerHTML = STORE.State.blog.Template
}

//Public
export default class BlogsController {
  constructor() {
    _drawblog()
  }

  newBlog(event){
    event.preventDefult()
    let form = event.target
    let newBlog = {
     title: form.title.value 
    }
    BlogsService.createBlog(newBlog)
  }
}
