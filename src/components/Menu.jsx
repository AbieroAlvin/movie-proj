const Menu = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div className="menu" onClick={toggleMenu}>
      {isMenuOpen ? "-" : "+"}
    </div>
  );
};

export default Menu;
