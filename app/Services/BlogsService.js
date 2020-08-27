import Blog from "../Models/Blog.js";
import store from "../store.js";
import STORE from "../store.js";

//Public
class BlogsService {
  createBlog(newBlog) {
    let blog = new Blog(newBlog)
    STORE.State.blogs.push(blog)
  }
}

const SERVICE = new BlogsService();
export default SERVICE;
