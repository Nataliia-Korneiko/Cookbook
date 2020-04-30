import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('Footer component', () => {
  const newFooter = shallow(<Footer />);

  it('renders a properly', () => {
    expect(newFooter).toMatchSnapshot();
  });

  it('renders one footer', () => {
    expect(newFooter.find('footer')).toHaveLength(1);
  });

  it('renders one div', () => {
    expect(newFooter.find('div')).toHaveLength(1);
  });

  it('renders one p', () => {
    expect(newFooter.find('p')).toHaveLength(1);
  });
});
