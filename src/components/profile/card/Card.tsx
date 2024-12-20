import React from 'react';
import './styles.css';

interface ICard {
  title: string;
  description?: string;
  onClick: () => void;
}

const Card = ({ title, description, onClick }: ICard) => {
  return (
    <div
      className='card-container'
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
