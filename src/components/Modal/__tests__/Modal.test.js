/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../Modal';

describe('Modal component', () => {
  const props = {
    children: '',
    onClose: () => null,
  };

  const newModal = shallow(<Modal {...props} />);

  it('renders a properly', () => {
    expect(newModal).toMatchSnapshot();
  });

  it('renders two div', () => {
    expect(newModal.find('div')).toHaveLength(2);
  });
});
