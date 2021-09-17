import React from 'react';
import { PropTypes } from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
  <ul aria-label="articles">
    {articles.map((article, index) => (
      <li key={`${article}-${index}`}>
        <Article 
          title={article.title} 
          author={article.author ? article.author : 'No Author'} 
          description={article.description} />
      </li>
    ))}
  </ul>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      description: PropTypes.string.isRequired,
    })
  )
};

export default ArticleList;
