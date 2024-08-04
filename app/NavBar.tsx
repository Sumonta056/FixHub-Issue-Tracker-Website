"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Avatar, Box, DropdownMenu, Flex, Text } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <nav
      className="mx-auto max-w-5xl border-b mb-6 px-6 py-5 
    shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
    >
      <Flex justify="between">
        <Flex align="center" gap="4">
          <Link href="/">
            <FaBug size={20} />
          </Link>
          <ul className="">
            <li className="flex space-x-6">
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
            </li>
          </ul>
        </Flex>
        <Box>
          {status === "authenticated" ? (
            // <Link href="/api/auth/signout">Log Out</Link>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Flex align="center" gap="4" className="cursor-pointer">
                  <Text>Logged in as {session.user!.name}</Text>
                  <Avatar
                    src={session.user!.image!}
                    fallback="?"
                    radius="full"
                    size="2"
                  />
                </Flex>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content sideOffset={5}>
                <DropdownMenu.Label>
                  <Text>{session.user!.email}</Text>
                </DropdownMenu.Label>
                <DropdownMenu.Item>
                  <Link href="/api/auth/signout">Log Out</Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </Box>
      </Flex>
    </nav>
  );
};

export default NavBar;
