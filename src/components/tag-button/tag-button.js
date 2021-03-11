import React from 'react';

import './tag-button.css';

const TagButton = ({text, active, additionClass, name, onButtonClick}) => {
  let buttonClass = 'tag-button';

  if (active) {
    buttonClass += ' tag-button--active';
  }

  if (additionClass) {
    buttonClass += ` ${additionClass}`;
  }

  return (
      <button
          onClick={() => onButtonClick(name)}
          className={buttonClass}
          name={name ? name : null}
          type="button">
        {text}
      </button>
  )
};

export default TagButton;
