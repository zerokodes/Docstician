import { Link } from "react-router-dom";

/**
 * Renders a nav item as either a router <Link> (standalone page route) or a
 * plain anchor to a home-page section hash. Falls back to an anchor.
 */
export function NavLink({ item, className = "", onClick }) {
  if (item.route) {
    return (
      <Link to={item.route} className={className} onClick={onClick}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.to || item.href} className={className} onClick={onClick}>
      {item.label}
    </a>
  );
}

export default NavLink;
