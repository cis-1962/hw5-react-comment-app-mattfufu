import Vote from './Vote.tsx';

export default function Post({ name, body }: {name: string, body: string}) {
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
          <input/>
        </div >
      </div>
      <Vote /> 
    </div>
  );
}
