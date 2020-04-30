/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from '../RecipeList';
import RecipeItem from '../../RecipeItem/RecipeItem';

describe('RecipeList component', () => {
  const props = {
    items: [{ id: 'aHe4TE8yr' }],
    onDeleteRecipe: () => null,
    onEditRecipe: () => null,
  };

  const newRecipeList = shallow(<RecipeList {...props} />);

  it('renders a properly', () => {
    expect(newRecipeList).toMatchSnapshot();
  });

  it('renders one ul', () => {
    expect(newRecipeList.find('ul')).toHaveLength(1);
  });

  it('renders three li', () => {
    expect(newRecipeList.find('li')).toHaveLength(1);
  });

  it('renders a RecipeItem', () => {
    expect(newRecipeList.find(RecipeItem)).toHaveLength(1);
  });
});
