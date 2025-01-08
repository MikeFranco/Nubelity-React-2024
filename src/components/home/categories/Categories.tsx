import React from 'react';
import './styles.css';

const Categories = () => {
  const categories = [
    {
      position: 1,
      path: 'http://dummyimage.com/600x400.png/5fa2dd/ffffff&text=Videojuegos',
      name: 'Videojuegos',
    },
    {
      position: 2,
      path: 'http://dummyimage.com/500x300.png/5fa2dd/ffffff&text=Hogar',
      name: 'Hogar',
    },
    {
      position: 3,
      path: 'http://dummyimage.com/600x500.png/5fa2dd/ffffff&text=Ropa',
      name: 'Ropa',
    },
    {
      position: 4,
      path: 'http://dummyimage.com/600x500.png/5fa2dd/ffffff&text=Autos',
      name: 'Autos',
    },
  ];
  return (
    <div>
      <h3 className='header-text'>Categorías</h3>
      <div className='main-categories-container'>
        {categories.map(category => (
          <div key={category.name}>
            <img
              src={category.path}
              alt={category.name}
              height={100}
              width={100}
              className='category-image'
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
