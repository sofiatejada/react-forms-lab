import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import Article from '../news/Article';
import ArticleList from '../news/ArticleList';
import Search from '../news/Search';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Article component', () => {
  it('displays an article', () => {
    render(
      <Article 
        title="Look at all those chickens" 
        author="Pikachu" 
        description="It's actually a flock of geese..." />
    );

    const article = screen.getByText('It\'s actually a flock of geese...');
    expect(article).toMatchSnapshot();
  });
});

describe('ArticleList component', () => {
  it('displays a list of articles', () => {
    render(
      <ArticleList
        articles={[
          {
            title: 'I can\'t swim',
            author: 'Raven',
            description: 'It\'s her birthday but she can\'t swim'
          },
          {
            title: 'What did you do?',
            author: 'Grandma',
            description: 'I do nothing wrong in the playroom :['
          }
        ]} 
      />
    );

    const ul = screen.getByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();
  });
});

describe('Search', () => {
  it('displays form with one input and a button', () => {
    render(
      <Search 
        search="Memes"
        onSearchChange="{() => {}}"
        onSearchSubmit="{() => {}}"
      />
    );

    const searchForm = screen.getByTestId('search-form');
    expect(searchForm).toMatchSnapshot();
  });
});
