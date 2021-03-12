import {
  DEDUCTION_AFTER_MAX,
  DEDUCTION_BEFORE_MAX,
  MAX_FLAT_PRICE,
} from "./constants";
import { useEffect, useRef } from "react";

const getYearDeduction = (salary) => {
  return Math.floor(salary * 12 * 0.13);
};

const getMaxDeduction = (flatPrice) => {
  if (flatPrice < MAX_FLAT_PRICE) {
    return flatPrice * DEDUCTION_BEFORE_MAX;
  }

  return DEDUCTION_AFTER_MAX;
};

const getYearSuffix = (year) => {
  let lastNumber = String(year).slice(-2);
  if (lastNumber > 20 || lastNumber < 10) {
    lastNumber = String(lastNumber).slice(-1);
  }
  switch (Number(lastNumber)) {
    case 12:
    case 16:
    case 17:
    case 18:
      return "ый";
    case 2:
    case 6:
    case 7:
    case 8:
      return "ой";
    case 3:
      return "ий";
    default:
      return "ый";
  }
};

const getYearPrefix = (year) => {
  if (year === 2) {
    return "во";
  }

  return "в";
};

const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, [deps, func]);
};

export {
  getYearDeduction,
  getMaxDeduction,
  getYearSuffix,
  getYearPrefix,
  useDidMountEffect,
};
