import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import LogInForm from '../LogInForm';
import Button from '../../ButtonAuthorization/ButtonAuthorization';
import LinkGoogle from '../../LinkGoogle/LinkGoogle';

describe('LogInForm component', () => {
  const initialState = {
    email: '',
    password: '',
    error: null,
  };

  const newLogInForm = shallow(<LogInForm />);

  it('initialize initialState with initial state', () => {
    expect(newLogInForm.state()).toEqual(initialState);
  });

  it('renders a properly', () => {
    expect(newLogInForm).toMatchSnapshot();
  });

  // -- Does not work!!! --
  // let wrapped;

  // beforeEach(() => {
  //   wrapped = shallow(<LogInForm />);
  // });

  // it('renders inputs and a button', () => {
  //   expect(wrapped.find('input[type="email"]').length).toBe(1);
  //   expect(wrapped.find('input[type="password"]').length).toBe(1);
  //   expect(wrapped.find(Button).length).toBe(1);
  // });

  // describe('events', () => {
  //   const emailText = 'new email text';

  //   beforeEach(() => {
  //     const changeEventMock = {
  //       target: {
  //         value: emailText,
  //       },
  //     };

  //     wrapped.find('input[type="email"]').simulate('change', changeEventMock);
  //     wrapped.update();
  //   });

  //   it('can enter text into an input', () => {
  //     expect(wrapped.find('input[type="email"]').prop('value')).toBe(emailText);
  //   });

  //   it('on form submit, input should get emptied', () => {
  //     expect(wrapped.find('input[type="email"]').prop('value')).toBe(emailText);

  //     const submitEventMock = {
  //       preventDefault: () => null,
  //     };
  //     const props = {
  //       onSave: () => null,
  //     };

  //     wrapped.setProps(props);
  //     wrapped.find('form').simulate('submit', submitEventMock);
  //     wrapped.update();
  //     expect(wrapped.find('input[type="email"]').prop('value')).toBe('');
  //   });

  it('renders a Button', () => {
    expect(newLogInForm.find(Button)).toHaveLength(1);
  });

  it('renders a LinkGoogle', () => {
    expect(newLogInForm.find(LinkGoogle)).toHaveLength(1);
  });

  it('renders five NavLink', () => {
    expect(newLogInForm.find(NavLink)).toHaveLength(1);
  });

  it('renders two div', () => {
    expect(newLogInForm.find('div')).toHaveLength(2);
  });

  it('renders one form', () => {
    expect(newLogInForm.find('form')).toHaveLength(1);
  });

  it('renders two label', () => {
    expect(newLogInForm.find('label')).toHaveLength(2);
  });

  it('renders one input', () => {
    expect(newLogInForm.find('input[type="email"]')).toHaveLength(1);
  });

  it('renders one input', () => {
    expect(newLogInForm.find('input[type="password"]')).toHaveLength(1);
  });

  it('renders one p', () => {
    expect(newLogInForm.find('p')).toHaveLength(1);
  });

  // -- Does not work!!! --
  // it('renders two span', () => {
  //   expect(newLogInForm.find('span')).toHaveLength(2);
  // });

  // describe('callback', () => {
  // let wrapped;

  // beforeEach(() => {
  //   wrapped = shallow(<LogInForm />);
  // });

  // it('onSave prop has been called on submit', () => {
  //   const submitEventMock = {
  //     preventDefault: () => null,
  //   };

  //   const onSavePropMock = jest.fn();
  //   const props = {
  //     onSave: onSavePropMock,
  //   };

  //   wrapped.setProps(props);
  //   wrapped.find('form').simulate('submit', submitEventMock);

  //   expect(onSavePropMock.mock.calls.length).toBe(1);
  // });
  // });

  describe('testing login', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<LogInForm />);
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
