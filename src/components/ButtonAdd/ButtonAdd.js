/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import s from './ButtonAdd.module.css';

const Button = ({ type, label, onClick }) => {
  return (
    <button className={s.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: '',
  label: '',
  onClick: () => null,
};

export default Button;
