import { DiscountSectionImage } from "@/constants/images";
import Image from "next/image";
import React from "react";

const Discount = () => {
  return (
    <section className="relative">
      <div className="left-0 absolute mt-[185px] lg:mt-0">
        <Image
          src={DiscountSectionImage}
          alt="Discount section Image"
          className="lg:w-[380px] lg:h-[406px] w-[110px] h-[120px]"
          width={0}
          height={0}
        />
      </div>
      <div className="xxl:mx-20 lg:mx-16 mx-auto h-auto max-w-[1700px]">
        <div className="flex justify-center">
          <div className="xxl:w-[1260px] xl:w-[1180px] lg:w-[945px] md:w-[500px] w-[340px] lg:h-[450px] sm:h-[400px] h-[350px] relative">
            <div className="right-0 absolute mt-[50px] top-0 text-right">
              <h2 className="lg:text-[48px] md:text-[38px] text-[24px] jostM500 text-[#001049] lg:w-[600px] md:w-[480px] leading-none">
                Each student can share their discount code for friends
              </h2>
              <p className="text-[16px] float-right jostM400 text-[#001049] md:w-[477px] mt-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                quos vero repellat quidem amet nam sit officia ducimus cumque
                tenetur?
              </p>
              <div className="md:mt-[120px] mt-[150px] mb-[150px]">
                <button className="w-[190px] bg-[#003FE6] md:h-[62px] h-[48px] rounded-[10px] text-center">
                  <span className="text-white jostM500 text-[14px] md:text-[16px]">
                    I have a Code
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
