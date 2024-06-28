const SearchComponent = ({setSearchTerm})=>{

   const  handleSearch = (event)=>{
        setSearchTerm(event.target.value);
    }
    return(
        <div className="filter">
            <label>Search Term</label>
            <input type="text" name="name" onChange={handleSearch}></input>
        </div>
    )
}

export default SearchComponent;
