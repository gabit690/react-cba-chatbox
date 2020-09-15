import React from 'react';
import './Title.css';

const Title = ({ text }) => {
  return (
    <div className='titleContainer'>
      <label className='titleLabel'> {text} </label>
    </div>
  );
};

export default Title;