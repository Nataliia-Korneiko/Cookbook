/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import LevelSelector from '../LevelSelector';

describe('LevelSelector', () => {
  const props = {
    options: ['low', 'normal', 'high'],
    value: '',
    onChange: () => null,
  };

  const newLevelSelector = shallow(<LevelSelector {...props} />);

  it('renders a properly', () => {
    expect(newLevelSelector).toMatchSnapshot();
  });

  it('renders one select', () => {
    expect(newLevelSelector.find('select[name="level"]')).toHaveLength(1);
  });

  it('renders three options', () => {
    expect(newLevelSelector.find('option')).toHaveLength(3);
  });
});
