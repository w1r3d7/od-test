import React from 'react';

import './button.css';

const Button = ({text, fill, type = 'button', onButtonClick}) => {
  let buttonClass = 'button';
  if (fill) {
    buttonClass += ' button--fill';
  }
  return (
      <button
          onClick={onButtonClick}
          type={type}
          className={buttonClass}>
        {text}
      </button>
  )
}

export default Button;
