import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from '../App';
import HomePage from '../../../pages/HomePage/HomePage';
import AboutPage from '../../../pages/AboutPage/AboutPage';
import MyRecipesPage from '../../../pages/MyRecipesPage/MyRecipesPage';
import LogInPage from '../../../pages/LogInPage/LogInPage';
import SignUpPage from '../../../pages/SignUpPage/SignUpPage';
import NotFoundPage from '../../../pages/NotFoundPage/NotFoundPage';

describe('App component', () => {
  const newApp = shallow(<App />);

  it('renders a properly', () => {
    expect(newApp).toMatchSnapshot();
  });

  it('render Route and invalid path should redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>,
    );

    expect(wrapper.find(HomePage)).toHaveLength(0);
    expect(wrapper.find(AboutPage)).toHaveLength(0);
    expect(wrapper.find(MyRecipesPage)).toHaveLength(0);
    expect(wrapper.find(LogInPage)).toHaveLength(0);
    expect(wrapper.find(SignUpPage)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });

  it('render Route and valid path should not redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    expect(wrapper.find(HomePage)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });

  it('render Route and valid path should not redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>,
    );

    expect(wrapper.find(AboutPage)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });

  it('render Route and valid path should not redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/my-recipes']}>
        <App />
      </MemoryRouter>,
    );

    expect(wrapper.find(MyRecipesPage)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });

  it('render Route and valid path should not redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/log-in']}>
        <App />
      </MemoryRouter>,
    );

    expect(wrapper.find(LogInPage)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });

  it('render Route and valid path should not redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/sign-up']}>
        <App />
      </MemoryRouter>,
    );

    expect(wrapper.find(SignUpPage)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });
});
