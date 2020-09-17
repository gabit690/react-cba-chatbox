import React from 'react';
import Label from './../Label/Label'
import './Title.css';

const Title = ({ text }) => {
  
  return (
    <div className='titleContainer'>
      <Label text={text} styles='titleLabel' />
    </div>
  );
};

export default Title;