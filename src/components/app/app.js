import React, {useState} from 'react';
import {FirstPage, TaxDeductionPage} from '../pages';
import Modal from '../modal';

const App = () => {
  const [isInsideApp, setIsInsideApp] = useState(true);

  const handleTaxDeductionButtonClick = () => {
    setIsInsideApp((prevState) => !prevState);
  };

  return (
      <>
        {isInsideApp ?
            <FirstPage onButtonClick={handleTaxDeductionButtonClick} />
        :
            <Modal onButtonClick={handleTaxDeductionButtonClick}>
              <TaxDeductionPage onButtonClick={handleTaxDeductionButtonClick} />
            </Modal>
        }
      </>
  );
}



export default App;
