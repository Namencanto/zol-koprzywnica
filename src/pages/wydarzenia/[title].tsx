import React, { useMemo } from "react";
import Navbar from "src/components/Navbar";
import { useState } from "react";
import Image from "next/image";
import CheckOthers from "src/components/WydarzeniaPageComponents/CheckOthers";
import Footer from "src/components/Footer";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import ImageSlider from "src/components/WydarzeniaPageComponents/ImageSlider";
import { Events } from "src/static/types";

const Event: React.FC<Events> = ({ event, eventsForCheckOthers }) => {
  const images = useMemo(() => event[0].images, [event]);

  const [displayImage, setDisplayImage] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  // to define two appearances of the component depend on the quantity of text
  const isLongComponent = event[0].description.length > 3;

  // counter to render image only in modulo 3 and if image exist
  let howManyImagesRenderedCounter = 0;
  return (
    <>
      <Navbar />
      {images && images[1] ? (
        <Image
          src={images[0]}
          alt="Opis obrazka"
          width={1000}
          height={1000}
          style={{
            objectFit: "cover",
            maxHeight: "500px",
            width: "100%",
            filter: "brightness(70%)",
          }}
        />
      ) : null}
      <div className="max-w-[1240px] pt-12 mx-auto">
        <h1 className="text-5xl font-normal mb-6  text-center">
          {event[0].title}
        </h1>
        <p className="text-2xl text-primary">{event[0].date}</p>
        {isLongComponent ? (
          <div className="flex flex-col md:flex-row items-center pt-12 mb-10">
            <div className="w-full pl-6 mt-6 md:mt-0">
              {event[0].description.map((text, i) => {
                if (i % 3 === 0)
                  howManyImagesRenderedCounter =
                    howManyImagesRenderedCounter + 1;
                return (
                  <>
                    {i % 3 === 0 &&
                      images &&
                      images[howManyImagesRenderedCounter] && (
                        <div className="relative w-1/2 m-auto h-auto my-8">
                          <Image
                            className="w-full h-auto border-2 border-primary"
                            src={images[howManyImagesRenderedCounter]}
                            alt="Firma XYZ"
                            width={750}
                            height={500}
                          />
                        </div>
                      )}
                    <p className="text-lg mb-4">{text}</p>
                  </>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center pt-12 mb-10">
            {images ? (
              <div className="w-full md:w-1/2 pr-6 mb-auto">
                <Image
                  className="w-full h-auto border-2 border-primary"
                  src={images[0]}
                  alt="Firma XYZ"
                  width={750}
                  height={500}
                />
              </div>
            ) : null}

            <div
              className={`w-full pl-6 mt-6 md:mt-0 ${
                images && images[0] ? "md:w-1/2" : ""
              }`}
            >
              {event[0].description.map((text) => {
                return (
                  <p key={text} className="text-lg mb-4">
                    {text}
                  </p>
                );
              })}
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {images && images[2]
            ? images!.map((image, i) => (
                <div key={i} className="relative h-48 md:h-64 cursor-pointer">
                  <Image
                    onClick={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const element = e.target as HTMLImageElement;
                      setDisplayImage(true);
                      setSelectedImage(+element.id);
                    }}
                    id={i.toString()}
                    src={image}
                    alt="gallery image"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))
            : null}
        </div>
        <CheckOthers
          eventsList={eventsForCheckOthers}
          currentTitle={event[0].title}
        />
      </div>
      {images ? (
        <ImageSlider
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          displayImage={displayImage}
          setDisplayImage={setDisplayImage}
        />
      ) : null}
      <Footer />
    </>
  );
};

type Props = {
  event: Events[number];
};

interface Params extends ParsedUrlQuery {
  title: string | undefined;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const events: object = await import("../../static/languages/pl.json");
  let paths = Object.values(events).flatMap((eventsInYear) => eventsInYear);
  paths = paths
    .filter((event) => typeof event.title === "string")
    .map((event) => ({ params: { title: event.title } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const title = params?.title as string;
  const events: object = await import("../../static/languages/pl.json");

  const eventsList = Object.values(events).flatMap(
    (eventsInYear) => eventsInYear
  );

  const event = eventsList.filter((event) => event.title === title);

  return {
    props: {
      event,
      eventsForCheckOthers: eventsList.slice(0, -1),
    },
  };
};

export default Event;