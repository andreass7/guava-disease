import Image from "next/image";
import { NAVBAR_LIST } from "../Navbar/Navbar.constant";
import Link from "next/link";
import { Divider } from "@heroui/react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const FooterPage = () => {
  return (
    <section className="w-full p-4">
      <div className="text-center bg-danger-700 p-6 rounded-2xl">
        <div className="flex justify-center items-center gap-4">
          <Image
            src="/guava.png"
            alt="Guava Disease"
            width={60}
            height={60}
            className="object-cover"
          />
          <p className="font-semibold text-2xl text-danger-500">
            Guava <span className="italic text-emerald-400"> Disease</span>
          </p>
        </div>
        <div className="space-x-5 flex justify-center items-center lg:mt-5 mt-3">
          {NAVBAR_LIST.map((item) => (
            <Link key={item.label} href={item.href}>
              <p className="text-md font-medium text-gray-300 hover:text-white">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
        <Divider className="my-4 bg-gray-300" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <p className="font-semibold sm:text-sm text-xs text-gray-300">
              Copyright 2025 © Andreas Adi Prasetyo
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <FaInstagram className="sm:h-7 h-4 w-4 sm:w-7 hover:scale-105 transition-all text-gray-300" />
            <FaTiktok className="sm:h-7 h-4 w-4 sm:w-7 hover:scale-105 transition-all text-gray-300" />
            <FaFacebook className="sm:h-7 h-4 w-4 sm:w-7 hover:scale-105 transition-all text-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FooterPage;
