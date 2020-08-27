import STORE from "../store.js";
import BlogsService from "../Services/BlogsService.js";

function _drawblog(){
  let blogs= STORE.State.blogs
  let template = ''
  blogs.forEach(b => template += b.Template);
  document.getElementById("blogs").innerHTML = template
}

//Public
export default class BlogsController {
  constructor() {
    _drawblog()
  }

  newBlog(event){
    event.preventDefault()
  console.log("controler")
    let form = event.target
    let newBlog = {
     title: form.title.value 
    }
    BlogsService.createBlog(newBlog)
    _drawblog()
  }
  newPenut(event, id){
    event.preventDefault()
    console.log("conroller")
    let form = event.target
    let newNut =  form.penut.value 
    BlogsService.newPenut(newNut, id)
    _drawblog()
  }
  deleteBlog(id){
    BlogsService.deleteBlog(id)
    _drawblog()
  }
  deletePenut(id, penut){
    BlogsService.deletePenut(id, penut)
    _drawblog()
  }
}
