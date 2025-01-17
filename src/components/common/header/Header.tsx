import MainLogo from '../../../assets/logos/main-logo.png';
import CartIcon from '../../../assets/icons/cart.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';
import SettingsIcon from '../../../assets/icons/settings.svg';
import SearchIcon from '../../../assets/icons/search.svg';
import { COMPANY_NAME } from '../../../utils/constants';
import './styles.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//@ts-ignore TODO: fix this
import CartPopUp from '../../header/CartPopUp';
import { useUser } from '../../../hooks/useUser';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

interface IHeaderState {
  searchQuery: string;
  loading: boolean;
  cartPopUp: boolean;
}

const Header = () => {
  const globalState = useSelector((state: RootState) => state);
  const { user } = useUser();
  const navigate = useNavigate();
  const [myState, setMyState] = useState<IHeaderState>({
    searchQuery: '',
    loading: false,
    cartPopUp: false,
  });

  const cartRef = useRef(null);

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
        <p>Hola ¡{user.name}!</p>
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
        <div className='cart-badge'>
          <p className='cart-badge-count'>{globalState.cart.items.length}</p>
        </div>
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
