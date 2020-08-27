import Blog from "./Models/Blog.js"
let _state = {
  blog: new Blog ({title: "HI"}),
  blogs: []
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
