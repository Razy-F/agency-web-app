import {
  HeroImage1,
  HeroImage2,
  HeroImage3,
  HeroImage4,
} from "@/constants/images";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="xxl:mx-20 lg:mx-16 mx-auto overflow-hidden">
      <div className="flex justify-center lg:mt-[120px] mt-[70px] lg:mb-[65px]">
        <div className="flex flex-wrap xxl:w-[1260px] xl:w-[1180px] lg:w-[945px]">
          <div className="lg:w-[50%] w-full my-auto z-20">
            <div>
              <div className="mt-5">
                <h1 className="text-primary jostM500 jos xxl:text-[80px] xl:text-[75px] lg:text-[60px] text-[48px] leading-tight lg:w-[700px] md:w-[500px] w-[340px]">
                  Develop your skill without diligence
                </h1>
              </div>
              <div className="mt-5">
                <p className="text-[#001049] jostM500 xl:text-[16px] md:text-[14px] xl:w-[500px] lg:w-[440px] w-[340px] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores corporis doloremque, iste incidunt non cum provident
                  inventore quam odio fugiat.
                </p>
              </div>
              <div className="flex gap-4 mt-10 w-full">
                <div>
                  <button className="lg:w-auto h-auto rounded-[10px] bg-[#003FE6] text-white text-base jostM500 py-4 lg:px-12 px-10 ">
                    Get started
                  </button>
                </div>
                <div>
                  <button className="w-auto h-auto rounded-[10px] border-[1px] border-[#003FE6] jostM500 text-base text-[#001049] py-4 lg:px-10 px-12">
                    Discount
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex flex-col lg:w-[50%] hidden z-10 gap-5">
            <div className="flex gap-5">
              <div className="xl:size-[295px] lg:size-[250px] bg-[#FF9292] rounded-[40px] justify-center flex">
                <Image
                  src={HeroImage1}
                  alt="Hero Image 1"
                  width={0}
                  height={0}
                  className="m-5 lg:size-[200px] xl:size-[253px]"
                />
              </div>
              <div className="xl:size-[295px] lg:size-[250px] bg-[#FFDA92] rounded-[40px] justify-center flex">
                <Image
                  src={HeroImage2}
                  alt="Hero Image 2"
                  width={0}
                  height={0}
                  className="m-5 lg:size-[200px] xl:size-[253px]"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="xl:size-[295px] lg:size-[250px] bg-[#C292FF] rounded-[40px]">
                <Image
                  src={HeroImage3}
                  alt="Hero Image 3"
                  width={0}
                  height={0}
                  className="lg:mt-6 xxl:mt-1 xl:mt-3"
                  loading="lazy"
                />
              </div>
              <div className="xl:size-[295px] lg:size-[250px] bg-[#92EBFF] rounded-[40px]">
                <Image
                  src={HeroImage4}
                  alt="Hero Image 4"
                  width={0}
                  height={0}
                  className="xl:left-[100px] xl:top-[100px] lg:left-[75px] lg:top-[100px] relative overflow-hidden"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
