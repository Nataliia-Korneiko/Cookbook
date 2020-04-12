import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as recipesActions from '../../redux/recipes/recipesActions';
import s from './RecipeFilter.module.css';

const RecipeFilter = ({ value, onChangeFilter }) => (
  <input
    className={s.input}
    type="text"
    value={value}
    // onChange={onChangeFilter}
    onChange={e => onChangeFilter(e.target.value)}
    placeholder="Enter text"
  />
);

RecipeFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.recipes.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: value => dispatch(recipesActions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeFilter);
