import MainLogo from '../../../assets/logos/main-logo.png';
import CartIcon from '../../../assets/icons/cart.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';
import SettingsIcon from '../../../assets/icons/settings.svg';
import SearchIcon from '../../../assets/icons/search.svg';
import { COMPANY_NAME } from '../../../utils/constants';
import './styles.css';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//@ts-ignore TODO: fix this
import CartPopUp from '../../header/CartPopUp';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { updateUserData } from '../../../pages/profile/profileSlice';

interface IHeaderState {
  searchQuery: string;
  loading: boolean;
  cartPopUp: boolean;
}

const Header = () => {
  const profileState = useSelector((state: RootState) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [myState, setMyState] = useState<IHeaderState>({
    searchQuery: '',
    loading: false,
    cartPopUp: false,
  });

  const cartRef = useRef(null);

  useEffect(() => {
    console.log('%c⧭', 'color: #0088cc', 'se ejecuta en el use Effect');
    console.log(myState.loading);
    const timer = setTimeout(() => {
      if (myState.searchQuery.length > 3) makeApiCall();
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('%c⧭', 'color: #807160', 'adios en el return del timer');
    };
  }, [myState.searchQuery]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      setMyState(prevState => ({ ...prevState, loading: true }));
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const data = await response.json();
      const userProfileImage = data.sprites.front_shiny;
      const userData = {
        profileImage: userProfileImage,
        name: data.name,
        lastName: 'Sr. Dr. Prf.',
        id: data.id,
      };
      dispatch(updateUserData(userData));
    } catch (error) {
      console.log('%c⧭', 'color: #994d75', error);
    }
  };

  const makeApiCall = async () => {
    try {
      console.log('%c⧭', 'color: #00b300', 'my call');
      setMyState(prevState => ({ ...prevState, loading: true }));
      console.log('%c⧭ el search query', 'color: #917399', myState.searchQuery);
      console.log('%c⧭', 'color: #733d00', 'make an api call');
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const data = await response.json();
      console.log('%c⧭ la data de la swapi', 'color: #f200e2', data);
      navigate('/profile');
    } catch (error) {
      console.log('%c⧭', 'color: #1d5673', error);
    } finally {
      setMyState(prevState => ({ ...prevState, loading: false }));
    }
  };

  const onChangeQuery = (value: string) => {
    setMyState(prevState => ({ ...prevState, searchQuery: value }));
  };

  const toggleCartPopUp = () => {
    setMyState(prevState => ({
      ...prevState,
      cartPopUp: !prevState.cartPopUp,
    }));
  };

  return (
    <div className='header-container'>
      <div className='image-user-container'>
        <img
          src={MainLogo}
          alt='main logo'
          className='main-logo'
          onClick={() => navigate('/')}
        />
        <p>Hola ¡{profileState.userData.name}!</p>
      </div>
      <div className='header-search-container'>
        <input
          value={myState.searchQuery}
          type='text'
          placeholder={`Buscar en ${COMPANY_NAME}`}
          className='header-input'
          onChange={event => onChangeQuery(event.target.value)}
        />
        <img
          src={SearchIcon}
          alt='main logo'
          className='search-icon icon'
        />
      </div>
      <div className='header-right-container'>
        <img
          src={SettingsIcon}
          alt='main logo'
          className='profile-icon icon'
          onClick={() => navigate('/settings')}
        />
        <img
          src={ProfileIcon}
          alt='main logo'
          className='profile-icon icon'
          onClick={() => navigate('/settings/profile')}
        />
        <img
          src={CartIcon}
          alt='main logo'
          className='cart-icon icon'
          onClick={() => toggleCartPopUp()}
        />
        {/* {myState.cartPopUp && <CartPopUp ref={cartRef} />} */}
        <p
          className='company-title'
          onClick={() => navigate('/')}
        >
          {COMPANY_NAME}
        </p>
      </div>
    </div>
  );
};

export default Header;
