import { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(!false);
  const links = navItems.map((route) => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between mx-10 mt-4">
      <span
        className="flex gap-4"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul
          className={`md:hidden absolute z-10 duration-1000
           ${open ? "top-10" : "-top-40"}
            bg-amber-400 text-black`}
        >
          {links}
        </ul>

        <h3>My Navbar</h3>
      </span>

      <ul className="md:flex hidden">{links}</ul>

      <button>Sign in</button>
    </nav>
  );
};

export default NavBar;

// {/* <ul>
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/about">About</a>
//         </li>
//         <li>
//           <a href="/blog">Blog</a>
//         </li>
//       </ul> */}
