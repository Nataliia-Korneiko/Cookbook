/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import RecipeItem from '../RecipeItem';

describe('Recipe component', () => {
  const props = {
    text: '',
    description: '',
    level: '',
    createDate: '',
    editDate: '',
    onDeleteRecipe: () => null,
    onEdit: () => null,
  };

  const newRecipe = shallow(<RecipeItem {...props} />);

  it('renders a properly', () => {
    expect(newRecipe).toMatchSnapshot();
  });

  it('renders four div', () => {
    expect(newRecipe.find('div')).toHaveLength(4);
  });

  it('renders two span', () => {
    expect(newRecipe.find('span')).toHaveLength(2);
  });

  it('renders one h2', () => {
    expect(newRecipe.find('h2.recipe__title')).toHaveLength(1);
  });

  it('renders one p', () => {
    expect(newRecipe.find('p.recipe__description')).toHaveLength(1);
  });

  it('renders two button', () => {
    expect(newRecipe.find('button.recipe__button')).toHaveLength(2);
  });
});
