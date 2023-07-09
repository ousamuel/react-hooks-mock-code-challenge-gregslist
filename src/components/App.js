import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingsData, setListingsData] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [deleted, setDeleted] = useState([]);
  function handleDeleted(list){
    setDeleted(list)
  }
  useEffect(() => {
    fetchData();
  }, [deleted]);
  //if i did listingsData as the depedency, it would fetch nonstop

  async function fetchData() {
    const res = await fetch("http://localhost:6001/listings");
    const data = await res.json();
    setListingsData(data);
    setFilteredListings(data);
  }

  function searchFilter(searchWord){
    setFilteredListings(listingsData.filter(listing =>{
      return(listing.description.toLowerCase().includes(searchWord.toLowerCase()))
    }))
  }
  return (
    <div className="app">
      <Header searchFilter={searchFilter}/>
      <ListingsContainer listingsData={filteredListings} deleted={handleDeleted}/>
    </div>
  );
}

export default App;
