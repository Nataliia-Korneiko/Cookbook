/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import ButtonAuthorization from '../ButtonAuthorization';

describe('ButtonAuthorization component', () => {
  const props = {
    type: '',
    label: '',
    onClick: () => null,
  };

  const newButtonAdd = shallow(<ButtonAuthorization {...props} />);

  it('renders a properly', () => {
    expect(newButtonAdd).toMatchSnapshot();
  });

  it('renders one button', () => {
    expect(newButtonAdd.find('button')).toHaveLength(1);
  });

  describe('callback', () => {
    it('onClick prop has been called on click', () => {
      const mockCallBack = jest.fn();
      const wrapped = shallow(<ButtonAuthorization onClick={mockCallBack} />);

      wrapped.find('button').simulate('click');
      wrapped.update();
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
