import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ButtonItem/ButtonItem';
import s from './RecipeItem.module.css';

const RecipeItem = ({
  text,
  description,
  level,
  createDate,
  editDate,
  onDeleteRecipe,
  onEditRecipe,
}) => (
  <div className={`${s.recipe} ${s[`${level}__level`]}`}>
    <div className={s.spans}>
      <span className={`${s.span} ${s.create__date}`}>{createDate}</span>
      <span className={`${s.span} ${s.edit__date}`}>{editDate}</span>
    </div>
    <div className={s.wrapper}>
      <h2 className={s.title}>{text}</h2>
      <p className={s.description}>{description}</p>
    </div>
    <div className={s.buttons}>
      <Button label="Edit" type="button" onClick={onEditRecipe} />
      <Button label="Delete" type="button" onClick={onDeleteRecipe} />
    </div>
  </div>
);

RecipeItem.defaultProps = {
  createDate: '',
  editDate: '',
};

RecipeItem.propTypes = {
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  createDate: PropTypes.string,
  editDate: PropTypes.string,
  onDeleteRecipe: PropTypes.func.isRequired,
  onEditRecipe: PropTypes.func.isRequired,
};

export default RecipeItem;
