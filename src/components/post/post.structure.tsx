import { Profile } from '../profile/profile';
import { PostProps } from './post';
import * as Icon from 'react-feather';
import './styles.scss';
import { usePostHelper } from './post.helper';

export const PostStructure: React.FC<PostProps> = (props) => {
  const { handleDeletePost } = usePostHelper();
  return (
    <div
      style={{ height: `${props.height}%`, margin: '20px' }}
      className={'postContainer'}
    >
      <div className={'Delete'} style={{ margin: '0px 200px 0px 0px' }}>
        <button onClick={() => handleDeletePost(props.id)}>
          <Icon.X />
        </button>
      </div>
      <header>
        <Profile size="70" />
        <div className={'lyricContent'}>
          <h1>{props.title}</h1>
        </div>
      </header>
      <div className={'postContent'}>
        <p>{props.text}</p>
        <img src="" alt="" />
        <div>
          <Icon.ThumbsUp onClick={() => void 0} className={'Icon'} />
        </div>
      </div>
    </div>
  );
};
