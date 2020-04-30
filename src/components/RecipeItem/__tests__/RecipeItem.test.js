/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import RecipeItem from '../RecipeItem';
import Button from '../../ButtonItem/ButtonItem';

describe('RecipeItem component', () => {
  const props = {
    text: '',
    description: '',
    level: '',
    createDate: '',
    editDate: '',
    onDeleteRecipe: () => null,
    onEditRecipe: () => null,
  };

  const newRecipeItem = shallow(<RecipeItem {...props} />);

  it('renders a properly', () => {
    expect(newRecipeItem).toMatchSnapshot();
  });

  it('renders four div', () => {
    expect(newRecipeItem.find('div')).toHaveLength(4);
  });

  it('renders two span', () => {
    expect(newRecipeItem.find('span')).toHaveLength(2);
  });

  it('renders one h2', () => {
    expect(newRecipeItem.find('h2')).toHaveLength(1);
  });

  it('renders one p', () => {
    expect(newRecipeItem.find('p')).toHaveLength(1);
  });

  it('renders two Button', () => {
    expect(newRecipeItem.find(Button)).toHaveLength(2);
  });
});
