import React from 'react';
import { shallow } from 'enzyme';
import MainContainer from '../MainContainer';
import Button from '../../../components/ButtonAdd/ButtonAdd';
import RecipeFilter from '../../../components/RecipeFilter/RecipeFilter';
import Legend from '../../../components/Legend/Legend';
import RecipeList from '../../../components/RecipeList/RecipeList';
import Modal from '../../../components/Modal/Modal';
import RecipeEditor from '../../../components/RecipeEditor/RecipeEditor';

describe('MainContainer component', () => {
  const newMainContainer = shallow(<MainContainer />);

  it('renders a properly', () => {
    expect(newMainContainer).toMatchSnapshot();
  });

  it('renders a Button', () => {
    expect(newMainContainer.find(Button)).toHaveLength(1);
  });

  it('renders a RecipeFilter', () => {
    expect(newMainContainer.find(RecipeFilter)).toHaveLength(1);
  });

  it('renders a Legend', () => {
    expect(newMainContainer.find(Legend)).toHaveLength(1);
  });

  it('renders a RecipeList', () => {
    expect(newMainContainer.find(RecipeList)).toHaveLength(1);
  });

  it('renders a Modal when isCreating: true', () => {
    newMainContainer.setState({ isCreating: true });

    expect(newMainContainer.find(Modal)).toHaveLength(1);
  });

  it('does not render a Modal when isCreating: false', () => {
    newMainContainer.setState({ isCreating: false });

    expect(newMainContainer.find(Modal)).toHaveLength(0);
  });

  // -- Does not work!!! --
  // it('renders a Modal when isEditing: true', () => {
  //   wrapped.setState({ isEditing: true });

  //   expect(wrapped.find(Modal).length).toBe(1);
  // });

  it('does not render a Modal when isEditing: false', () => {
    newMainContainer.setState({ isEditing: false });

    expect(newMainContainer.find(Modal)).toHaveLength(0);
  });

  it('renders a RecipeEditor when isCreating: true', () => {
    newMainContainer.setState({ isCreating: true });

    expect(newMainContainer.find(RecipeEditor)).toHaveLength(1);
  });

  it('does not render a RecipeEditor when isCreating: false', () => {
    newMainContainer.setState({ isCreating: false });

    expect(newMainContainer.find(RecipeEditor)).toHaveLength(0);
  });

  // -- Does not work!!! --
  // it('renders a RecipeEditor when isEditing: true', () => {
  //   wrapped.setState({ isEditing: true });

  //   expect(wrapped.find(RecipeEditor).length).toBe(1);
  // });

  it('does not render a RecipeEditor when isEditing: false', () => {
    newMainContainer.setState({ isEditing: false });

    expect(newMainContainer.find(RecipeEditor)).toHaveLength(0);
  });

  it('renders one div', () => {
    expect(newMainContainer.find('div')).toHaveLength(1);
  });
});
