"use client";
import { Navbar, Collapse, Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import OpenMenu from "@/assets/icons/HeaderIcons/open-menu.svg";
import CloseMenu from "@/assets/icons/HeaderIcons/close-menu.svg";
import NavList from "./NavList";
import Logo from "./Logo";
import { UserButton } from "@clerk/nextjs";
import AuthButton from "@/components/auth/AuthButton";

export default function HeaderNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="max-h-[768px] w-[calc(100%)] overflow-hidden">
      <Navbar
        placeholder={""}
        variant="gradient"
        color="transparent"
        className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Logo />

          <div className="hidden rounded-[10px] border-2 border-black12 lg:block">
            <NavList />
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <UserButton />
            </div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                placeholder={""}
                size="sm"
                className="hidden font-medium text-white lg:inline-block"
              >
                <AuthButton />
              </Button>
            </div>

            <IconButton
              placeholder={"icons"}
              variant="text"
              className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <Image
                  alt="CloseMenu"
                  src={CloseMenu}
                  width={100}
                  height={100}
                />
              ) : (
                <Image alt="OpenMenu" src={OpenMenu} width={100} height={100} />
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav} className="rounded-lg bg-white">
          <div className="m-5 flex justify-end">
            <UserButton />
          </div>
          <NavList />
          <div className="flex items-center gap-x-1">
            <Button
              placeholder={""}
              fullWidth
              variant="text"
              size="sm"
              className=""
            >
              <AuthButton />
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
