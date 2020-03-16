/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from '../RecipeList';
import Recipe from '../../Recipe/Recipe';

describe('RecipeList component', () => {
  const props = {
    items: [{ id: 1 }],
    onDeleteRecipe: () => null,
    onEditRecipe: () => null,
  };

  const newRecipeList = shallow(<RecipeList {...props} />);

  it('renders a properly', () => {
    expect(newRecipeList).toMatchSnapshot();
  });

  it('renders one ul', () => {
    expect(newRecipeList.find('ul.recipes__list')).toHaveLength(1);
  });

  it('renders three li', () => {
    expect(newRecipeList.find('li.recipes__item')).toHaveLength(1);
  });

  it('renders a Recipe', () => {
    expect(newRecipeList.find(Recipe)).toHaveLength(1);
  });
});
