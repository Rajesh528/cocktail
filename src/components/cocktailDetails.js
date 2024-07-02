import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState({});
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("data"));
    const index = res.findIndex(obj=>obj.id == id);
    setCocktail(res[index]);
  }, []);

  const toggleFavorite = (index, flag) => {
      const data = JSON.parse(localStorage.getItem("data"));
  
      const updatedData = data.map((item) =>
        item.id === id ? { ...item, isFavourite: flag } : item
      );
      localStorage.setItem("data", JSON.stringify(updatedData));
    
    setCocktail({ ...cocktail, isFavourite: flag })
  };
  return (
    <div className="container">
      <div className="image-container">
        <img src={cocktail.imageUrl} alt="Description" />
      </div>
      <div className="details-container">
        <h2>{cocktail.name}</h2>
        {cocktail.isFavourite && (
          <span onClick={() => toggleFavorite(cocktail.id, false)}>⭐</span>
        )}
        {!cocktail.isFavourite && (
          <span onClick={() => toggleFavorite(cocktail.id, true)}>☆</span>
        )}
        <p>{cocktail.instructions}</p>
        <span
            className={
              cocktail.type === "isAlcoholic"
                ? "badge alcoholic"
                : "badge non-alcoholic"
            }
          >
            {cocktail.isAlcoholic ? "Alcoholic" : "Non-Alcoholic"}
          </span>
      </div>
    </div>
  );
};

export default CocktailDetails;
