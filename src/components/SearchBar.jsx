import React from "react";
import PropTypes from "prop-types";

function SearchBar(props) {
  const { keyword, keywordChange } = props;
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul ..."
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
      />
    </section>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
