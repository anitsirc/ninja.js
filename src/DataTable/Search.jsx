import React from 'react'

const Search = ({ onSearch }) => (
  <div className="p-b-1">
    <input
      type="search"
      className="form-control"
      placeholder="Søg brugere"
      onChange={(event) => { onSearch(event.target.value) } } />
  </div>
)

export default Search
