import { Post } from '../post/post';
import { FeedProps } from './feed';
import { useFeedHelper } from './feed.helper';

export const FeedStructure: React.FC<FeedProps> = (props) => {
  const { postsState } = useFeedHelper();
  return postsState.length > 0 ? (
    <>
      <div
        style={{
          marginTop: '35px',
          borderRadius: '30px',
          padding: '25px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          {postsState.map((p, index) => (
            <Post
              key={index}
              id={p._id}
              title={p.title}
              text={p.text}
              height={'70px'}
            />
          ))}
        </div>
      </div>
    </>
  ) : (
    <>
      {' '}
      <div
        style={{
          width: '100%',
          background: '#FFFFFF',
          marginTop: '35px',
          borderRadius: '30px',
          height: '100vh',
        }}
      />
    </>
  );
};
