import { Link } from "react-router-dom";
import "./index.css";

const SearchBox = () => {
  return (
    <div className="search-box">
      <nav>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav>
      <h1>TbOok</h1>
      <h2>Search</h2>
      <input name="search" type={"text"} />
      <br />
      <br />
      <button> Search </button>
    </div>
  );
};

export default SearchBox;
