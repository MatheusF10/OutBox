import { Modal } from '../modal/modal';
import { Profile } from '../profile/profile';
import { UserInputProps } from './userInput';
import { useUserInputHelper } from './userInput.helper';
import './styles.scss';

export const UserInputStructure: React.FC<UserInputProps> = (props) => {
  const { disabled, setInput, modalState } = useUserInputHelper();
  return (
    <>
      <div className={'contentContainer'}>
        <div className={'writeContainer'}>
          <div style={{ margin: '0px 50px 0px' }}>
            <Profile size="65" />
          </div>

          <div style={{ flex: 1 }}>
            <input
              type="text"
              disabled={modalState && disabled}
              placeholder="Write something interesting!"
              onClick={setInput}
            />
          </div>

          {modalState && <Modal />}
        </div>
      </div>
      <div className={'feedContainer'}></div>
    </>
  );
};
