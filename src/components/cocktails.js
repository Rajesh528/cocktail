import { Link } from "react-router-dom";

const Cocktails = (props ) => {
 

 const toggleFavorite = (id,flag)=>{
let index = props.cocktails.findIndex(obj=>obj.id == id);
if(index){
props.updateData(index,flag);
}
  }

  return (
    <div className="cocktail-list">
      {props.cocktails.map((cocktail, index) => (
        <div key={index} className="cocktail-item">
          <Link to={`/cocktailDetails/${cocktail.id}`}>
            <h2>{cocktail.name}</h2>
          </Link>
          {cocktail.isFavourite && <span onClick={(event)=>toggleFavorite(cocktail.id, false)} className="hand">⭐</span>}
          {!cocktail.isFavourite && <span onClick={(event)=>toggleFavorite(cocktail.id, true)} className="hand">☆</span>}

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


