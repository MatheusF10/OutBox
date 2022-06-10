import { ProfileProps } from './profile';
import './styles.scss';

export const ProfileStructure: React.FC<ProfileProps> = (props) => {
  return (
    <div
      className={'profileCircle'}
      style={{
        width: `${props.size}px`,
        height: `${props.size}px`,
        position: props.absolute ? 'absolute' : 'inherit',
      }}
    >
      <img src="https://github.com/MatheusF10.png" alt="" />
      {props.children}
    </div>
  );
};
