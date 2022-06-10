import { Modal } from '../../components/modal/modal';
import { Profile } from '../../components/profile/profile';
import { ProfileScreenProps } from './profile';
import * as Icon from 'react-feather';
import { useProfileScreenHelper } from './profile.helper';
import './styles.scss';

export const ProfileScreenStructure: React.FC<ProfileScreenProps> = (props) => {
  const { modalState, setInput, disabled } = useProfileScreenHelper();

  return (
    <>
      <div className={'profileContainer'}>
        <div className={'profile'}>
          <aside
            className={'profileContent'}
            style={{
              background: '#FFFFFF',
              boxShadow: '#c4c4c4 0px 15px 15px',
            }}
          >
            <div
              className={'profileCodes'}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Profile size={'130'} />
            </div>
            <div className={'profileConfig'}>
              <a href="/Edit" style={{ textDecoration: 'none' }}>
                Edit Profile
              </a>
              <div className={'circle'}>
                <Icon.Settings />
              </div>
            </div>
            <div className={'buttonContent'}>
              <button className={'markbook'}>Markbooks</button>
              <a href="/Notes" style={{ textDecoration: 'none' }}>
                Notes
              </a>
            </div>
          </aside>
        </div>

        <div className={'profilePosts'}>
          <textarea
            className={'input'}
            disabled={modalState && disabled}
            placeholder="Write something interesting!"
            onClick={setInput}
          />
          <button className={'plusButton'}>
            <Icon.Plus />
          </button>
          {modalState && <Modal />}
          <div className={'cardContainer'}>{}</div>
        </div>
      </div>
    </>
  );
};
