import { Feed } from '../../components/feed/feed';
import { UserInput } from '../../components/userInput/userInput';
import { useDidMount } from '../../hooks/useDidMount/useDidMount';
import { HomeProps } from './home';
import { useHomeHelper } from './home.helper';

export const HomeStructure: React.FC<HomeProps> = (props) => {
  const { loadPosts } = useHomeHelper();

  useDidMount(() => loadPosts());

  return (
    <>
      <div style={{ margin: '0px 24px 0px' }}>
        <div>
          <UserInput />
        </div>
        <Feed />
      </div>
    </>
  );
};
