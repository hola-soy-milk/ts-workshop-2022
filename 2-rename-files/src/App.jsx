import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([]);

  async function submitPost(post) {
    setPosts([...posts, post]);
  }

  useEffect(() => {
    setPosts([{
      sender: {
        name: "Ramón",
        handle: "hola_soy_milk",
      },
      body: "You're doing great!",
      timestamp: new Date,
    }]);
  }, []);

  return (
    <div className="App">
      <h1>Kind Words</h1>
      <main>
        <PostList posts={posts}/>
        <PostForm submitPost={submitPost}/>
      </main>
    </div>
  );
}

export default App;
