import { Link } from "react-router-dom";
import { NavItem } from "../lib/Constant";

export const Header = () => {
  return (
    <header>
      <Link to="/">Docify</Link>
      <nav>
        {NavItem.map(({ label, url }, index) => (
          <Link to={url}>{label}</Link>
        ))}
      </nav>
    </header>
  );
};
