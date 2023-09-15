import Search from "../search/Search";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "./navbar.css";
import movieIcon from "../../assets/tv2.svg";

const Navbar = () => {
  return (
    <div className="navContainer flex justify-between px-[80px]py-[40px]">
      <Link className="navLogo" to="/">
        <div>
          <img src={movieIcon} alt="/" />
        </div>
        <p>Movie Box</p>
      </Link>

      <Search />

      <div className="navSign">
        <p>Sign In</p>
        <div className="bg-[#be123c] p-4 rounded-full">
          <HiOutlineMenuAlt4 className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
