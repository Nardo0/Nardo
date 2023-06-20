import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assests/logo.png";
import { JoinClasses } from "./Functions";
import Link from "next/link";

const Header = () => {
  const [ActivePage, setActivePage] = useState("Home");

  return (
    <div className="px-3 sm:px-0 py-5 flex flex-row items-center justify-between select-none">
      <div className="flex flex-row items-center gap-x-2">
        <Image width={40} height={40} src={Logo}></Image>
        <div className="text-xl text-[#afb2b6] font-bold">Nardo Alts</div>
      </div>
      <div className="flex flex-row items-center gap-x-4 sm:gap-x-8 text-sm">
        <Link href={"/"}>
          <div
            onClick={() => setActivePage("Home")}
            className={JoinClasses(
              ActivePage === "Home"
                ? "bg-gradient-to-tr from-[#0e0e0e] to-[#1a1919] rounded-md  border border-[#353535]"
                : "border-transparent",
              "p-1 px-2 sm:p-2 sm:px-4 cursor-pointer"
            )}
          >
            Home
          </div>
        </Link>
        <Link href={"/terms"}>
          <div
            onClick={() => setActivePage("Terms")}
            className={JoinClasses(
              ActivePage === "Terms"
                ? "bg-gradient-to-tr from-[#0e0e0e] to-[#1a1919] rounded-md  border border-[#353535]"
                : "border-transparent",
              "p-1 px-2 sm:p-2 sm:px-4 cursor-pointer"
            )}
          >
            Terms
          </div>
        </Link>
        <Link href={"/faq"}>
          <div
            onClick={() => setActivePage("Faq")}
            className={JoinClasses(
              ActivePage === "Faq"
                ? "bg-gradient-to-tr from-[#0e0e0e] to-[#1a1919] rounded-md  border border-[#353535]"
                : "border-transparent",
              "p-1 px-2 sm:p-2 sm:px-4 cursor-pointer"
            )}
          >
            Faq
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
