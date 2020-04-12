/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import * as recipesActions from '../../redux/recipes/recipesActions';
import RecipeItem from '../RecipeItem/RecipeItem';
import s from './RecipeList.module.css';

// const RecipeList = ({ items, onDeleteRecipe, onEditRecipe }) =>
const RecipeList = ({ items }) =>
  items.length > 0 && (
    <ul className={s.list}>
      {items.map(item => (
        <li className={s.item} key={item.id}>
          <RecipeItem
            id={item.id}
            // {...item}
            // onDeleteRecipe={() => onDeleteRecipe(item.id)}
            // onEditRecipe={() => onEditRecipe(item.id)}
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

// const filterRecipes = (recipes, filter) => {
//   return recipes.filter(recipe =>
//     recipe.text.toLowerCase().includes(filter.toLowerCase()),
//   );
// };

// REPETA
// const mapStateToProps = state => {
//   const normalizedFilter = state.recipes.filter.toLowerCase();

//   const visibleRecipes = state.recipes.data.filter(recipe =>
//     recipe.text.toLowerCase().includes(normalizedFilter),
//   );

//   return {
//     items: visibleRecipes,
//   };
// };

const mapStateToProps = state => ({
  items: state.recipes.data.filter(recipe =>
    recipe.text.toLowerCase().includes(state.recipes.filter.toLowerCase()),
  ),
});

// const mapDispatchToProps = dispatch => ({
//   onDeleteRecipe: id => dispatch(recipesActions.deleteRecipe(id)),
//   onEditRecipe: id => dispatch(recipesActions.updateRecipe(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
export default connect(mapStateToProps)(RecipeList);
