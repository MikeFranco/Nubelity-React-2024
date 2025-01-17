import Header from '../../components/common/header/Header';
import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';
import { updateUserDataField } from '../../store/profile/profileSlice';
import { useState } from 'react';

export const Profile = () => {
  const profileState = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className='main-container'>
        <div className='user-data-container'>
          <img
            src={profileState.userData.profileImage}
            alt={profileState.userData.name}
            height={100}
            width={100}
            className='user-image'
          />
          <h1>Hola {profileState.userData.name}, bienvenido a tu perfil</h1>
        </div>
        <input
          type='text'
          value={profileState.userData.name}
          placeholder='Ingresa tu nombre'
          onChange={event => {
            dispatch(
              updateUserDataField({ field: 'name', value: event.target.value }),
            );
          }}
        />
      </div>
    </>
  );
};

export default Profile;
