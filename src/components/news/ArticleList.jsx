import React from 'react';
import { PropTypes } from 'prop-types';
import Article from './Article';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => (
  <ul aria-label="articles">
    {articles.map((article) => (
      <li>
        <Link>
          <Article title={article.title} author={article.author} description={article.description} />
        </Link>
      </li>
    ))}
  </ul>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  )
}
