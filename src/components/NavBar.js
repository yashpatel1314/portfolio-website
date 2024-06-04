import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from "react";
import instagram from "../photos/icons/instagram.png";
import linkedin from "../photos/icons/linkedin.png";
import github from "../photos/icons/github.png";
import facebook from "../photos/icons/facebook.png";
import yplogo from "../photos/icons/logo-transparent-png.png";
import '../css/nav.css';

export default function Navbar() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav className="nav">
      <ul className="iconstg">
        <li>
          <a href="https://www.instagram.com/yashpatellll/" target="_blank" rel="noopener noreferrer">
            <img className="Icon" src={instagram} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yash-patel-33276b218/" target="_blank" rel="noopener noreferrer">
            <img className="linkIcon" src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://github.com/yashpatel1314" target="_blank" rel="noopener noreferrer">
            <img className="gitIcon" src={github} alt="github" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100037714822921" target="_blank" rel="noopener noreferrer">
            <img className="Icon" src={facebook} alt="facebook" />
          </a>
        </li>
      </ul>
      <Link to="/" className="yash-portfolio">
        <img className="mainIcon" src={yplogo} alt="yplogo" />
      </Link>
      <ul className="pages">
        <DropdownLink to="/about" subLinks={[
          { name: "Hobbies & Interests", hash: "#HobbiesInterests" },
          { name: "Skills", hash: "#skills" },
          { name: "Education", hash: "#education" },
          { name: "Work Experience", hash: "#workexperience" },
          { name: "Design Teams", hash: "#designteams" },
          { name: "Awards and Certificates", hash: "#Awards" }
        ]}>About</DropdownLink>
        <DropdownLink to="/projects" subLinks={[
          { name: "Computing & Programming", hash: "#computing-programming" },
          { name: "Mechanical Design", hash: "#mechanical-design" }
        ]}>Projects</DropdownLink>
      </ul>
    </nav>
  );
}

function DropdownLink({ to, children, subLinks, ...props }) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = pathname.startsWith(to);

  return (
    <li 
      className={`dropdown ${isActive ? "active" : ""}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
      {isOpen && (
        <ul className="dropdown-menu">
          {subLinks.map(subLink => (
            <li key={subLink.hash}>
              <HashLink smooth to={`${to}${subLink.hash}`}>{subLink.name}</HashLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}