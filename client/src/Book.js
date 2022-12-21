import "./index.css";
import manga0 from "./assets/jujutsu-kaisen.jpg";
import { Link } from "react-router-dom";
const Book = () => {
  return (
    <Link to="/details">
      <div className="tile">
        <img
          src={manga0}
          alt="manga"
          style={{ width: "90px", height: "160px" }}
        />
        <p> Author: Gege Akutami</p>
      </div>
    </Link>
  );
};

export default Book;
