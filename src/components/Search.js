import React, {useState} from "react";

function Search({searchFilter}) {
  const [searchBy, setSearchBy] = useState('');

  function handleChange(e){
    setSearchBy(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchFilter(searchBy)
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value={searchBy}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
