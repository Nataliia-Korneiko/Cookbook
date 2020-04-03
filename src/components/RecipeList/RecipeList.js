/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import RecipeItem from '../RecipeItem/RecipeItem';
import s from './RecipeList.module.css';

const RecipeList = ({ items, onDeleteRecipe, onEditRecipe }) =>
  items.length > 0 && (
    <ul className={s.list}>
      {items.map(item => (
        <li className={s.item} key={item.id}>
          <RecipeItem
            {...item}
            onDeleteRecipe={() => onDeleteRecipe(item.id)}
            onEditRecipe={() => onEditRecipe(item.id)}
          />
        </li>
      ))}
    </ul>
  );

RecipeList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteRecipe: PropTypes.func.isRequired,
};

export default RecipeList;
