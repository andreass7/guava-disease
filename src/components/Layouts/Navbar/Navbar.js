import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import Image from "next/image";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { NAVBAR_LIST } from "./Navbar.constant";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const NavbarPage = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={`${geistSans.className}`}>
      <div className="w-5/6 hidden lg:flex rounded-full mx-auto mt-4 shadow-xl ">
        <Navbar
          position="sticky"
          maxWidth="full"
          isBlurred
          isBordered
          className="rounded-full border"
        >
          <NavbarBrand>
            <div className="gap-4 items-center cursor-pointer flex">
              <Image
                src="/guava.png"
                alt="Guava Disease"
                width={30}
                height={30}
              />
              <p className="font-semibold text-md text-danger-500">
                Guava <span className="italic text-emerald-400"> Disease</span>
              </p>
            </div>
          </NavbarBrand>
          <NavbarContent className="lg:flex space-x-2">
            {NAVBAR_LIST.map((item) => (
              <NavbarItem
                key={item.label}
                as={Link}
                href={item.href}
                className={cn(
                  "text-md mx-auto font-medium text-gray-500 hover:text-danger-500",
                  {
                    "text-danger": router.pathname === item.href,
                  }
                )}
              >
                {item.label}
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarBrand className="justify-end cursor-pointer">
            <Link
              href="https://github.com/andreass7/guava-disease"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContext value={{ color: "gray" }}>
                <FaGithub className="h-7 w-7" />
              </IconContext>
            </Link>
          </NavbarBrand>
        </Navbar>
      </div>
      <div className="lg:hidden">
        <Navbar onMenuOpenChange={setIsMenuOpen} isBlurred>
          <NavbarMenuToggle
            className="cursor-pointer"
            onPress={() => setIsMenuOpen(true)}
          />
          <NavbarBrand>
            <div className="gap-4 items-center cursor-pointer flex">
              <Image
                src="/guava.png"
                alt="Guava Disease"
                width={30}
                height={30}
              />
              <p className="font-semibold text-md text-danger-500">
                Guava <span className="italic text-emerald-400"> Disease</span>
              </p>
            </div>
          </NavbarBrand>
          <NavbarMenu className="lg:hidden">
            {NAVBAR_LIST.map((item) => (
              <NavbarMenuItem
                key={item.label}
                className={cn(
                  "text-md font-medium p-2 hover:bg-danger-500 hover:text-white rounded-lg cursor-pointer",
                  {
                    "bg-danger-500 text-white": router.pathname === item.href,
                  }
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </div>
  );
};
export default NavbarPage;
