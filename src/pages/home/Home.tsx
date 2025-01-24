import Header from '../../components/common/header/Header';
import SideCart from '../../components/common/sideCart/SideCart';
import Banner from '../../components/home/banner/Banner';
//@ts-ignore
import Categories from '../../components/home/categories/Categories';
import FeaturedProducts from '../../components/home/featuredProducts/FeaturedProducts';
import './styles.css';

export const Home = () => {
  return (
    <div className='main-container'>
      <Banner />
      <Categories />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
