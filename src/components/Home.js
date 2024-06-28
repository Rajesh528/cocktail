import { useEffect, useState } from "react";
import SearchComponent from "./Search";
import axios from "axios";
import CocktailsComponent from "./cocktails";

const HomeComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [filterCocktails, setFilterCocktails] = useState([]);
  useEffect(() => {
    axios
      .get("./data.json")
      .then((response) => {
        setCocktails(response.data.cocktails);
        setFilterCocktails(response.data.cocktails);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
   

    const data = cocktails.filter((obj) =>
      obj.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterCocktails(data);
  }, [cocktails, searchTerm]);

  return (
    <div className="App">
      <SearchComponent setSearchTerm={setSearchTerm}> </SearchComponent>
      <CocktailsComponent cocktails={filterCocktails}></CocktailsComponent>

    </div>
  );
};

export default HomeComponent;

// const Home = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const cocktails = [
//     {
//       id: 1,
//       name: "Afterglow",
//       ingredients: "Grenadine | Orange juice | Pineapple juice",
//       type: "Non alcoholic",
//     },
//     {
//       id: 2,
//       name: "Smut",
//       ingredients: "Red wine | Peach schnapps | Pepsi Cola | Orange juice",
//       type: "Alcoholic",
//     },
//     {
//       id: 3,
//       name: "Affinity",
//       ingredients: "Scotch | Sweet Vermouth | Dry Vermouth | Orange bitters",
//       type: "Alcoholic",
//     },
//     {
//       id: 4,
//       name: "Sweet Tooth",
//       ingredients: "Godiva liqueur | Milk",
//       type: "Alcoholic",
//     },
//     {
//       id: 5,
//       name: "Sherry Flip",
//       ingredients: "Sherry | Light cream | Powdered sugar | Egg | Nutmeg",
//       type: "Alcoholic",
//     },
//     {
//       id: 6,
//       name: "Almeria",
//       ingredients: "Dark rum | Kahlua | Egg white",
//       type: "Alcoholic",
//     },
//   ];

//   const filteredCocktails = cocktails.filter((obj) =>
//     obj.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   return (
//     <>
//       <SearchComponent setSearchTerm={setSearchTerm}></SearchComponent>
//       <Cocktails cocktails={filteredCocktails}></Cocktails>
//     </>
//   );
// };
// export default Home;
