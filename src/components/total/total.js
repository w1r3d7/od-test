import React from 'react';
import {formatValue} from 'react-currency-input-field';

import {FLAT_PRICE} from '../../constants';
import {getMaxDeduction, getYearDeduction, getYearPrefix, getYearSuffix} from '../../utils';

import './total.css';


const InputField = ({value, year}) => {
  const formattedValue = formatValue({
    value: String(value),
    groupSeparator: ' ',
    suffix: ' рублей'
  });
  return (
      <div className="total__checkbox-wrapper">
        <input id={`total-checkbox-${year}`} type="checkbox" className="visually-hidden" defaultChecked />
        <label htmlFor={`total-checkbox-${year}`}>{formattedValue} {getYearPrefix(year)} {year}-{getYearSuffix(year)} год
        </label>
      </div>
  )
}

const Total = ({salary}) => {
  const maxDeduction = getMaxDeduction(FLAT_PRICE);
  const yearDeduction = getYearDeduction(salary);
  const years = Math.ceil(maxDeduction / yearDeduction);
  let value = yearDeduction;

  return (
      <>
        <h3 className="total__title">Итого можете внести в&nbsp;качестве досрочных:</h3>
        {
          new Array(years).fill('').map((item, idx, array) => {
            if (idx + 1 === array.length) {
              value = maxDeduction % yearDeduction;
            }
            return (
                <InputField key={idx * Math.random()} value={value} year={idx + 1} />
            )
          })
        }
      </>
  )
}

export default Total;
