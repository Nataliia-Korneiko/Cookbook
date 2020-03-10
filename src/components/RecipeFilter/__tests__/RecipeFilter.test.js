/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import RecipeFilter from '../RecipeFilter';

describe('RecipeFilter', () => {
  const props = {
    value: '',
    onChangeFilter: () => null,
  };

  const newRecipeFilter = shallow(<RecipeFilter {...props} />);

  it('renders a properly', () => {
    expect(newRecipeFilter).toMatchSnapshot();
  });

  it('renders one input', () => {
    expect(newRecipeFilter.find('input[type="text"]')).toHaveLength(1);
  });
});
