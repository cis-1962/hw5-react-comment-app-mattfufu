import { useState } from 'react';
import './app.css';

import Comment from './components/Comment.tsx';

let id = -1;
type Comment = {
  id: number,
  name: string,
  body: string
}

function App() {
  const[commentName, setCommentName] = useState<string | null>('');
  const[commentBody, setCommentBody] = useState<string | null>('');
  const [comments, setComments] = useState<Comment[] | null>([]); 

  return (
    <>
      <h1>React Comment App</h1>
      <div style={{ display: 'flex', flexDirection: 'column', outline: '1px solid black', marginBottom: '20px'}}>
        <input placeholder = "Name" onChange={(evt) => setCommentName(evt.target.value)} value={commentName}/>
        <input onChange={(evt) => setCommentBody(evt.target.value)} value={commentBody}/>
        <button onClick = {() => {
          id++;
          const comment: Comment = {id: id, name: commentName, body: commentBody};
          setComments([comment, ...comments]);
          setCommentName("");
          setCommentBody("");
        }}>Submit</button>
      </div>
      <div>
        {comments.map((comment: Comment) => 
          <Comment 
            key={comment.id}
            name={comment.name}
            body={comment.body}
          />
        )}
      </div>
    </>
  );
}

export default App;
