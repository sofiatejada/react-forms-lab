import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onSearchChange, onSearchSubmit }) => (
  <div>
    <form onSubmit={onSearchSubmit} data-testid="search-form">
      <input 
        type="text" 
        value={search} 
        onChange={onSearchChange} 
        aria-label="search" />
      <button type="submit">Search</button>
    </form>
  </div>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default Search;
