import Vote from './Vote.tsx';

type Comment = {
    name: string,
    body: string
  }

export default function Comment({name, body}: Comment) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', outline: '1px solid black', marginBottom: '20px' }}>
            <div style={{ outline: '1px solid black' }}>{name}</div>
            <div style={{ outline: '1px solid black' }}>{body}</div>
            <Vote />
        </div>
    )
}