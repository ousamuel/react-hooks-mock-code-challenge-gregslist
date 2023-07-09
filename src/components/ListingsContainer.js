import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsData, deleted}) {

  const allListings = listingsData.map(list =>{
    return <ListingCard key={list.id + "a"} list={list} deleted={deleted}/>
  })
  // console.log(allListings);
  return (
    <main>
      <ul className="cards">
        {allListings}
        {/* <ListingCard/> */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
