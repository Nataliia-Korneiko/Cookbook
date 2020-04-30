/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import RecipeEditor from '../RecipeEditor';
import LevelSelector from '../../LevelSelector/LevelSelector';
import Button from '../../ButtonEditor/ButtonEditor';

describe('RecipeEditor component', () => {
  const props = {
    onSave: () => null,
    onCancel: () => null,
    text: '',
    description: '',
    level: 'normal',
    createDate: '',
    editDate: '',
  };

  const initialState = {
    text: '',
    description: '',
    level: 'normal',
    createDate: '',
    editDate: '',
  };

  const newRecipeEditor = shallow(<RecipeEditor {...props} />);

  it('initialize initialState with initial state', () => {
    expect(newRecipeEditor.state()).toEqual(initialState);
  });

  it('renders a properly', () => {
    expect(newRecipeEditor).toMatchSnapshot();
  });

  it('renders one form', () => {
    expect(newRecipeEditor.find('form')).toHaveLength(1);
  });

  it('renders three label', () => {
    expect(newRecipeEditor.find('label')).toHaveLength(3);
  });

  it('renders one input', () => {
    expect(newRecipeEditor.find('input[type="text"]')).toHaveLength(1);
  });

  it('renders one textarea', () => {
    expect(newRecipeEditor.find('textarea[name="description"]')).toHaveLength(
      1,
    );
  });

  it('renders one div', () => {
    expect(newRecipeEditor.find('div')).toHaveLength(1);
  });

  it('renders a LevelSelector', () => {
    expect(newRecipeEditor.find(LevelSelector)).toHaveLength(1);
  });

  it('renders a Button', () => {
    expect(newRecipeEditor.find(Button)).toHaveLength(2);
  });

  describe('callback', () => {
    let wrapped;

    beforeEach(() => {
      wrapped = shallow(<RecipeEditor />);
    });

    it('onSave prop has been called on submit', () => {
      const submitEventMock = {
        preventDefault: () => null,
      };
      const onSavePropMock = jest.fn();
      const props = {
        onSave: onSavePropMock,
      };

      wrapped.setProps(props);
      wrapped.find('form').simulate('submit', submitEventMock);
      expect(onSavePropMock.mock.calls.length).toEqual(1);
    });

    it('onCancel prop has been called on click', () => {
      const mockCallBack = jest.fn();
      const wrapped = shallow(<Button onClick={mockCallBack} />);

      wrapped.find('button').simulate('click');
      wrapped.update();
      expect(mockCallBack.mock.calls.length).toEqual(1);
      expect(newRecipeEditor.state('text')).toEqual('');
    });
  });

  describe('change input', () => {
    it('text check', () => {
      newRecipeEditor.find('input[type="text"]').simulate('change', {
        target: { name: 'text', value: 'test text' },
      });
      expect(newRecipeEditor.state('text')).toEqual('test text');
    });
  });
});
