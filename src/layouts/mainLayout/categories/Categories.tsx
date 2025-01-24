import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();
  const categoriesList = [
    {
      name: 'Lo más nuevo',
      path: '/new',
    },
    {
      name: 'Vender',
      path: '/sell',
    },
    {
      name: 'Tarjetas de regalo',
      path: '/gift-cards',
    },
    {
      name: 'Historial de Búsqueda',
      path: '/search-history',
    },
  ];

  const handleCategoryRedirect = (path: string) => {
    navigate(path);
  };
  return (
    <div className='categories-main-container'>
      {categoriesList.map((category, index) => (
        <div
          className='category'
          key={index}
          onClick={() => handleCategoryRedirect(category.path)}
        >
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
