import React, { useEffect } from 'react';
import Header from '../../components/common/header/Header';
import Card from '../../components/profile/card/Card';
import './styles.css';
import type { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Settings = () => {
  const navigate = useNavigate();
  const profileState = useSelector((state: RootState) => state.profile);
  const settingsCards = [
    {
      title: 'Mi perfil',
      description: 'Tu historial de pedidos',
      onClick: () => {
        navigate('/settings/profile');
      },
    },
    {
      title: 'Mis pedidos',
      description: 'Tu historial de pedidos',
      onClick: () => {
        console.log('algo');
      },
    },
    {
      title: 'Mis direcciones',
      description: 'Direcciones guardadas',
      onClick: () => {
        console.log('algo');
      },
    },
    {
      title: 'Configuración',
      description: 'Accede a la configuración de tu cuenta',
      onClick: () => {
        console.log('algo');
      },
    },
  ];

  useEffect(() => {
    console.log('%c⧭ profileState', 'color: #1d734e', profileState);
  }, []);
  return (
    <>
      <Header />
      <div className='main-container'>
        <h1>Hola {profileState.userData.name}</h1>
        <div className='settings-cards-container'>
          {settingsCards.map((setting, index) => (
            <Card
              key={index}
              title={setting.title}
              description={setting.description}
              onClick={setting.onClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Settings;
