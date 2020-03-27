/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ type = 'button', label = '', onClick = () => null }) => {
  return (
    <button className={s.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
