"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Avatar, Box, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import Icon from "@/app/assets/icon.png";

const NavBar = () => {
  return (
    <nav className="mx-auto max-w-5xl border-b mb-6 px-6 py-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <Flex justify="between">
        <Flex align="center" gap="4">
          <Link href="/">
            <Image
              src={Icon}
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </Link>
          <NavLinks />
        </Flex>
        <AuthStatus />
      </Flex>
    </nav>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];

  return (
    <ul className="">
      <li className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
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
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return <Skeleton width="10rem" />;
  if (status === "unauthenticated")
    return (
      <Link
        className={classNames({
          "text-zinc-500": true,
          "hover:text-zinc-800": true,
          "transition-colors": true,
        })}
        href="/api/auth/signin"
      >
        Login
      </Link>
    );
  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Flex align="center" gap="4" className="cursor-pointer">
            <Text>Logged in as {session!.user!.name}</Text>
            <Avatar
              src={session!.user!.image!}
              fallback="?"
              radius="full"
              size="2"
              referrerPolicy="no-referrer"
            />
          </Flex>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sideOffset={5}>
          <DropdownMenu.Label>
            <Text>{session!.user!.email}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Log Out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default NavBar;
