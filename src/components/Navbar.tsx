"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/images/logo.svg";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiWorld } from "react-icons/tfi";
import { links } from "../constants/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 left-0 z-100 flex justify-center">
      <nav className="xxl:mx-20 lg:mx-16 mx-auto max-w-[1260px] w-full">
        <div className="flex items-center justify-between text-primary lg:px-4 md:px-10 px-1 lg:pt-5 lg:pb-5 h-[75px] backdrop-blur-[20px]">
          {/* logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="lg:w-[75px] lg:h-[75px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]"
            />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" absolute md:right-[40px] right-[8px] top-4 cursor-pointer lg:hidden"
          >
            <span>
              {isOpen ? (
                <AiOutlineClose className="w-[30px] h-[30px] mt-[8px]" />
              ) : (
                <GiHamburgerMenu className="w-[30px] h-[30px] mt-[8px]" />
              )}
            </span>
          </button>
          <div
            className={`lg:flex lg:items-center justify-between lg:pb-0 z-50 absolute lg:static lg:z-auto left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in top-[73px] ${
              isOpen ? "left-0" : "left-[-100%]"
            }`}
          >
            <div className="lg-flex lg:items-center h-auto pb-10 lg:pb-0 bg-white lg:bg-transparent lg:rounded-none rounded-b-3xl border-b-2 lg:border-none lg:pt-0 pt-[35px]">
              <ul className="lg:flex lg:items-center mx-auto">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="text-center lg:ml-8 text-[16px] mb-10 lg:mb-5 font-Jost font-medium pt-[20px] "
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
              <div className="text-center flex-col md:justify-center flex lg:flex-row gap-10 mt-4 lg:mt-0 lg:hidden">
                <button className="btnCtx">Sign Up</button>
                <button className="bg-transparent text-primary py-3 px-5 mx-auto w-fit text-[16px] font-Jost font-medium flex">
                  <span className="flex mr-[5px]">
                    <TfiWorld className="my-auto mr-[5px]" />
                    English
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:mt-0 invisible lg:visible gap-2 ">
            <div>
              <button className="bg-transparent text-primary py-3 px-5 mx-auto w-fit text-[16px] font-Jost font-medium flex">
                <span className="flex mr-[5px]">
                  <TfiWorld className="my-auto mr-[5px]" />
                  English
                </span>
              </button>
            </div>
            <div>
              <button className="btnCtx border-[rgba(00,10,49,0.2)]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
