import { FooterLogo, logo } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#DFE8FF] mt-5">
      <div className="xxl:mx-20 lg:mx-16 mx-auto">
        <div className="flex justify-center">
          <div className="xxl:w-[1260px] xl:w-[1180px] lg:w-[945px] md:w-[500px] w-[340px] h-auto">
            <div className="flex justify-between lg:flex-row flex-col">
              <div>
                <div className="mt-[40px] hidden lg:block">
                  <Image src={logo} alt="Footer logo" className="" />
                </div>
                <div className="mt-[26px]">
                  <p className="text-[#001049] jostM400 text-[14px] w-[313px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta ipsam pariatur incidunt culpa nihil iure.
                  </p>
                </div>
                <div>
                  <div className="mt-[30px] flex">
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="border-opacity-25 border-[2px] border-[#001049] rounded-l-[10px] md:h-[62px] h-[48px] xl:w-[242px] lg:w-[180px] pl-[20px] relative bg-[#DEF8FF] ml-[10px] md:ml-0"
                    />
                    <button className="xl:w-[156px] w-[146px] bg-[#003FE6] md:h-[62px] h-[48px] rounded-[10px] text-center absolute xl:ml-[200px] md:ml-[168px] ml-[180px]">
                      <span className="text-white jostM500 text-[14px] md:text-[16px]">
                        Subscribe
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid xl:gap-20 lg:gap-14 gap-10 lg:grid-cols-3 grid-cols-2 lg:mt-[68px] md:mt-[58px] mt-[40px] mb-5">
                <div className="lg:ml-[60px]">
                  <ul>
                    <li className="jostM500 text-[16px] text-[#001049]">
                      Platform
                    </li>
                    <li className="jostM400 text-[14px] text-[#001049] cursor-pointer mt-[20px]">
                      Overview
                    </li>
                    <li className="jostM400 text-[14px] text-[#001049] cursor-pointer mt-[20px]">
                      Features
                    </li>
                    <li className="jostM400 text-[14px] text-[#001049] cursor-pointer mt-[20px]">
                      About
                    </li>
                    <li className="jostM400 text-[14px] text-[#001049] cursor-pointer mt-[20px]">
                      Pricing
                    </li>
                  </ul>
                </div>
                <div className="lg:ml-[60px]">
                  <ul>
                    <li className="jostM500 text-[16px] text-[#001049]">
                      Help
                    </li>
                    <li className="jostM400 text-[14px] text-[#001049] cursor-pointer mt-[20px]">
                      How does it work?
                    </li>
                    <li className="jostM400 text-[14px] text-[#001049] cursor-pointer mt-[20px]">
                      Where to ask questions
                    </li>
                    <li className="jostM400 text-[14px] text-[#001049] cursor-pointer mt-[20px]">
                      How to pay?
                    </li>
                    <li className="jostM400 text-[14px] text-[#001049] cursor-pointer mt-[20px]">
                      What is needed for this?
                    </li>
                  </ul>
                </div>
                <div className="lg:ml-[60px]">
                  <ul>
                    <li className="jostM500 text-[16px] text-[#001049]">
                      Contacts
                    </li>
                    <li className="jostM400 text-[14px] text-[#001049] cursor-pointer mt-[20px]">
                      233 233 2323
                    </li>
                    <li className="jostM400 text-[14px] text-[#001049] cursor-pointer mt-[20px]">
                      hello world
                    </li>
                    <li className="jostM400 text-[14px] text-[#001049] cursor-pointer mt-[20px]">
                      hello world
                    </li>
                    <li className="jostM400 text-[14px] text-[#001049] cursor-pointer mt-[20px]">
                      232323
                    </li>
                  </ul>
                </div>
                <div className="lg:hidden block">
                  <Image src={FooterLogo} alt="Large logo" />
                </div>
              </div>
            </div>
            <div className="my-8 lg:block hidden">
              <hr className=" border-none h-px bg-[#001049] opacity-[0.3] " />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
