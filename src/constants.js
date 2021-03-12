const FLAT_PRICE = 2000000;
const MIN_SALARY = 1000;
const MAX_FLAT_PRICE = 2000000;
const DEDUCTION_BEFORE_MAX = 0.13;
const DEDUCTION_AFTER_MAX = 260000;
const INPUT_EMPTY_MESSAGE = "Поле обязательно для заполнения";
const INPUT_MIN_PRICE_MESSAGE = "Укажите реальную зарплату";

const TagName = {
  PAYMENT: "payment",
  TERM: "term",
};

const tagButtons = [
  {
    name: TagName.PAYMENT,
    text: "Платеж",
  },
  {
    name: TagName.TERM,
    text: "Срок",
  },
];

export {
  TagName,
  tagButtons,
  FLAT_PRICE,
  MAX_FLAT_PRICE,
  DEDUCTION_AFTER_MAX,
  DEDUCTION_BEFORE_MAX,
  MIN_SALARY,
  INPUT_EMPTY_MESSAGE,
  INPUT_MIN_PRICE_MESSAGE,
};
