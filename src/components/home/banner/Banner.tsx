import React, { useEffect, useState } from 'react';
import './bannerStyles.css';

const Banner = () => {
  const [displayBanner, setDisplayBanner] = useState(0);
  const banners = [
    {
      position: 1,
      path: 'http://dummyimage.com/600x400.png/5fa2dd/ffffff',
      name: 'banner 1',
    },
    {
      position: 2,
      path: 'http://dummyimage.com/500x200.png/5fa2dd/ffffff',
      name: 'banner 2',
    },
    {
      position: 3,
      path: 'http://dummyimage.com/600x500.png/5fa2dd/ffffff',
      name: 'banner 3',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayBanner(prevState => (prevState += 1) % banners.length);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [displayBanner]);

  return (
    <div className='main-banners-container'>
      {banners[displayBanner] && (
        <img
          src={banners[displayBanner].path}
          alt={banners[displayBanner].name}
          height={200}
          width={200}
          className='banner-image'
        />
      )}
    </div>
  );
};

export default Banner;
