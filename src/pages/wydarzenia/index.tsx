import React from "react";
import Navbar from "src/components/Navbar";
import { useState } from "react";
import Image from "next/image";
import Footer from "src/components/Footer";
import Link from "next/link";
import { Events as EventsProps, Event } from "src/static/types";
import { CSSTransition } from "react-transition-group";
import { GetStaticProps } from "next";

const Events: React.FC<EventsProps> = ({ allEvents }) => {
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const handleYearClick = (year: string) => {
    setActiveYear(activeYear === year ? null : year);
  };
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="container mx-auto mt-16 flex justify-center">
          <div className="w-full lg:w-1/2 xl:w-1/3">
            <h1 className="text-4xl font-bold text-center mb-8">
              Wydarzenia na przestrzeni lat
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-0">
          {Object.entries(allEvents).map(([year, eventsInYear]) => (
            <div key={year} className="my-8">
              <button
                className="w-full flex items-center justify-between px-4 py-2 font-medium text-left text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline-gray hover:bg-gray-300 transition-all duration-300"
                onClick={() => handleYearClick(year)}
              >
                <span>{year}</span>
                <svg
                  className={`h-5 w-5 transform ${
                    activeYear === year ? "-rotate-180" : "rotate-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <CSSTransition
                in={activeYear === year}
                classNames="max-height"
                timeout={1000}
              >
                <div
                  className={`overflow-hidden transition-all duration-1000 ${
                    activeYear === year ? "max-h-auto" : "max-h-0"
                  }`}
                >
                  {eventsInYear instanceof Array &&
                    eventsInYear.map(({ date, title, description, images }) => (
                      <div
                        key={title}
                        className={`flex flex-col-reverse sm:flex-row justify-center items-center my-8 sm:odd:flex-row-reverse ${
                          images === undefined
                            ? "sm:even:translate-x-24 sm:odd:translate-x-[-6rem] "
                            : ""
                        }`}
                      >
                        {images && (
                          <div className="max-w-md sm:w-1/3 mb-4 sm:mb-0">
                            <div className="relative h-[auto] mt-8 sm:mt-0 mx-4 pb-2/3 hover:scale-[1.025] transition-all duration-1000 overflow-hidden">
                              <Image
                                src={images[0]}
                                alt={title}
                                height={11111}
                                width={1111}
                                className="rounded-lg object-cover"
                              />
                            </div>
                          </div>
                        )}
                        <Link
                          href={`wydarzenia/${title}`}
                          className="cursor-pointer hover:scale-[1.025] transition-all duration-1000 max-w-md sm:w-2/3 px-4 sm:px-8 py-4 bg-white rounded-lg shadow-lg"
                        >
                          <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {title}
                          </h3>

                          <p className="text-gray-700 text-base mb-4">
                            {description[0]}
                          </p>
                          <p className="text-gray-500 text-sm">{date}</p>
                        </Link>
                      </div>
                    ))}
                </div>
              </CSSTransition>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

import allEvents from "../../static/languages/pl.json";
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allEvents,
    },
  };
};

export default Events;
