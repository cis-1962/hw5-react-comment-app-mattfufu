import Vote from './Vote.tsx';

type Comment = {
  name: string;
  body: string;
};

export default function Comment({ name, body }: Comment) {
  return (
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
        <div style={{ outline: '1px solid black', padding: '8px', flexGrow: 1 }}>
          <button>Reply</button>
        </div >
      </div>
      <Vote /> 
    </div>
  );
}
