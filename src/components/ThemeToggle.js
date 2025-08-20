"use client";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className=" fixed bottom-10 right-10">
      <div className="flexz-30 items-center gap-3 w-fit h-fit">
        {theme === "light" ? (
          <div
            onClick={() => setTheme("dark")}
            className="bg-gray-700 p-2 rounded-full cursor-pointer transition-all hover:opacity-80"
          >
            <FaMoon className="w-8 h-8 text-white" />
          </div>
        ) : (
          <div
            onClick={() => setTheme("light")}
            className="bg-white p-2 rounded-full cursor-pointer transition-all hover:opacity-80"
          >
            <FaSun className="w-8 h-8 text-danger" />
          </div>
        )}
      </div>
    </div>
  );
};
