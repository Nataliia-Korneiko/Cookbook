/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import Legend from '../Legend';

describe('Legend component', () => {
  const props = {
    items: [
      { level: 'low', color: '#4caf50' },
      { level: 'normal', color: '#2196f3' },
      { level: 'high', color: '#f44336' },
    ],
  };

  const newLegend = shallow(<Legend {...props} />);

  it('renders a properly', () => {
    expect(newLegend).toMatchSnapshot();
  });

  it('renders one ul', () => {
    expect(newLegend.find('ul')).toHaveLength(1);
  });

  it('renders three li', () => {
    expect(newLegend.find('li')).toHaveLength(3);
  });

  it('renders three i', () => {
    expect(newLegend.find('i')).toHaveLength(3);
  });
});
