import { useState } from "react";
import "./App.css";
import Input from "./Input";
import Navbar from "./Navbar";
import Post from "./Post";

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  //*Add Post
  const addPosts = (title) => {
    const newPosts = { id, title };
    setPosts([newPosts, ...posts]);
    id += 1;
  };
  //*Delete Post
  const deletePosts = (id) => {
    const afterDelete = posts.filter(post => post.id !== id)
    setPosts(afterDelete)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Input addPosts={addPosts} />
        {posts.map((post) => (
          <Post  key={post.id} id={post.id} title={post.title} deletePosts={deletePosts}  />
        ))}
      </header>
    </div>
  );
}

export default App;
