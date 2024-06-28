import { Link } from "react-router-dom";

const Cocktails = ({ cocktails }) => {
 

 const toggleFavorite = (id,flag)=>{
// need api to make this
  }

  return (
    <div className="cocktail-list">
      {cocktails.map((cocktail, index) => (
        <div key={index} className="cocktail-item">
          <Link to={`/cocktailDetails/${cocktail.id}`}>
            <h2>{cocktail.name}</h2>
          </Link>
          {cocktail.isFavourite && <span onClick={()=>toggleFavorite(cocktail.id, false)}>⭐</span>}
          {!cocktail.isFavourite && <span onClick={()=>toggleFavorite(cocktail.id, true)} >☆</span>}

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

// const [searchTerm, setSearchTerm] = useState('');

//⭐ ☆

// const filteredCocktailss = Cocktailss.filter(Cocktails =>
//   Cocktails.name.toLowerCase().includes(searchTerm.toLowerCase())
// );

// return (
//   <div className="App">
//     {/* <Filter setSearchTerm={setSearchTerm} />
//     <CocktailsList Cocktailss={filteredCocktailss} /> */}
//   </div>
// );
