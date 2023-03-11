import React from "react";
import Image from "next/image";
import { Events } from "src/static/types";
import Link from "next/link";
import { generateFriendlyLink } from "../WydarzeniaPageComponents/generateFriendlyLink";
const News: React.FC<Events> = ({ allEvents }) => {
  console.log(allEvents[allEvents.length - 1].images![0]);
  return (
    <section className="px-4 bg-background-secondary py-24">
      <h2 className="max-w-[1240px] mx-auto px-2 text-3xl border-b-2 border-gray-200 pb-2 font-normal ">
        Aktualności i informacje
      </h2>

      <div className="max-w-[1240px] mx-auto p-2 pt-8">
        <div className="max-w-screen-xl mx-auto sm:p-4 p-0">
          <h2 className="text-4xl sm:text-5xl  font-bold mb-4 text-center text-primary">
            Ważne wydarzenia
          </h2>
          <div className="flex flex-col md:flex-row -mx-1.5 sm:p-4 p-0">
            <Link
              href={`wydarzenia/${generateFriendlyLink(
                allEvents[allEvents.length - 1].title
              )}`}
              className="h-72 md:h-auto w-auto md:w-7/12 mx-1.5 mb-6 md:mb-0 group"
            >
              <div className="h-72 md:h-full relative">
                {allEvents[allEvents.length - 1].images ? (
                  <Image
                    fill
                    alt={`Zdjęcie opisujące wydarzenie ${
                      allEvents[allEvents.length - 1].title
                    }`}
                    src={allEvents[allEvents.length - 1].images![0]}
                    className="absolute z-0 object-cover w-full h-72 md:h-full rounded-md"
                    loading="lazy"
                    sizes="
                    (min-width: 768px) 50vw,
                   40w
                  "
                  />
                ) : null}
                <div className="absolute gradient w-full h-72 md:h-full rounded-md z-10"></div>
                <div className="absolute left-0 right-0 bottom-0 p-4 z-30">
                  <h3 className="font-bold text-white leading-tight sm:mb-1.5 group-hover:underline text-2xl md:text-3xl">
                    {allEvents[allEvents.length - 1].title}
                  </h3>
                  <div className="text-xs text-white  sm:block">
                    <div className="flex items-center">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="far"
                        data-icon="clock"
                        className="h-3 mr-1"
                        role="img"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                        ></path>
                      </svg>
                      <span className="text-xs text-white">
                        {allEvents[allEvents.length - 1].date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="w-full md:w-5/12 mx-1.5">
              {allEvents.slice(-4).map(({ title, images, date }, i) => {
                if (i !== 3)
                  return (
                    <Link
                      key={title}
                      href={`wydarzenia/${generateFriendlyLink(title)}`}
                      className="flex flex-col sm:flex-row items-center sm:min-h-[31%] group mb-3 pb-3 border-b"
                    >
                      {images !== undefined ? (
                        <Image
                          alt={`Zdjęcie opisujące wydarzenie ${title}`}
                          src={images[0]}
                          width={220}
                          height={180}
                          className="rounded-md object-cover mr-3 sm:mr-4 sm:h-24 sm:w-24"
                          loading="lazy"
                        />
                      ) : null}
                      <div className="flex-1 w-full">
                        <h3 className="font-bold text-lg leading-tight group-hover:underline mb-2">
                          {title}
                        </h3>
                        <div className="flex items-center">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="clock"
                            className="h-3 mr-1"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                            ></path>
                          </svg>
                          <span className="text-xs">{date}</span>
                        </div>
                      </div>
                    </Link>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
