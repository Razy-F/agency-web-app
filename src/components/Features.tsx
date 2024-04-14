import {
  FeatureSectionImage1,
  FeatureSectionImage2,
  FeatureSectionImage3,
} from "@/constants/images";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="mb-20 xxl:mx-20 lg:mx-16 mx-auto mt-[58px] ">
      <div className="flex justify-center items-center">
        <div className="lg:flex-wrap flex-col xxl:w-[1260px] xl:w-[1180px] lg:w-[945px] md:w-[500px] w-[340px] h-auto">
          <div>
            <div>
              <h2 className="text-[#001049] jostM500 text-[40px] w-[200px] leading-tight">
                Why we are better than others
              </h2>
              <p className="text-primary text-base jostM400 w-[260px] mb-[20px] lg:mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                odio veritatis cumque sed, blanditiis commodi minima aperiam,
                numquam neque rem aspernatur esse aut, voluptatem aliquid nisi
                harum enim perferendis! In.
              </p>
            </div>
          </div>
          <div className="lg:absolute lg:-mt-[250px] lg:ml-[320px] mb-[20px] lg:mb-0">
            <div className="flex rounded-[40px] lg:w-fit w-auto relative box-shadow">
              <div className="flex h-[190px]">
                <div className="md:ml-[40px] mt-[20px] ml-[27px] w-[213px]">
                  <span className="jostM500 lg:text-[24px] md:text-[20px] text-[#001049]">
                    Convenient study schedule
                  </span>
                </div>
                <Image
                  src={FeatureSectionImage1}
                  alt="Feature Section Image 1"
                  width={0}
                  height={0}
                  className="lg:size-[200px] xl:size-[253px] md:size-[250px] size-[190px] xl:-mt-[25px] mt-[20px] lg:mt-0 md:mt-4 md:absolute md:right-0 lg:relative"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="lg:float-right mb-[20px] lg:mb-0">
            <div className="flex rounded-[40px] lg:w-fit box-shadow lg:-mt-[20px] w-auto">
              <div className="flex">
                <div className="md:ml-[40px] mt-[20px] ml-[27px] lg:w-[253px] w-[255px] md:pr-[50px] lg:pr-0">
                  <span className="jostM500 lg:text-[24px] md:text-[20px] text-[#001049] leading-tight">
                    Checked homework by teachers
                  </span>
                </div>
                <Image
                  src={FeatureSectionImage2}
                  alt="Feature Section Image 2"
                  className="size-[170px] md:size-[190px] md:mr-[40px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="mb-[20px] lg:mb-0">
            <div className="flex rounded-[40px] lg:w-fit box-shadow lg:mt-48 lg:mr-[20px] lg:ml-44 w-auto">
              <div className="flex">
                <div className="md:ml-[40px] mt-[20px] ml-[27px] w-[235px] md:pr-[40px] lg:pr-0">
                  <span className="jostM500 lg:text-[24px] md:text-[20px] text-[#001049] leading-tight">
                    Modern internet platform
                  </span>
                </div>
                <Image
                  src={FeatureSectionImage3}
                  alt="Feature Section Image 3"
                  className="size-[170px] md:size-[190px] md:mr-[40px]"
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

export default Features;
