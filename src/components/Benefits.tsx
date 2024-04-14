import { BenefitsSectionImage } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <section className="w-full mb-10 lg:customColor">
      <div className="xxl:mx-20 lg:mx-16 mx-auto h-auto">
        <div className="flex justify-center">
          <div className="xxl:w-[1260px] xl:w-[1180px] lg:w-[945px] md:w-[500px] w-[430px] flex lg:mt-[80px] lg:justify-between justify-center overflow-hidden">
            <div className="xxl:w-[55%] xl:w-[50%] lg:w-[45%] w-[98%]">
              <div className="flex-row">
                <div className="flex">
                  <div className="size-[85px] rounded-[10px] bg-[#5685FF] bg-opacity-50">
                    <h3 className="text-[#001049] jostM400 text-[41px] text-center pt-[12px]">
                      1
                    </h3>
                  </div>
                  <div className="ml-[20px] flex flex-col mt-1">
                    <span className="jostM500 xl:text-[40px] md:text-[30px] sm:text-[25px] text-[24px] text-[#001049] xl:w-[400px] lg:w-[299px] md:w-[318px] sm:w-[215px] w-[200px] leading-none">
                      We have been improving our product
                    </span>
                    <span className="jostM500 xl:text-[40px] md:text-[30px] sm:text-[25px] text-[24px] text-[#5685FF]">
                      for many years
                    </span>
                  </div>
                </div>
                <div>
                  <div className="lg:ml-[105px] flex flex-col mt-1">
                    <p className="jostM400 text-base text-primary xl:w-[309px] lg:w-[250px] leading-tight mt-[15px]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Mollitia doloremque blanditiis cum aspernatur saepe optio
                      at aperiam sapiente cupiditate. Est ex
                    </p>
                  </div>
                </div>
                <div className="flex lg:mt-4 mt-6">
                  <div className="size-[85px] rounded-[10px] bg-[#5685FF] bg-opacity-50">
                    <h3 className="text-[#001049] jostM400 text-[41px] text-center pt-[12px]">
                      2
                    </h3>
                  </div>
                  <div className="ml-[20px] flex flex-col mt-1">
                    <span className="jostM500 xl:text-[40px] md:text-[30px] sm:text-[25px] text-[24px] text-[#001049] xl:w-[412px] lg:w-[309px] md:w-[240px] w-[180px] leading-none">
                      You can practice at any
                    </span>
                    <span className="jostM500 xl:text-[40px] md:text-[30px] sm:text-[25px] text-[24px] text-[#5685FF] leading-none">
                      time convenient for you
                    </span>
                  </div>
                </div>
                <div className="lg:ml-[105px] flex flex-col mt-1">
                  <p className="jostM400 text-base text-primary xl:w-[420px] lg:w-[275px] md:w-[375px] leading-tight mt-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="md:mt-[45px] md:ml-[105px] lg:mb-20 mt-8">
                <button className="md:w-[190px] bg-[#003FE6] md:h-[62px] h-[48px] w-[98%] rounded-[10px] text-center">
                  <span className="text-white jostM500 text-[14px] md:text-[16px]">
                    Get started
                  </span>
                </button>
              </div>
            </div>
            <div className="xxl:w-[40%] xl:w-[45%] lg:w-[55%] hidden lg:block">
              <div className="xl:mt-[125px] lg:mt-[165px] xl:ml-[16px] relative">
                <Image
                  src={BenefitsSectionImage}
                  alt="Benefits Image"
                  className="w-[504px] xl:h-[460px] lg:h-[420px] absolute"
                  width={0}
                  height={0}
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

export default Benefits;
