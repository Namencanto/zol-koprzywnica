import Slider1 from "@/images/slider-1.jpg";
import Slider2 from "@/images/slider-2.jpg";
import Slider3 from "@/images/slider-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  HashNavigation,
  Scrollbar,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
SwiperCore.use([Navigation, Pagination, Autoplay, HashNavigation, Scrollbar]);

const Main = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const [showAboveText, setShowAboveText] = useState(false);
  const [currentAlt, setCurrentAlt] = useState("");

  const handleMouseEnter = () => {
    setShowArrows(true);
  };

  const handleMouseLeave = () => {
    setShowArrows(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowButtons(true);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 15000);
  }, []);

  return (
    <div
      role="region"
      aria-label={`Przewijana galeria zdjęć ${currentAlt}`}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-live="polite"
      aria-atomic="true"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 10000 }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: showButtons }}
        scrollbar={false}
        style={{ userSelect: "none", filter: "brightness(80%)" }}
        onSlideChange={(e) => {
          const currentSlideIndex = e.realIndex;
          const currentSlide = document.querySelector(
            `.swiper-slide[data-swiper-slide-index="${currentSlideIndex}"]`
          );
          const currentImage = currentSlide?.querySelector("img")!;
          const altText = currentImage?.alt;
          setCurrentAlt(altText);
        }}
        className="w-full sm:h-[40rem] h-[20rem]"
        aria-controls="swiper-navigation"
        aria-labelledby="swiper-label"
      >
        <SwiperSlide className="overflow-hidden">
          <Image
            priority={true}
            fill
            src={Slider1}
            alt="Widok na zakład opiekuńczo-leczniczy ze strony ulicy"
            className={`w-full h-full object-cover ${loaded || "scaleup"}`}
            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 85vw, 100vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            loading="lazy"
            fill
            src={Slider2}
            alt="Widok na fasadę zakładu opiekuńczo-leczniczego"
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 85vw, 100vw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            loading="lazy"
            fill
            src={Slider3}
            alt="Widok na zakład opiekuńczo-leczniczy od tyłu"
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 85vw, 100vw"
          />
        </SwiperSlide>
      </Swiper>
      <div className="select-none max-w-[85%] sm:max-w-[95%] m-auto mb-12 md:mt-24 absolute inset-0 flex flex-col items-center justify-center z-10">
        <h3
          className="text-xl md:text-4xl uppercase font-medium text-white text-center mb-2 sm:mb-4 md:mb-8 transition-all duration-500 ease-in-out transform-gpu 
    sm:transform-none sm:opacity-0 sm:-translate-y-4 md:opacity-0 md:-translate-y-6 
    lg:text-5xl xl:text-6xl 2xl:text-6xl"
          style={{
            opacity: showAboveText ? 1 : 0,
            transform: showAboveText ? "translateY(0)" : "translateY(25px)",
          }}
        >
          Pomoc | Leczenie | Troska
        </h3>
        <h1
          id="swiper-label"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-white text-center font-bold mb-4 sm:mb-8 transition-all duration-500 ease-in-out transform-gpu 
    sm:transform-none sm:opacity-0 sm:-translate-y-4 md:opacity-0 md:-translate-y-6 
    xl:mb-12 2xl:mb-16"
          style={{
            opacity: showButtons ? 1 : 0,
            transform: showButtons ? "translateY(0)" : "translateY(70px)",
          }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Zakład Opiekuńczo-Leczniczy <br /> w Koprzywnicy")
                .callFunction(() => {
                  setShowAboveText(true);
                })
                .start();
            }}
            options={{ delay: 100, cursor: "" }}
          />
        </h1>
      </div>
      <div
        role="region"
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        style={{ opacity: showArrows ? "1" : "0" }}
        id="swiper-navigation"
        className="flex items-center space-x-4 absolute bottom-1/2 w-full z-20"
      >
        <button
          className="text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center swiper-button-prev"
          role="button"
          aria-label="Poprzedni slajd"
        >
          <BsChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          className="text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center swiper-button-next"
          role="button"
          aria-label="Następny slajd"
        >
          <BsChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};
export default Main;
