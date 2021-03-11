import React from 'react';
import Button from '../button';

import './first-page.css';

const FirstPage = ({onButtonClick}) => (
  <div className="first-page">
    <Button text="Налоговый вычет" onButtonClick={onButtonClick} />
  </div>
);

export default FirstPage;
