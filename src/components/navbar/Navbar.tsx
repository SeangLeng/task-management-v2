'use client';

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { FaBars } from "react-icons/fa";
import { manuList } from "@/constrain/NavbarItem";

export default function RootNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden" icon={<FaBars />}
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">TAS<span className="text-primary-color">KER.</span></Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {
          manuList.map((item) => (
            <NavbarItem key={item.id}>
              <Link className="uppercase font-semibold" color="foreground" href={item.route}>
                {item.label}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-secondary-300 font-semibold">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" className="font-semibold" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {
          manuList.map((item) => (
            <NavbarMenuItem key={item.id} className="mt-5">
              <Link className="uppercase font-semibold" color="foreground" href={item.route}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))
        }
        <NavbarMenuItem className="mt-5">
          <Link className="uppercase font-semibold" color="foreground" href='/auth/login'>
            Login
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
