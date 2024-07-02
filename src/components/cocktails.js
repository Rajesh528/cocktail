import { Link } from "react-router-dom";

const Cocktails = (props ) => {
 
  return (
    <div className="cocktail-list">
      {props.cocktails.map((cocktail, index) => (
        <div key={index} className="cocktail-item">
          <Link to={`/cocktailDetails/${cocktail.id}`}>
            <h2>{cocktail.name}</h2>
          </Link>
          {cocktail.isFavourite && <span onClick={(event)=>props.updateData(cocktail.id, false)} className="hand">⭐</span>}
          {!cocktail.isFavourite && <span onClick={(event)=>props.updateData(cocktail.id, true)} className="hand">☆</span>}

          <p>{cocktail.ingredients}</p>
          <span
            className={
              cocktail.isAlcoholic === true
                ? "badge alcoholic"
                : "badge non-alcoholic"
            }
          >
            {cocktail.isAlcoholic === true ? "alcoholic" : "non-alcoholic" }
          </span>
        </div>
      ))}
    </div>
  );
};
export default Cocktails;


