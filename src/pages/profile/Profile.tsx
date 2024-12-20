import React, { useEffect, useState } from 'react';
import Header from '../../components/common/header/Header';
import Card from '../../components/profile/card/Card';
import './styles.css';
import { IUserData } from './types';

export const Profile = () => {
  const settingsCards = [
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

  const [user, setUser] = useState<IUserData | null>(null);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const me = localStorage.getItem('userData');
    setUser(JSON.parse(me ?? ''));
  };
  return (
    <>
      <Header />
      <div className='main-container'>
        <h1>Hola {user?.name}</h1>
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

export default Profile;
