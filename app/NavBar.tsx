"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="mx-auto max-w-5xl flex space-x-6 border-b mb-6 px-6 h-16 items-center">
      <Link href="/">
        <FaBug size={20} />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            // className={`${
            //   link.href === currentPath ? "text-black font-semibold" : "text-zinc-500"
            // }  hover:text-zinc-800 transition-colors`}
            className={classNames({
              "text-black font-semibold": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800": true,
              "transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
