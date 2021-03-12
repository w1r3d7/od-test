import React, {useState} from 'react';
import CurrencyInput from 'react-currency-input-field';

import './tax-deduction-page.css';
import TextButton from '../text-button';
import Button from '../button';
import {INPUT_EMPTY_MESSAGE, INPUT_MIN_PRICE_MESSAGE, MIN_SALARY, TagName} from '../../constants';
import TagButtonsList from '../tag-buttons-list';
import Total from '../total';
import {useDidMountEffect} from '../../utils';


const TaxDeductionPage = ({onButtonClick}) => {
  const [activeTag, setActiveTag] = useState(TagName.PAYMENT);
  const [salary, setSalary] = useState();
  const [salaryError, setSalaryError] = useState(null);
  const [totalShowed, setTotalShowed] = useState(false);

  const cleanErrors = () => {
    if (salaryError) {
      setSalaryError('');
    }
  }

  useDidMountEffect(() => {
    if (salary < MIN_SALARY) {
      return setSalaryError(INPUT_MIN_PRICE_MESSAGE);
    }
  }, [salary])

  const handleTagButtonClick = (name) => {
    setActiveTag(name)
  }

  const handleCalculateButtonClick = () => {
    if (!salary) {
      return setSalaryError(INPUT_EMPTY_MESSAGE);
    }

    if (!salaryError) {
      setTotalShowed(true);
    }
  }

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (totalShowed) {
      onButtonClick();
    }
  }

  const handleSalaryInputChange = (value) => {
    cleanErrors();
    setTotalShowed(false);
    setSalary(value);
  }

  const totalBlock = (
      <div className="tax-deduction__form-total">
        <Total salary={salary} />
      </div>
  );

  const salaryInputMessageField = <span className="tax-deduction__form-salary-span">{salaryError}</span>;

  const salaryInputClass = () => {
    let inputClass = 'tax-deduction__form-salary-input';
    if (salaryError) {
      inputClass += ' tax-deduction__form-salary-input--error';
    }

    return inputClass;
  }

  return (
      <div className="tax-deduction">
        <h2 className="tax-deduction__title">Налоговый вычет</h2>
        <p className="tax-deduction__description">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не&nbsp;более&nbsp;13% от своего официального годового дохода.</p>
        <form className="tax-deduction__form" onSubmit={handleFormSubmit}>
          <div className={salaryInputClass()}>
            <label htmlFor="salary-field">Ваша зарплата в месяц</label>
            <CurrencyInput
                suffix=" ₽"
                id="salary-field"
                placeholder="Введите данные"
                name="salary"
                onValueChange={handleSalaryInputChange}
                groupSeparator=' '
                value={salary}
            />
            {salaryError && salaryInputMessageField}
          </div>
          <TextButton
              text="Рассчитать"
              onButtonClick={handleCalculateButtonClick}
              additionClass="tax-deduction__calculate-button" />
          {totalShowed && totalBlock}
          <div className="tax-deduction__tags">
            <h3 className="tax-deduction__tags-title">Что уменьшаем?</h3>
            <div className="tax-deduction__tags-wrapper">
              {
                <TagButtonsList active={activeTag} onTagButtonClick={handleTagButtonClick} />
              }
            </div>
          </div>
          <Button text="Добавить" type="submit" fill />
        </form>
      </div>
  )
}

export default TaxDeductionPage;
