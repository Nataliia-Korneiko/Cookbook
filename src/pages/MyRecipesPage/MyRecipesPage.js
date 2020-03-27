import React, { Component } from 'react';
import shortid from 'shortid';
import RecipeEditor from '../../components/RecipeEditor/RecipeEditor';
import RecipeList from '../../components/RecipeList/RecipeList';
import RecipeFilter from '../../components/RecipeFilter/RecipeFilter';
import Modal from '../../components/Modal/Modal';
import Legend from '../../components/Legend/Legend';
import Level from '../../utils/Level';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import s from './MyRecipesPage.module.css';

const moment = require('moment');

const filterRecipes = (recipes, filter) => {
  return recipes.filter(recipe =>
    recipe.text.toLowerCase().includes(filter.toLowerCase()),
  );
};

const legendOptions = [
  { level: Level.LOW, color: '#4caf50' },
  { level: Level.NORMAL, color: '#2196f3' },
  { level: Level.HIGH, color: '#f44336' },
];

export default class MyRecipesPage extends Component {
  state = {
    recipes: [],
    filter: '',
    isCreating: false,
    isEditing: false,
    selectedRecipeId: null,
  };

  /* Get recipes */
  componentDidMount() {
    try {
      const messageError = 'Whoops, something went wrong!';
      const recipesToAdd = localStorage.getItem('recipes');

      if (recipesToAdd) {
        const recipes = JSON.parse(recipesToAdd);

        this.setState({ recipes });
      } else {
        throw new Error(messageError);
      }
    } catch (messageError) {
      console.error(messageError);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { recipes } = this.state;

    if (prevState.recipes !== recipes) {
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  /* Create recipe */
  openCreateModal = () => {
    this.setState({ isCreating: true });
  };

  closeCreateModal = () => {
    this.setState({ isCreating: false });
  };

  addRecipe = recipe => {
    const recipeToAdd = {
      ...recipe,
      id: shortid.generate(),
      createDate: moment().format('MMMM Do YYYY, h:mm:ss A'),
    };

    this.setState(
      state => ({
        recipes: [...state.recipes, recipeToAdd],
        // recipes: [recipeToAdd, ...state.recipes],
      }),
      this.closeCreateModal,
    );
  };

  /* Delete recipe */
  deleteRecipe = id => {
    this.setState(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id),
    }));
  };

  /* Update recipe */
  openEditModal = id => {
    this.setState({
      isEditing: true,
      selectedRecipeId: id,
    });
  };

  closeEditModal = () => {
    this.setState({
      isEditing: false,
      selectedRecipeId: null,
    });
  };

  updateRecipe = ({ text, description, level }) => {
    this.setState(
      state => ({
        recipes: state.recipes.map(recipe =>
          recipe.id === state.selectedRecipeId
            ? {
                ...recipe,
                text,
                description,
                level,
                editDate: moment().format('MMMM Do YYYY, h:mm:ss A'),
              }
            : recipe,
        ),
      }),
      this.closeEditModal,
    );
  };

  render() {
    const {
      recipes,
      filter,
      isCreating,
      isEditing,
      selectedRecipeId,
    } = this.state;
    const filteredRecipes = filterRecipes(recipes, filter);
    let recipeInEdit = null;
    if (isEditing) {
      recipeInEdit = recipes.find(recipe => recipe.id === selectedRecipeId);
    }

    return (
      <div className={s.wrapper}>
        <Header />
        <main className={`${s.main} ${s.container}`}>
          {/* <button
            className={s.recipes__button}
            type="button"
            onClick={this.openCreateModal}
          >
            Add recipe
          </button> */}
          <div className={s.control}>
            <Button
              label="Add recipe"
              type="button"
              onClick={this.openCreateModal}
            />
            {/* <div className={s.control__wrapper}> */}
            <RecipeFilter value={filter} onChangeFilter={this.changeFilter} />
            <Legend items={legendOptions} />
            {/* </div> */}
          </div>
          <RecipeList
            items={filteredRecipes}
            onDeleteRecipe={this.deleteRecipe}
            onEditRecipe={this.openEditModal}
          />
          {isCreating && (
            <Modal onClose={this.closeCreateModal}>
              <RecipeEditor
                onSave={this.addRecipe}
                onCancel={this.closeCreateModal}
              />
            </Modal>
          )}
          {isEditing && (
            <Modal onClose={this.closeEditModal}>
              <RecipeEditor
                onSave={this.updateRecipe}
                onCancel={this.closeEditModal}
                text={recipeInEdit.text}
                description={recipeInEdit.description}
                level={recipeInEdit.level}
                createDate={recipeInEdit.createDate}
                editDate={recipeInEdit.editDate}
              />
            </Modal>
          )}
        </main>
        <Footer />
      </div>
    );
  }
}
