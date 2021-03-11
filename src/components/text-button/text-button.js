import React from 'react';

import './text-button.css';

const TextButton = ({text, onButtonClick, additionClass}) => {
  let buttonClass = 'text-button';

  if (additionClass) {
    buttonClass += ` ${additionClass}`;
  }
  return (
      <button
          className={buttonClass}
          type="button"
          onClick={onButtonClick}
      >{text}</button>
  );
}



export default TextButton;
