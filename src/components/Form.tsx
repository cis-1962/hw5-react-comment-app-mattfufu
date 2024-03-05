import { useState } from 'react';

let id = -1;
type Post = {
  id: number;
  name: string;
  body: string;
};

export default function Form({ parentPosts, updateParentPosts }) {
  const [post, setPost] = useState<Post | null>({ id: -1, name: '', body: '' });

  return (
    <>
      <input
        placeholder="Name"
        onChange={(evt) =>
          setPost((oldPost) => {
            const newPost = { ...oldPost };
            newPost.name = evt.target.value;
            return newPost;
          })
        }
        value={post.name}
      />
      <input
        onChange={(evt) =>
          setPost((oldPost) => {
            const newPost = { ...oldPost };
            newPost.body = evt.target.value;
            return newPost;
          })
        }
        value={post.body}
      />
      <button
        onClick={() => {
          setPost((oldPost) => {
            const newPost = { ...oldPost };
            id = id + 1;
            newPost.id = id;
            updateParentPosts([newPost, ...parentPosts]);
            return { id: -1, name: '', body: '' };
          });
        }}
        disabled={!(post.name.length > 0 && post.body.length > 0)}
      >
        Submit
      </button>
    </>
  );
}
