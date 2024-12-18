import MainLogo from '../../../assets/logos/main-logo.png';
import CartIcon from '../../../assets/icons/cart.svg';
import SearchIcon from '../../../assets/icons/search.svg';
import { COMPANY_NAME } from '../../../utils/constants';
import './styles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [myState, setMyState] = useState({
    searchQuery: '',
    loading: false,
  });

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
    console.log('%c⧭ myState.loading', 'color: #ffa640', myState.loading);
    return () => {
      console.log('%c⧭', 'color: #007300', 'adiós desde el loading');
    };
  }, [myState.loading]);

  useEffect(() => {
    console.log('%c⧭', 'color: #731d1d', 'adiós mundo cruel');
  }, []);

  const makeApiCall = async () => {
    try {
      console.log('%c⧭', 'color: #00b300', 'my call');
      setMyState(prevState => ({ ...prevState, loading: true }));
      console.log('%c⧭ el search query', 'color: #917399', myState.searchQuery);
      console.log('%c⧭', 'color: #733d00', 'make an api call');
      const response = await fetch('https://swapi.dev/api/people/1');
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

  return (
    <div className='header-container'>
      <img
        src={MainLogo}
        alt='main logo'
        className='main-logo'
      />
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
          className='search-icon'
        />
      </div>
      <div className='header-right-container'>
        <img
          src={CartIcon}
          alt='main logo'
          className='cart-icon'
        />
        <p className='company-title'>{COMPANY_NAME}</p>
      </div>
    </div>
  );
};

export default Header;
