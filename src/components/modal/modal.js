import React from "react";

import "./modal.css";

const Modal = ({ children, onButtonClick }) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <button
          onClick={onButtonClick}
          className="modal__content-close-button"
          aria-label="Закрыть окно"
        >
          <span className="visually-hidden">Закрыть окно</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
