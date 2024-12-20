import React, { useEffect } from 'react';
import Header from '../../components/common/header/Header';
import ProductCard from '../../components/common/productCard/ProductCard';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface IProduct {
  id: number;
  productName: string;
  image: string;
  description: string;
  price: number;
  priceWithDiscount?: number;
  productRate: number;
  currency?: string;
}

export const Home = () => {
  const profileState = useSelector((state: RootState) => state.profile);
  const featuredProducts: IProduct[] = [
    {
      id: 1,
      productName: 'Crackers - Melba Toast',
      image: 'http://dummyimage.com/193x100.png/dddddd/000000',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      price: 4059.21,
      priceWithDiscount: 3483.12,
      productRate: 3.0,
      currency: 'USD',
    },
    {
      id: 2,
      productName: 'Beans - Fava, Canned',
      image: 'http://dummyimage.com/216x100.png/5fa2dd/ffffff',
      description:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
      price: 4068.07,
      productRate: 1.2,
    },
    {
      id: 3,
      productName: 'Cheese - Valancey',
      image: 'http://dummyimage.com/131x100.png/ff4444/ffffff',
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      price: 4245.21,
      priceWithDiscount: 3754.0,
      productRate: 4.3,
    },
    {
      id: 4,
      productName: 'Onions - Red Pearl',
      image: 'http://dummyimage.com/237x100.png/5fa2dd/ffffff',
      description:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      price: 3942.42,
      priceWithDiscount: 3220.67,
      productRate: 3.8,
    },
    {
      id: 5,
      productName: 'Puree - Mango',
      image: 'http://dummyimage.com/246x100.png/5fa2dd/ffffff',
      description:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
      price: 1330.24,
      priceWithDiscount: 799.38,
      productRate: 4.7,
    },
  ];

  useEffect(() => {
    console.log('%c⧭ profileState', 'color: #735656', profileState);
  }, []);
  return (
    <>
      <Header />
      <div className='main-container'>
        <p className='category-title'>Featured Products</p>
        <div className='products-container'>
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              productName={product.productName}
              description={product.description}
              price={product.price}
              priceWithDiscount={product.priceWithDiscount}
              productRate={product.productRate}
              currency={product.currency}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
