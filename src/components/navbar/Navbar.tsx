'use client';

import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { FaBars } from "react-icons/fa";
import { manuList } from "@/constrain/NavbarItem";
import { usePathname, useRouter } from "next/navigation";
import { LOGIN, SIGNUP } from "@/constrain/routes";

export default function RootNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathNameCheck, setpathnameCheck] = useState<string>('/');
  const pathname = usePathname();
  const router = useRouter();

  const handleRouteSignUp = () => {
    router.push(SIGNUP);
  }

  useEffect(() => {
    setpathnameCheck(pathname);
  }, [pathname]);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden" icon={<FaBars />}
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit uppercase">TASK<span className="text-primary-color">dot.</span></Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {
          manuList.map((item) => (
            <NavbarItem key={item.id}>
              <Link className={`uppercase font-semibold ${pathNameCheck === item.route && 'text-primary-color font-bold'}`} color="foreground" href={item.route}>
                {item.label}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href={LOGIN} className={`text-secondary-300 font-semibold`}>Login</Link>
        </NavbarItem>
        <NavbarItem className="flex gap-5 justify-center items-center">
          <Button onClick={handleRouteSignUp} as={Link} color="secondary" className="font-semibold" variant="flat">
            Sign up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {
          manuList.map((item) => (
            <NavbarMenuItem key={item.id} className={`mt-5`}>
              <Link className={`uppercase font-semibold ${pathNameCheck === item.route && 'text-primary-color font-bold'}`} color="foreground" href={item.route}>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))
        }
        <NavbarMenuItem className="mt-5">
          <Link className={`uppercase font-semibold`} color="foreground" href={LOGIN}>
            Login
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
