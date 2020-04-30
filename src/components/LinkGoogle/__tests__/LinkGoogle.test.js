/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import LinkGoogle from '../LinkGoogle';

describe('LinkGoogle component', () => {
  const newLinkGoogle = shallow(<LinkGoogle />);

  it('renders a properly', () => {
    expect(newLinkGoogle).toMatchSnapshot();
  });

  it('renders one a', () => {
    expect(
      newLinkGoogle.find('a[href="https://www.google.com.ua/"]'),
    ).toHaveLength(1);
  });

  it('renders one div', () => {
    expect(newLinkGoogle.find('div')).toHaveLength(1);
  });

  it('renders one span', () => {
    expect(newLinkGoogle.find('span')).toHaveLength(1);
  });
});
