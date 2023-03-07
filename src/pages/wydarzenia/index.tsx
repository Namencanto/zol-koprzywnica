import React from "react";
import Navbar from "src/components/Navbar";
import { useState, useContext } from "react";
import Image from "next/image";
import Footer from "src/components/Footer";
import Link from "next/link";
import { Events as EventsProps, Event } from "src/static/types";
import { CSSTransition } from "react-transition-group";
import { GetStaticProps } from "next";
import { contactData } from "src/static/contactData";
import { ThemeContext } from "src/context/themeContext";
import { generateFriendlyLink } from "src/components/WydarzeniaPageComponents/generateFriendlyLink";
const Events: React.FC<EventsProps> = ({ allEvents }) => {
  const { theme } = useContext(ThemeContext);
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const handleYearClick = (year: string) => {
    setActiveYear(activeYear === year ? null : year);
  };

  return (
    <>
      <Head>
        <title>
          Wydarzenia na przestrzeni lat zakładu opiekuńczo-leczniczego
        </title>
        <meta
          name="description"
          content="Sprawdź historię naszej placówki oraz wydarzenia organizowane przez nas przez lata."
        />
        <meta
          name="keywords"
          content="zakład opiekuńczo-leczniczy, wydarzenia, historia, opieka nad osobami starszymi"
        />
        <meta name="author" content={contactData.author} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Wydarzenia na przestrzeni lat zakładu opiekuńczo-leczniczego"
        />
        <meta
          property="og:description"
          content="Sprawdź historię naszej placówki oraz wydarzenia organizowane przez nas przez lata."
        />
      </Head>

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
                aria-controls={`news-${year}-content`}
                aria-expanded={activeYear === year ? "true" : "false"}
                className={`w-full flex items-center justify-between px-4 py-2 font-medium text-left text-text-gray-700 rounded-lg focus:outline-none focus:shadow-outline-gray transition-all duration-300 ${
                  theme === "light"
                    ? "bg-gray-200 hover:bg-gray-300 "
                    : "bg-[#555] hover:bg-[#666] "
                }`}
                onClick={() => {
                  handleYearClick(year);
                }}
              >
                <time dateTime={year}>{year}</time>
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
                  id={`news-${year}-content`}
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
                                alt={`Zdjęcie opisujące ${title}`}
                                height={320}
                                width={430}
                                className="rounded-lg object-cover"
                              />
                            </div>
                          </div>
                        )}
                        <Link
                          aria-label={`Sprawdź wydarzenie ${title}`}
                          href={`wydarzenia/${generateFriendlyLink(title)}`}
                          tabIndex={activeYear === year ? 0 : -1} // improve accessibility logic
                          aria-hidden={activeYear !== year} // to hide elements before user display by the button
                          className="cursor-pointer hover:scale-[1.025] transition-all duration-1000 max-w-md sm:w-2/3 px-4 sm:px-8 py-4 bg-background-secondary rounded-lg shadow-lg"
                        >
                          <h3 className="text-lg font-medium text-text-gray-900 mb-2">
                            {title}
                          </h3>

                          <p className="text-text-gray-700 text-base mb-4">
                            {description[0]}
                          </p>
                          <time
                            dateTime={date}
                            className="text-text-gray-500 text-sm"
                          >
                            {date}
                          </time>
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
import Head from "next/head";
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      allEvents,
    },
  };
};

export default Events;
