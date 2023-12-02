import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label>
      Find contact by name
      <input
        className={css.inputFilter}
        type="text"
        value={filter}
        onChange={e => onChangeFilter(e.target.value)}
        placeholder="Search contact"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
