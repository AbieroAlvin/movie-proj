import { AiOutlineSearch } from "react-icons/ai";
import "./search.css";

const Search = () => {
  return (
    <div className="searchContainer">
      <input type="text" placeholder="What do you want to watch?" />
      <AiOutlineSearch className="text-white" />
    </div>
  );
};

export default Search;
