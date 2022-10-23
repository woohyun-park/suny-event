import "./Nav.css";
import { BiMenu, BiSearch } from "react-icons/bi";

function Nav() {
  return (
    <div className="nav">
      <BiMenu size={28} />
      <BiSearch size={28} />
    </div>
  );
}

export default Nav;
