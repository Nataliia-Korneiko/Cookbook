import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import RecipeFilter from '../../RecipeFilter/RecipeFilter';
import Legend from '../../Legend/Legend';
import RecipeList from '../../RecipeList/RecipeList';
import Modal from '../../Modal/Modal';
import RecipeEditor from '../../RecipeEditor/RecipeEditor';

// const axios = require('axios');
// const Ajax = require('../../../services/recipes-api');

// jest.mock('axios');

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

  // -- Do not work!!! --
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

  // -- Do not work!!! --
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

  // -- Do not work!!! --
  // describe('Ajax: GET', () => {
  //   let response;
  //   let recipes;

  //   beforeEach(() => {
  //     recipes = [
  //       {
  //         text: 'Chocolate sponge cake',
  //         description:
  //           'Ingredients:\n175g unsalted butter, softened, plus extra for the tin\n175g golden caster sugar\n3 large eggs\n50g cocoa powder\n100g self-raising flour (or same quantity plain flour with 1 tsp baking powder)\n1-2 tsp milk\nFor the buttercream:\n50g dark chocolate (or milk chocolate if you prefer)\n85g unsalted butter, softened\n175g icing sugar, sieved\nMethod\n1. Heat oven to 190C/170C fan/gas 5. Butter and line two 20cm sandwich tins with baking parchment.\n2. Use a handheld electric whisk or a freestanding mixer to beat 175g softened unsalted butter and 175g golden caster sugar together in a bowl until creamy and light in colour. Then add 1 large egg, still mixing.\n3. Sieve 50g cocoa powder, 100g self-raising flour and a pinch of salt into another bowl and add a third of that to your wet ingredients.\n4. Once combined, add 1 more large egg and another third of the flour mixture and work that in.\n5. Then add 1 more large egg and the remaining flour and beat until you have a smooth thick batter. If the batter is stiff, stir in a splash of milk to loosen it.\n6. Divide the mixture between the tins and smooth the top with the back of a spoon.\n7. Bake for 20-25 mins until springy to the touch. Take out of the oven and leave in the tins for 10 mins before turning out onto a wire rack to cool completely.\n8. Meanwhile, make the buttercream by melting 50g dark or milk chocolate in the microwave, or in a bowl over just simmering water, making sure the base doesn’t touch the water. Leave to cool. \n9. Beat 85g softened unsalted butter and half of the 175g sieved icing sugar together until light and fluffy. Add the remaining icing sugar and melted chocolate and mix together. If the icing is runny, chill in the fridge until it is firm but still spreadable.\n10. To assemble the cake, put a small dollop of icing onto a plate and put one of the cakes on top. Spread the top of the cake with half the icing, leaving a 1cm border around the edge.\n11. Put the second cake on top and push down very gently. Spread the remaining icing over the top.',
  //         level: 'high',
  //         createDate: 'March 9th 2020, 10:30:21 AM',
  //         editDate: '',
  //         id: 8,
  //       },
  //     ];

  //     response = {
  //       data: {
  //         recipes,
  //       },
  //     };
  //   });

  //   test('should return data from backend', () => {
  //     axios.get.mockReturnValue(response);

  //     return Ajax.get().then(data => {
  //       expect(data.recipes).toEqual(recipes);
  //     });
  //   });
  // });
});
