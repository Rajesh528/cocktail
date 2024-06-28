import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState({});
  useEffect(() => {
    axios
      .get("../data.json")
      .then((response) => {

        let data = response.data.cocktails;
        let index = data.findIndex((item) => item.id == id);
        setCocktail(data[index]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleFavorite = (index, flag) => {};
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
