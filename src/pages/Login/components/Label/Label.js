import React from 'react';

const Label = ({ text, styles }) => {
  return (
    <label className={styles}>
      {text}
    </label>
  );
};

export default Label;