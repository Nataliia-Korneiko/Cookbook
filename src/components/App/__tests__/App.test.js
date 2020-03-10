import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import RecipeFilter from '../../RecipeFilter/RecipeFilter';
import Legend from '../../Legend/Legend';
import RecipeList from '../../RecipeList/RecipeList';
import Modal from '../../Modal/Modal';
import RecipeEditor from '../../RecipeEditor/RecipeEditor';

describe('App component', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it('renders a RecipeFilter', () => {
    expect(wrapped.find(RecipeFilter).length).toBe(1);
  });

  it('renders a Legend', () => {
    expect(wrapped.find(Legend).length).toBe(1);
  });

  it('renders a RecipeList', () => {
    expect(wrapped.find(RecipeList).length).toBe(1);
  });

  it('renders a Modal when isCreating: true', () => {
    wrapped.setState({ isCreating: true });

    expect(wrapped.find(Modal).length).toBe(1);
  });

  it('does not render a Modal when isCreating: false', () => {
    wrapped.setState({ isCreating: false });

    expect(wrapped.find(Modal).length).toBe(0);
  });

  // it('renders a Modal when isEditing: true', () => {
  //   wrapped.setState({ isEditing: true });

  //   expect(wrapped.find(Modal).length).toBe(1);
  // });

  it('does not render a Modal when isEditing: false', () => {
    wrapped.setState({ isEditing: false });

    expect(wrapped.find(Modal).length).toBe(0);
  });

  it('renders a RecipeEditor when isCreating: true', () => {
    wrapped.setState({ isCreating: true });

    expect(wrapped.find(RecipeEditor).length).toBe(1);
  });

  it('does not render a RecipeEditor when isCreating: false', () => {
    wrapped.setState({ isCreating: false });

    expect(wrapped.find(RecipeEditor).length).toBe(0);
  });

  // it('renders a RecipeEditor when isEditing: true', () => {
  //   wrapped.setState({ isEditing: true });

  //   expect(wrapped.find(RecipeEditor).length).toBe(1);
  // });

  it('does not render a RecipeEditor when isEditing: false', () => {
    wrapped.setState({ isEditing: false });

    expect(wrapped.find(RecipeEditor).length).toBe(0);
  });

  it('renders one header', () => {
    expect(wrapped.find('header.recipes__header').length).toBe(1);
  });

  it('renders one main', () => {
    expect(wrapped.find('main.recipes__main').length).toBe(1);
  });

  it('renders five div', () => {
    expect(wrapped.find('div').length).toBe(5);
  });

  it('renders one button', () => {
    expect(wrapped.find('button[type="button"]').length).toBe(1);
  });

  it('renders one p', () => {
    expect(wrapped.find('p.recipes__description').length).toBe(1);
  });
});
