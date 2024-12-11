import MainLogo from '../../../assets/logos/main-logo.png';
import { COMPANY_NAME } from '../../../utils/constants';
import './styles.css';

const Header = () => {
  return (
    <div className='header-container'>
      <img
        src={MainLogo}
        alt='main logo'
        className='main-logo'
      />
      <p className='company-title'>{COMPANY_NAME}</p>
    </div>
  );
};

export default Header;
