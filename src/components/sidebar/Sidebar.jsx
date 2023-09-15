import tv from "../../assets/tv2.svg";
import { AiFillHome } from "react-icons/ai";
import { GiFilmProjector } from "react-icons/gi";
import { BsCalendar3 } from "react-icons/bs";
import { MdOndemandVideo, MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ isMenuOpen }) => {
  return (
    <>
      <div className={isMenuOpen ? "sidebarOpen" : "sidebarContainer"}>
        <div className="logo-header">
          <img src={tv} alt="tv" />
          <p>Moviebox</p>
        </div>

        <nav className="sidebar-nav">
          <Link to={"/"} className="sidebar-link">
            <AiFillHome />
            <p>Home</p>
          </Link>
          <Link to={"/"} className="sidebar-link">
            <GiFilmProjector />
            <p>Movies</p>
          </Link>
          <Link to={"/"} className="sidebar-link">
            <MdOndemandVideo />
            <p>TV Series</p>
          </Link>
          <Link to={"/"} className="sidebar-link">
            <BsCalendar3 />
            <p>Upcoming</p>
          </Link>

          <div className="playing">
            <p>Play movie quizes and earn free tickets</p>
            <p>50k people are playing now</p>
            <button>Start playing</button>
          </div>

          <Link to={"/"} className="sidebar-link">
            <MdOutlineLogout />
            <p>Log out</p>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
