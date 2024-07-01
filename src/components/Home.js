import { useEffect, useState } from "react";
import SearchComponent from "./Search";
import axios from "axios";
import CocktailsComponent from "./cocktails";

const HomeComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [filterCocktails, setFilterCocktails] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setCocktails(JSON.parse(storedData));
      setFilterCocktails(JSON.parse(storedData));
    } else {
      axios
        .get("./data.json")
        .then((response) => {
          setCocktails(response.data.cocktails);
          setFilterCocktails(response.data.cocktails);
          localStorage.setItem("data", JSON.stringify(response.data.cocktails));
          console.log("called");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    const data = cocktails.filter((obj) =>
      obj.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterCocktails(data);
  }, [cocktails, searchTerm]);
  const updateData = (id, flag) => {
    const data = JSON.parse(localStorage.getItem("data"));

    const updatedData = data.map((item) =>
      item.id === id ? { ...item, isFavourite: flag } : item
    );
    localStorage.setItem("data", JSON.stringify(updatedData));
    //   //setCocktails(updateData);
    //   setFilterCocktails(updateData);
  };

  return (
    <div className="App">
      <SearchComponent setSearchTerm={setSearchTerm}> </SearchComponent>
      <CocktailsComponent
        cocktails={filterCocktails}
        updateData={updateData}
      ></CocktailsComponent>
    </div>
  );
};

export default HomeComponent;
