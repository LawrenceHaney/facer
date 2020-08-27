import STORE from "../store.js";
import BlogsService from "../Services/BlogsService.js";

function _drawblog(){
  document.getElementById("blogs").innerHTML = STORE.State.blog.Template
}

//Public
export default class BlogsController {
  constructor() {
    console.log("controller here")
    _drawblog()
  }
}
