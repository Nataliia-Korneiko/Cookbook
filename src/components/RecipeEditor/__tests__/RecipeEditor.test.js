/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import RecipeEditor from '../RecipeEditor';
import LevelSelector from '../../LevelSelector/LevelSelector';

it('RecipeEditor renders a LevelSelector', () => {
  const wrapped = shallow(<RecipeEditor />);

  expect(wrapped.find(LevelSelector).length).toBe(1);
});

describe('RecipeEditor', () => {
  const props = {
    onSave: () => null,
    onCancel: () => null,
    text: '',
    description: '',
    level: '',
    createDate: '',
    editDate: '',
  };

  const newRecipeEditor = shallow(<RecipeEditor {...props} />);

  it('renders a properly', () => {
    expect(newRecipeEditor).toMatchSnapshot();
  });

  it('renders one form', () => {
    expect(newRecipeEditor.find('form.recipes__form')).toHaveLength(1);
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
    expect(newRecipeEditor.find('div.recipes__buttons')).toHaveLength(1);
  });

  it('renders one button', () => {
    expect(newRecipeEditor.find('button[type="submit"]')).toHaveLength(1);
  });

  it('renders one button', () => {
    expect(newRecipeEditor.find('button[type="button"]')).toHaveLength(1);
  });
});
