import { useState } from 'react';

import Form from './Form.tsx';
import Vote from './Vote.tsx';

type Reply = {
  id: number;
  name: string;
  body: string;
};

export default function Post({ name, body }: { name: string; body: string }) {
  const [replies, setReplies] = useState<Reply[] | null>([]);
  const [isReplying, setIsReplying] = useState<boolean | null>(false);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          outline: '1px solid black',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            marginRight: '20px',
          }}
        >
          <div
            style={{
              outline: '1px solid black',
              padding: '8px',
              marginBottom: '10px',
            }}
          >
            {name}
          </div>
          <div
            style={{ outline: '1px solid black', padding: '8px', flexGrow: 1 }}
          >
            {body}
          </div>
          <div
            style={{ outline: '1px solid black', padding: '8px', flexGrow: 1 }}
          >
            <button onClick={() => setIsReplying(true)}>Reply</button>
            {isReplying && (
              <Form parentPosts={replies} updateParentPosts={setReplies} />
            )}
          </div>
        </div>
        <Vote />
      </div>
      <div
        style={{
          width: '300px',
          margin: '0 auto',
          backgroundColor: 'blue',
        }}
      >
        <div>
          {replies.map((reply: Reply) => (
            <Post key={reply.id} name={reply.name} body={reply.body} />
          ))}
        </div>
      </div>
    </>
  );
}
