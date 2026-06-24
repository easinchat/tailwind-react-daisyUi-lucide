import React from "react";
import Link from "./Link";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: "🏠",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    icon: "ℹ️",
  },
  {
    id: 3,
    name: "Blog",
    path: "/blog",
    icon: "📝",
  },
  {
    id: 4,
    name: "Services",
    path: "/services",
    icon: "🛠️",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
    icon: "📞",
  },
];

const NavBar = () => {
  return (
    <nav>
      <ul className="flex">
        {navItems.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
      {/* <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default NavBar;
