"use client";

import React, { useEffect, useRef, useState } from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ContentWrapper from "./ContentWrapper";
import { detailCards } from "@/constants";
import Image from "next/image";

const Pricing = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [items, setItems] = useState<JSX.Element[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mappedItems = detailCards.map(
      ({ id, mainTitle, mainParagraph, month, packageDetails, price }) => (
        <div
          key={id}
          data-value={id}
          className={`mx-auto xl:w-[340px] lg:w-[290px] w-[320px] ${
            id === "2" ? "lg:mt-[106px]" : "lg:mt-[146px]"
          } bg-[#fafafa] rounded-[40px] box-shadow mb-10`}
        >
          <div className="flex justify-center flex-col mx-auto items-center text-center">
            <div className="mt-[40px]">
              <span className="jostM700 text-[32px] text-[#001049]">
                {mainTitle}
              </span>
              <p className="jostM500 text-base text-primary mt-[20px] w-[262px]">
                {mainParagraph}
              </p>
            </div>
            <div>
              <h1 className="text-[#5685FF] jostM700 text-[80px]">{price}</h1>
              <span className="text-primary text-base jostM400 mt-[20px] ml-5">
                /{month}
              </span>
            </div>
            <div className="mt-[40px]">
              <ul>
                {packageDetails.map((data, index) => (
                  <li
                    key={index}
                    className="text-primary text-base jostM500 flex mb-[18px]"
                  >
                    <Image
                      src={data.image}
                      alt={data.altTag}
                      className="mr-[10px]"
                    />
                    {data.data}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-[52px] mb-[40px]">
              <button className="size-auto rounded-[10px] border-[1px] border-[#003FE6] jostM500 text-base text-[#003FE6] py-4 lg:px-10 px-12">
                Get started
              </button>
            </div>
          </div>
        </div>
      )
    );
    setItems(mappedItems);
  }, []);

  const responsive = {
    0: { items: 1 },
    768: { items: 1 },
    1024: { items: 3 },
  };

  const carousel = useRef<AliceCarousel>(null);

  const syncActiveIndexForSwipeGestures = (e: EventObject) =>
    setActiveIndex(e.item);

  const onSlideChanged = (e: EventObject) => {
    syncActiveIndexForSwipeGestures(e);
  };
  return (
    <ContentWrapper>
      <h2 className="text-[#001049] jostM500 lg:text-[48px] md:text-[38px] text-[28px]">
        Here are all our plans
      </h2>
      <div className="flex justify-center">
        <p className="mt-[24px] text-primary jostM400 text-base w-[473px] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni
          est fugiat! Incidunt consectetur obcaecati impedit exercitationem quis
          culpa quo?
        </p>
      </div>
      <div className="mt-[52px]">
        <label className="inline-flex items-center cursor-pointer">
          <span className="text-[#001049] jostM500 text-base mr-[32px]">
            Monthly
          </span>
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <div className="relative w-11 h-6 peer-focus:outline-none ring-1 ring-[#003fe6] dark:peer-focus:ring-blue-800 rounded-full peerbg-white peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#003fe6] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          <span className="text-[#001049] jostM500 text-base ml-[32px]">
            Yearly
          </span>
        </label>
      </div>
      <div className="lg:mt-0 -mt-[75px]">
        <AliceCarousel
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          ref={carousel}
          onSlideChange={onSlideChanged}
        />
      </div>
      <div className="lg:hidden flex items-center justify-center">
        <button onClick={(e) => carousel.current?.slideNext(e)}>
          <div>
            <svg
              width="86"
              height="16"
              viewBox="0 0 86 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M85.7071 8.70711C86.0976 8.31658 86.0976 7.68342 85.7071 7.29289L79.3431 0.928932C78.9526 0.538408 78.3195 0.538408 77.9289 0.928932C77.5384 1.31946 77.5384 1.95262 77.9289 2.34315L83.5858 8L77.9289 13.6569C77.5384 14.0474 77.5384 14.6805 77.9289 15.0711C78.3195 15.4616 78.9526 15.4616 79.3431 15.0711L85.7071 8.70711ZM0 9H85V7H0V9Z"
                fill="#5685FF"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </ContentWrapper>
  );
};

export default Pricing;
