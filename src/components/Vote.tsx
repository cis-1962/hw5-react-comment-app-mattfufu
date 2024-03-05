import { useState } from 'react';

export default function Vote() {
  const [vote, setVote] = useState<number>(0);

  return (
    <div
      style={{
        outline: '1px solid black',
      }}
    >
      <button onClick={() => setVote(vote + 1)}>👍</button>
      <p>{vote}</p>
      <button onClick={() => setVote(vote - 1)}>👎</button>
    </div>
  );
}
