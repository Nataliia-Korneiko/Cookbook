import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import Navigation from '../../Navigation/Navigation';

describe('Header component', () => {
  const newHeader = shallow(<Header />);

  it('renders a properly', () => {
    expect(newHeader).toMatchSnapshot();
  });

  it('renders one footer', () => {
    expect(newHeader.find('header')).toHaveLength(1);
  });

  it('renders a Navigation', () => {
    expect(newHeader.find(Navigation)).toHaveLength(1);
  });
});
