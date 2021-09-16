import React from "react";
import PropTypes from 'prop-types';

const Search = ({ search, onSearchChange }) => (
  <div>
    <input type="text" value={search} onChange={onSearchChange} aria-label="search" />
  </div>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};
