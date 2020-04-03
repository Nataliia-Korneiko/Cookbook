/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LevelSelector from '../LevelSelector/LevelSelector';
import Level from '../../utils/Level';
import Button from '../ButtonEditor/ButtonEditor';
import s from './RecipeEditor.module.css';

const options = Object.values(Level);

export default class RecipeEditor extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    text: PropTypes.string,
    description: PropTypes.string,
    level: PropTypes.string,
    createDate: PropTypes.string,
    editDate: PropTypes.string,
  };

  static defaultProps = {
    text: '',
    description: '',
    level: Level.NORMAL,
    createDate: '',
    editDate: '',
  };

  state = {
    text: this.props.text,
    description: this.props.description,
    level: this.props.level,
    createDate: this.props.createDate,
    editDate: this.props.editDate,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave({ ...this.state });

    this.setState({
      text: '',
      description: '',
      level: Level.NORMAL,
      createDate: '',
      editDate: '',
    });
  };

  render() {
    const { text, description, level } = this.state;
    const { onCancel } = this.props;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          <input
            className={s.input}
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
            placeholder="Enter the name of the recipe"
          />
        </label>

        <label className={`${s.label} ${s.label__description}`}>
          <textarea
            className={s.textarea}
            name="description"
            value={description}
            onChange={this.handleChange}
            placeholder="Enter the description for your recipe"
          />
        </label>

        <label className={`${s.label} ${s.label__level}`}>
          Select the recipe difficulty level:
          <LevelSelector
            options={options}
            value={level}
            onChange={this.handleChange}
          />
        </label>

        <div className={s.buttons}>
          <Button label="Save" type="submit" />
          <Button label="Cancel" type="button" onClick={onCancel} />
        </div>
      </form>
    );
  }
}
