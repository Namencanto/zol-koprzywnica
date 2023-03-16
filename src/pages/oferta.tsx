import Image from "next/image";
import { FunctionComponent, useState, useContext } from "react";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import { ThemeContext } from "src/context/themeContext";
import Head from "next/head";
import { services } from "src/components/ofertaData";
import { FaTimes } from "react-icons/fa";
import React from "react";
import ImageSlider from "src/components/WydarzeniaPageComponents/ImageSlider";
import { Service } from "src/components/ofertaData";

const Offer: FunctionComponent = () => {
  const [displayImage, setDisplayImage] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const { theme } = useContext(ThemeContext);
  const [activeService, setActiveService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setActiveService(service);
  };

  return (
    <>
      <Head>
        <title>
          Oferta rehabilitacji - Zakład Opiekuńczo-Leczniczy w Koprzywnicy
        </title>
        <meta
          name="description"
          content="Zapraszamy do skorzystania z naszej oferty rehabilitacji w Zakładzie Opiekuńczo-Leczniczym. Oferujemy szeroki zakres zabiegów rehabilitacyjnych, dostosowanych do potrzeb pacjentów."
        />
        <meta
          name="keywords"
          content="Zakład opiekuńczo-leczniczy, Alzheimer, otępienie, choroba somatyczna, opieka nad osobami starszymi, badania naukowe, metody terapeutyczne, zakład ogólny, zakład psychiatryczny, usługi opieki medycznej, personel pielęgniarski, rehabilitacja, fizjoterapia, terapia zajęciowa, fizykoterapia, lekarz internista, psychiatra, psycholog."
        />

        <meta
          property="og:title"
          content="Oferta rehabilitacji - Zakład Opiekuńczo-Leczniczy"
        />
        <meta
          property="og:description"
          content="Zapraszamy do skorzystania z naszej oferty rehabilitacji w Zakładzie Opiekuńczo-Leczniczym. Oferujemy szeroki zakres zabiegów rehabilitacyjnych, dostosowanych do potrzeb pacjentów."
        />
        <meta
          property="og:image:alt"
          content="Zdjęcie przedstawiające jedną z sal rehabilitacji"
        />

        <meta
          name="twitter:title"
          content="Oferta rehabilitacji - Zakład Opiekuńczo-Leczniczy"
        />
        <meta
          name="twitter:description"
          content="Zapraszamy do skorzystania z naszej oferty rehabilitacji w Zakładzie Opiekuńczo-Leczniczym. Oferujemy szeroki zakres zabiegów rehabilitacyjnych, dostosowanych do potrzeb pacjentów."
        />
        <meta property="og:image" content="/static/oferta.jpg" />
        <meta name="twitter:card" content="/static/oferta.jpg" />
        <meta name="twitter:image" content="/static/oferta.jpg" />
      </Head>
      <div
        tabIndex={selectedImage !== 0 ? -1 : 0}
        className="flex flex-col min-h-screen w-full"
      >
        <Navbar />
        <section className="bg-background-tertiary">
          <div className="container mx-auto px-4 py-10 flex-grow">
            <header>
              <h1 className="text-3xl font-bold my-6">Nasza oferta</h1>
            </header>
            <article className="my-6">
              <p className="text-lg">
                Nasz zakład opiekuńczo-leczniczy specjalizuje się w opiece nad
                osobami z chorobą Alzheimera, inne otępienia oraz somatyczne
                choroby przewlekłe. W zakładzie prowadzone były badania naukowe
                nad chorobą, co pozwoliło na lepsze zrozumienie procesów
                zachodzących w organizmie pacjentów z tą chorobą oraz na
                dopasowanie odpowiednich metod terapeutycznych.
              </p>
              <p className="text-lg">
                Zakład podzielony jest na dwie sekcje: zakład ogólny i zakład
                psychiatryczny. W zakładzie oferowane są specjalistyczne usługi
                opieki medycznej, sprawowanej przez wykwalifikowany personel
                pielęgniarski i opiekuńczy oraz rehabilitacji, takie jak
                fizjoterapia, terapia zajęciowa czy fizykoterapia, opieka
                lekarza internisty, psychiatry oraz psychologa.
              </p>
            </article>
            <section className="my-6">
              <h2 className="text-xl mb-4 text-center">
                Nasze usługi medyczne
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                {services.map((service, index) => (
                  <div
                    className={`relative overflow-hidden rounded-lg shadow-custom-lg border bg-background-secondary cursor-pointer ${
                      theme === "light"
                        ? "border-gray-300"
                        : "border-background-tertiary"
                    }`}
                    key={index}
                  >
                    <div
                      onKeyUp={(e) => {
                        if (e.key === "Escape") {
                          setActiveService(null);
                        }
                        if (e.key === "Enter") {
                          setActiveService(service);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      className="absolute top-0 left-0 w-full h-full z-10 opacity-0 focus:opacity-100 hover:opacity-100 transition-opacity duration-300 bg-gray-900 bg-opacity-50 flex justify-center items-center"
                      onClick={() => handleServiceClick(service)}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                    </div>
                    <Image
                      className="w-full h-64 object-cover"
                      src={service.photos[0]}
                      alt={service.title}
                    />
                    <div className="p-4">
                      <p className="text-base">{service.brief}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {activeService && (
              <section
                role="region"
                aria-labelledby="modal-title"
                className="overflow-auto fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gray-800 bg-opacity-75"
                onClick={(event) => {
                  if (event.target === event.currentTarget) {
                    setActiveService(null);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "ESC") {
                    if (event.target === event.currentTarget) {
                      setActiveService(null);
                    }
                  }
                }}
              >
                <div
                  aria-modal="true"
                  className="bg-background-secondary relative rounded-lg shadow-custom-lg p-8 max-w-screen-md mx-4 my-8"
                  style={{ maxHeight: "calc(100vh - 16px)", overflowY: "auto" }}
                >
                  <div>
                    <h3
                      id="modal-title"
                      className="text-2xl text-center font-bold text-text-gray-800 mb-2"
                    >
                      {activeService.title}
                    </h3>
                    {activeService.description.map((text) => {
                      return (
                        <p
                          key={text}
                          className="text-base text-text-gray-700 mb-4"
                        >
                          {text}
                        </p>
                      );
                    })}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {activeService.title !== "Badania diagnostyczne" &&
                      activeService.title !== "Transport medyczny" &&
                      activeService.photos.map(
                        (photo: string, index: string) => (
                          <Image
                            tabIndex={0}
                            role="button"
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                const element = e.target as HTMLImageElement;
                                setDisplayImage(true);
                                setSelectedImage(+element.id);
                              }
                            }}
                            onClick={(e) => {
                              const element = e.target as HTMLImageElement;
                              setDisplayImage(true);
                              setSelectedImage(+element.id);
                            }}
                            id={index}
                            height={190}
                            width={210}
                            key={index}
                            className="w-full h-48 object-cover rounded-lg transform hover:scale-105 outline-none focus:scale-105 transition duration-500 ease-in-out"
                            src={photo}
                            alt={activeService.title}
                          />
                        )
                      )}
                  </div>
                  <button
                    aria-label="Zamknij okno"
                    tabIndex={0}
                    role="button"
                    className="absolute top-0 right-0 mt-4 mr-4 p-2 text-text-gray-500 hover:text-text-gray-700"
                    onClick={() => setActiveService(null)}
                  >
                    <FaTimes />
                  </button>
                </div>
              </section>
            )}
          </div>
        </section>

        <Footer />
      </div>
      <ImageSlider
        images={activeService?.photos}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        displayImage={displayImage}
        setDisplayImage={setDisplayImage}
      />
    </>
  );
};

export default Offer;
