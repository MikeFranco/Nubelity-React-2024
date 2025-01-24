import MainLogo from '../../../assets/logos/main-logo.png';
import CartIcon from '../../../assets/icons/cart.svg';
import ProfileIcon from '../../../assets/icons/profile.svg';
import SettingsIcon from '../../../assets/icons/settings.svg';
import { COMPANY_NAME } from '../../../utils/constants';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../hooks/useUser';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import i18n from '../../../i18n/config';
import { withNamespaces } from 'react-i18next';
import './styles.css';

interface IHeaderState {
  searchQuery: string;
  loading: boolean;
  cartPopUp: boolean;
}

const Header = (props: any) => {
  const { t } = props;
  const cartState = useSelector((state: RootState) => state.cart);
  const { user } = useUser();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('es');
  const [myState, setMyState] = useState<IHeaderState>({
    searchQuery: '',
    loading: false,
    cartPopUp: false,
  });

  const cartRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cartRef.current && badgeRef.current) {
      const cartPosition = cartRef.current.getBoundingClientRect();
      badgeRef.current.style.top = `${
        cartPosition.top - cartPosition.top * 1.4
      }px`;
      badgeRef.current.style.right = `${-cartPosition.width + 25}px`;
    }
  }, [cartState.totalCartQuantity]);

  const onChangeQuery = (value: string) => {
    setMyState(prevState => ({ ...prevState, searchQuery: value }));
  };

  const toggleCartPopUp = () => {
    setMyState(prevState => ({
      ...prevState,
      cartPopUp: !prevState.cartPopUp,
    }));
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
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
        <p>{t('welcomeUser', { name: user.name })}</p>
      </div>
      <div className='header-search-container'>
        <TextField
          value={myState.searchQuery}
          type='text'
          placeholder={`Buscar en ${COMPANY_NAME}`}
          id='header-input'
          size='small'
          onChange={event => onChangeQuery(event.target.value)}
          autoComplete='off'
        />
        <Button
          variant='contained'
          color='secondary'
        >
          <SearchIcon color='primary' />
        </Button>
        {/* <img
          src={SearchIcon}
          alt='main logo'
          className='search-icon icon'
        /> */}
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
        <div
          ref={cartRef}
          className='cart-container'
        >
          <img
            src={CartIcon}
            alt='main logo'
            className='cart-icon icon'
            onClick={() => toggleCartPopUp()}
          />
          <div
            className='cart-badge'
            ref={badgeRef}
          >
            <p className='cart-badge-count'>{cartState.totalCartQuantity}</p>
          </div>
        </div>
        <p
          className='company-title'
          onClick={() => navigate('/')}
        >
          {COMPANY_NAME}
        </p>
        <div>
          <Select
            value={selectedLanguage}
            label='Language'
            onChange={e => changeLanguage(e.target.value)}
            variant='standard'
          >
            <MenuItem value='es'>🇲🇽</MenuItem>
            <MenuItem value='en'>🏴󠁧󠁢󠁥󠁮󠁧󠁿</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Header);
