import Slider1 from "@/images/slider-1.jpg";
import Slider2 from "@/images/slider-2.jpg";
import Slider3 from "@/images/slider-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Main = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const [showAboveText, setShowAboveText] = useState(false);

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

  const [activeIndex, setActiveIndex] = useState(0);
  const handleSwiper = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 15000);
  }, []);
  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 10000 }}
        navigation={showArrows}
        pagination={{ clickable: showButtons }}
        scrollbar={false}
        style={{ userSelect: "none", filter: "brightness(80%)" }}
        className="w-full sm:h-[40rem] h-[20rem]"
        onSwiper={handleSwiper}
      >
        <SwiperSlide className="overflow-hidden">
          <Image
            fill
            src={Slider1}
            alt="Widok na zakład opiekuńczo-leczniczy ze strony ulicy"
            className={`w-full h-full object-cover ${loaded || "scaleup"}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            src={Slider2}
            alt="Widok na fasadę zakładu opiekuńczo-leczniczego"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            fill
            src={Slider3}
            alt="Widok na zakład opiekuńczo-leczniczy od tyłu"
            className="w-full h-full object-cover"
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
    </div>
  );
};
export default Main;
