import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu';

describe('BurgerMenu component', () => {
  const newBurgerMenu = shallow(<BurgerMenu />);

  it('renders a properly', () => {
    expect(newBurgerMenu).toMatchSnapshot();
  });

  it('renders one input', () => {
    expect(newBurgerMenu.find('input[type="checkbox"]')).toHaveLength(1);
  });

  it('renders five div', () => {
    expect(newBurgerMenu.find('div')).toHaveLength(5);
  });

  it('renders one ul', () => {
    expect(newBurgerMenu.find('ul')).toHaveLength(1);
  });

  it('renders five li', () => {
    expect(newBurgerMenu.find('li')).toHaveLength(5);
  });

  it('renders five NavLink', () => {
    expect(newBurgerMenu.find(NavLink)).toHaveLength(5);
  });
});
