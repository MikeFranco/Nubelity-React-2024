import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../pages/profile/profileSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';

export interface ILoginProps {
  email: string;
  password: string;
}

export const useUser = () => {
  const profileState = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    me();
  }, []);

  const login = async ({ email, password }: ILoginProps) => {
    try {
      const request = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const data = await request.json();
      const userProfileImage = data.sprites.front_shiny;
      const userData = {
        profileImage: userProfileImage,
        name: data.name,
        lastName: 'Sr. Dr. Prf.',
        id: data.id,
      };
      localStorage.setItem('token', 'un token desde la PokeApi');
      dispatch(updateUserData(userData));
      return userData;
    } catch (error) {
      console.log('%c⧭ error login', 'color: #ffa280', error);
    }
  };

  const logout = () => {
    dispatch(
      updateUserData({
        id: '',
        name: '',
        lastName: '',
        profileImage: '',
      }),
    );
    navigate('/login');
  };

  const me = async () => {
    try {
      const token = localStorage.getItem('token');
      const request = await fetch(
        'https://pokeapi.co/api/v2/pokemon/ditto' /* , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      } */,
      );
      const data = await request.json();
      const userProfileImage = data.sprites.front_shiny;
      const userData = {
        profileImage: userProfileImage,
        name: data.name,
        lastName: 'Sr. Dr. Prf.',
        id: data.id,
      };
      dispatch(updateUserData(userData));
      return userData;
    } catch (error) {
      console.log('%c⧭ error login', 'color: #ffa280', error);
    }
  };

  return {
    user: profileState.userData,
    login,
    logout,
    me,
  };
};
