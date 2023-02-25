import React, { useMemo } from "react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { IoClose, IoArrowBack, IoArrowForward } from "react-icons/io5";
SwiperCore.use([Navigation]);

interface Props {
  images: string[];
  setDisplayImage: (arg0: boolean) => void;
  setSelectedImage: (arg0: number) => void;
  displayImage: boolean;
  selectedImage: number;
}

const ImageSlider: React.FC<Props> = ({
  images,
  displayImage,
  setDisplayImage,
  selectedImage,
  setSelectedImage,
}) => {
  const handleFullscreenClose = () => {
    setDisplayImage(false);
  };

  const handleNextImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (selectedImage === images.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handlePreviousImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (selectedImage === 0) {
      setSelectedImage(images.length - 1);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <div className="relative">
      {displayImage && (
        <div
          className="fixed z-10 top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
          onClick={handleFullscreenClose}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              onClick={(e) => {
                e.stopPropagation();
              }}
              width={500}
              height={500}
              src={images[selectedImage]}
              alt={`Slide ${selectedImage}`}
              className="w-full h-4/6 object-contain"
            />
            <button className="absolute top-4 right-4 p-2 text-white bg-gray-700 bg-opacity-80 rounded-full focus:outline-none">
              <IoClose size={24} />
            </button>

            <button
              className="absolute top-1/2 left-4 p-2 text-white bg-gray-700 bg-opacity-80 rounded-full focus:outline-none transform -translate-y-1/2"
              onClick={handlePreviousImage}
            >
              <IoArrowBack size={24} />
            </button>
            <button
              className="absolute top-1/2 right-4 p-2 text-white bg-gray-700 bg-opacity-80 rounded-full focus:outline-none transform -translate-y-1/2"
              onClick={handleNextImage}
            >
              <IoArrowForward size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;