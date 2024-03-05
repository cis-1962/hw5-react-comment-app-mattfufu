import { useState } from 'react';

import './app.css';
import Form from './components/Form.tsx';
import Post from './components/Post.tsx';

type Post = {
  id: number;
  name: string;
  body: string;
};

function App() {
  const [posts, setPosts] = useState<Post[] | null>([]);

  return (
    <>
      <h1>React Comment App</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          outline: '1px solid black',
          marginBottom: '20px',
        }}
      >
        <Form parentPosts={posts} updateParentPosts={setPosts} />
      </div>
      <div>
        {posts.map((post: Post) => (
          <Post key={post.id} name={post.name} body={post.body} />
        ))}
      </div>
    </>
  );
}

export default App;
