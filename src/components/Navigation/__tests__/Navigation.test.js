import React from 'react';
import { shallow } from 'enzyme';
import { Link, NavLink } from 'react-router-dom';
import Navigation from '../Navigation';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';

describe('Navigation component', () => {
  const newNavigation = shallow(<Navigation />);

  it('renders a properly', () => {
    expect(newNavigation).toMatchSnapshot();
  });

  it('renders one Link', () => {
    expect(newNavigation.find(Link)).toHaveLength(1);
  });

  it('renders five NavLink', () => {
    expect(newNavigation.find(NavLink)).toHaveLength(5);
  });

  it('renders one BurgerMenu', () => {
    expect(newNavigation.find(BurgerMenu)).toHaveLength(1);
  });

  it('renders one nav', () => {
    expect(newNavigation.find('nav')).toHaveLength(1);
  });

  it('renders one img', () => {
    expect(newNavigation.find('img')).toHaveLength(1);
  });

  it('renders one ul', () => {
    expect(newNavigation.find('ul')).toHaveLength(1);
  });

  it('renders five li', () => {
    expect(newNavigation.find('li')).toHaveLength(5);
  });

  it('renders one div', () => {
    expect(newNavigation.find('div')).toHaveLength(1);
  });
});
