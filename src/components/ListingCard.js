import React, { useState } from "react";

function ListingCard({ list, deleted }) {
  const [favorited, setFavorited] = useState(false);
  function handleClick() {
    setFavorited(!favorited);
  }
  function handleDelete(list) {
    let url = `http://localhost:6001/listings/${list.id}`
    deleteRequest(url)
    deleted(list)
    
  }

  async function deleteRequest(url) {
    try {
      const res = await fetch(url, {
        method: "DELETE",
      });
      if (res.ok) console.log("nice");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={list.description} />
      </div>
      <div className="details">
        {/* {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )} */}
        <button
          className={
            favorited ? "emoji-button favorite active" : "emoji-button favorite"
          }
          onClick={handleClick}
        >
          {favorited ? "★" : "☆"}
        </button>
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button onClick={() =>handleDelete(list)} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
