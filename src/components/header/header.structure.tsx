import { HeaderProps } from './header';
import * as icon from 'react-feather';
import { Profile } from '../profile/profile';
import './styles.scss';
import { useHeaderHelper } from './header.helper';

export const HeaderStructure: React.FC<HeaderProps> = (props) => {
  const { showNotification, handleShowNotification } = useHeaderHelper();
  return (
    <>
      <header className={'headerContainer'}>
        <h1>
          <a href="/" style={{ textDecoration: 'none' }}>
            Out Box
          </a>
        </h1>
        <div className={'itemsContainer'}>
          <ul className={'itemsContent'}>
            <li>
              <a href="/">
                <icon.Home size="30" color={'#702BA6'} />
              </a>
            </li>
            <li>
              <a href="/Edit">
                <icon.Edit2 size="30" color={'#702BA6'} />
              </a>
            </li>
            <li>
              <a href="/Profile">
                <Profile size={'40'}>
                  <icon.User size={25} color="#702BA6" className={'icon'} />
                </Profile>
              </a>
            </li>
            <li
              onClick={handleShowNotification}
              style={{
                borderBottom: showNotification ? '5px solid #702BA6' : '',
              }}
            >
              <div>
                <icon.Bell
                  size="30"
                  fill={showNotification ? '#702BA6' : 'transparent'}
                />
              </div>
            </li>
          </ul>
          <button>Logout</button>
        </div>
      </header>
      {showNotification && (
        <div className={'notificationContainer'}>
          <div className={'notificationContent'}>
            <p>Notification</p>
          </div>
          <div className={'notificationContent'}>
            <p>Notification</p>
          </div>
          <div className={'notificationContent'}>
            <p>Notification</p>
          </div>
        </div>
      )}
    </>
  );
};
