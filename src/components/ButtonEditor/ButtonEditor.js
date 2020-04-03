/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import s from './ButtonEditor.module.css';

const Button = ({ type, label, onClick }) => {
  return (
    <button className={s.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => null,
};

export default Button;
