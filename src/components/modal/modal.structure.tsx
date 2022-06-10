import { ModalProps } from './modal';
import * as Icon from 'react-feather';
import './styles.scss';
import { useModalHelper } from './modal.helper';

export const ModalStructure: React.FC<ModalProps> = () => {
  const {
    handleCloseModal,
    handleCreatePost,
    title,
    text,
    handleOnChangeText,
    handleOnChangeTitle,
  } = useModalHelper();
  return (
    <div className={'overlay'}>
      <div className={'modalContainer'}>
        <button onClick={handleCloseModal}>
          <Icon.X />
        </button>
        <h1>Write What you are thinking!</h1>
        <p
          style={{
            fontWeight: 700,
            fontSize: '19px',
            lineHeight: '19px',
            alignSelf: 'flex-start',
          }}
        >
          Title
        </p>
        <input
          className={'input'}
          style={{ border: 'none' }}
          type="text"
          value={title}
          onChange={(e) => handleOnChangeTitle(e)}
        />
        <p
          style={{
            fontWeight: 700,
            fontSize: '19px',
            lineHeight: '19px',
            alignSelf: 'flex-start',
          }}
        >
          Write the Text!
        </p>
        <textarea value={text} onChange={(e) => handleOnChangeText(e)} />
        <button onClick={() => handleCreatePost(title, text)}>
          Put in the box! <Icon.ArrowRight color={'#FFFFFF'} size="20" />
        </button>
      </div>
    </div>
  );
};
