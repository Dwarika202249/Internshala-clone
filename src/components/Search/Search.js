import "./search.css";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  return (
    <div className="search_container">
      <div className="search">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="search_inbox"
        />
        <div className="search_icon">
          <SearchIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Search;
