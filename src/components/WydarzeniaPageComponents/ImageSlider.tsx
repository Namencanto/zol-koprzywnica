import React, { useEffect } from "react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { IoClose, IoArrowBack, IoArrowForward } from "react-icons/io5";
SwiperCore.use([Navigation]);
import ReactDOM from "react-dom";

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

  useEffect(() => {
    const modalContainer = document?.getElementById("modal-root");
    // create a div element for the modal and append it to the modal container
    const modalElement = document?.createElement("div");
    modalContainer?.appendChild(modalElement);

    return () => {
      modalContainer?.removeChild(modalElement);
    };
  }, []);

  if (!displayImage) {
    return null;
  }

  const handleNextImage = (e: any) => {
    e.stopPropagation();
    if (selectedImage === images.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handlePreviousImage = (e: any) => {
    e.stopPropagation();
    if (selectedImage === 0) {
      setSelectedImage(images.length - 1);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };

  return ReactDOM.createPortal(
    <div
      aria-modal="true"
      role="dialog"
      className="relative modal-content"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          if (event.target === event.currentTarget) {
            handleNextImage(event);
          }
        }
        if (event.key === "ArrowLeft") {
          if (event.target === event.currentTarget) {
            handlePreviousImage(event);
          }
        }
        if (event.key === "ESC") {
          if (event.target === event.currentTarget) {
            handleFullscreenClose();
          }
        }
      }}
    >
      {displayImage && (
        <div
          role="region"
          className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
          onClick={handleFullscreenClose}
          onKeyDown={(event) => {
            if (event.key === "ESC") {
              if (event.target === event.currentTarget) {
                handleFullscreenClose();
              }
            }
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              onClick={(e) => {
                e.stopPropagation();
              }}
              loading="eager"
              sizes="100%"
              width={1185}
              height={890}
              src={images[selectedImage]}
              alt={`Slide ${selectedImage}`}
              className="w-auto h-4/6 object-contain"
            />
            <button
              autoFocus
              tabIndex={0}
              className="focus:outline-4 outline-white absolute top-4 right-4 p-2 text-white bg-gray-700 bg-opacity-80 rounded-full focus:outline-none"
            >
              <IoClose size={24} />
            </button>

            <button
              tabIndex={0}
              className="focus:outline-4 outline-white absolute top-1/2 left-4 p-2 text-white bg-gray-700 bg-opacity-80 rounded-full focus:outline-none transform -translate-y-1/2"
              onClick={handlePreviousImage}
            >
              <IoArrowBack size={24} />
            </button>
            <button
              tabIndex={0}
              className="focus:outline-4 outline-white absolute top-1/2 right-4 p-2 text-white bg-gray-700 bg-opacity-80 rounded-full focus:outline-none transform -translate-y-1/2"
              onClick={handleNextImage}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  if (event.target === event.currentTarget) {
                    handleNextImage(event);
                  }
                }
              }}
            >
              <IoArrowForward size={24} />
            </button>
          </div>
        </div>
      )}
    </div>,
    document?.getElementById("modal-root") as Element
  );
};

export default ImageSlider;
