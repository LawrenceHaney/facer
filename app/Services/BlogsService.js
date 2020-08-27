import Blog from "../Models/Blog.js";
import store from "../store.js";
import STORE from "../store.js";

//Public
class BlogsService {
  deletePenut(id, penut) {
    let blog = STORE.State.blogs.find(e => e.id == id)
    let penutIndex = blog.penut.find(i => i == penut)
    blog.penut.splice(penutIndex, 1)
    ;
  }
  deleteBlog(id) {
    let blog = STORE.State.blogs.findIndex(e => e.id == id);
    STORE.State.blogs.splice(blog)
  }
  newPenut(newNut, id) {
    let blog = STORE.State.blogs.find(e => e.id == id)
    blog.penut.push(newNut)
  }
  createBlog(newBlog) {
    let blog = new Blog(newBlog)
    STORE.State.blogs.push(blog)
    console.log("service")
  }
}

const SERVICE = new BlogsService();
export default SERVICE;
