import Header from '../../components/common/header/Header';
import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserDataField } from './profileSlice';
import './styles.css';

export const Profile = () => {
  const profileState = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className='main-container'>
        <h1>Hola {profileState.userData.name}, bienvenido a tu perfil</h1>
        <input
          type='text'
          value={profileState.userData.name}
          placeholder='Ingresa tu nombre'
          onChange={event =>
            dispatch(
              updateUserDataField({ field: 'name', value: event.target.value }),
            )
          }
        />
      </div>
    </>
  );
};

export default Profile;
