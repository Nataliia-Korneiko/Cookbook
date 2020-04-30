import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import SignUpForm from '../SignUpForm';
import Button from '../../ButtonAuthorization/ButtonAuthorization';
import LinkGoogle from '../../LinkGoogle/LinkGoogle';

describe('SignUpForm component', () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    error: null,
  };

  const newSignUpForm = shallow(<SignUpForm />);

  it('initialize initialState with initial state', () => {
    expect(newSignUpForm.state()).toEqual(initialState);
  });

  it('renders a properly', () => {
    expect(newSignUpForm).toMatchSnapshot();
  });

  it('renders a Button', () => {
    expect(newSignUpForm.find(Button)).toHaveLength(1);
  });

  it('renders a LinkGoogle', () => {
    expect(newSignUpForm.find(LinkGoogle)).toHaveLength(1);
  });

  it('renders one NavLink', () => {
    expect(newSignUpForm.find(NavLink)).toHaveLength(1);
  });

  it('renders two div', () => {
    expect(newSignUpForm.find('div')).toHaveLength(2);
  });

  it('renders one form', () => {
    expect(newSignUpForm.find('form')).toHaveLength(1);
  });

  it('renders three label', () => {
    expect(newSignUpForm.find('label')).toHaveLength(3);
  });

  it('renders one input', () => {
    expect(newSignUpForm.find('input[type="text"]')).toHaveLength(1);
  });

  it('renders one input', () => {
    expect(newSignUpForm.find('input[type="email"]')).toHaveLength(1);
  });

  it('renders one input', () => {
    expect(newSignUpForm.find('input[type="password"]')).toHaveLength(1);
  });

  it('renders one p', () => {
    expect(newSignUpForm.find('p')).toHaveLength(1);
  });

  describe('testing register', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<SignUpForm />);
    });

    it('name check', () => {
      wrapper.find('input[type="text"]').simulate('change', {
        target: { name: 'name', value: 'testname' },
      });

      expect(wrapper.state('name')).toEqual('testname');
    });

    it('email check', () => {
      wrapper.find('input[type="email"]').simulate('change', {
        target: { name: 'email', value: 'test@.ukr.net' },
      });

      expect(wrapper.state('email')).toEqual('test@.ukr.net');
    });

    it('password check', () => {
      wrapper.find('input[type="password"]').simulate('change', {
        target: { name: 'password', value: '123456' },
      });

      expect(wrapper.state('password')).toEqual('123456');
    });
  });
});
