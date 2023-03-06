import React, { useMemo } from "react";
import Navbar from "src/components/Navbar";
import Image from "next/image";
import Footer from "src/components/Footer";
import CompanyImage from "../../../public/images/slider-3.jpg";
import Link from "next/link";
const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Image
          src={CompanyImage}
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-7xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
            Władze Stowarzyszenia
          </h1>
          <p className="text-gray-100 text-2xl font-medium">
            <Link legacyBehavior href="/">
              <a className="text-primary transition-all duration-300 hover:text-primary-light px-2 py-1 rounded hover:text-btn-primary">
                Strona Główna
              </a>
            </Link>
            <span className="mx-4 text-gray-300">&gt;</span>
            <Link legacyBehavior href="/o-stowarzyszeniu">
              <a className="text-primary transition-all duration-300 hover:text-primary-light px-2 py-1 rounded hover:text-btn-primary">
                O Stowarzyszeniu
              </a>
            </Link>
            <span className="mx-4 text-gray-300">&gt;</span>
            <span className="px-2 py-1 rounded text-btn-primary">
              Władze Stowarzyszenia
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between pt-12 mb-10">
          <div className="w-full md:w-5/12 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Władze Stowarzyszenia</h2>
            <p className="text-lg leading-relaxed mb-4">
              Stowarzyszenie na Rzecz Osób z Chorobą Alzheimera w Koprzywnicy
              jest organizacją, która angażuje się w pomoc ludziom cierpiącym na
              chorobę Alzheimera. Zarząd stowarzyszenia jest organem, który
              kieruje działalnością organizacji, podejmuje decyzje i
              reprezentuje stowarzyszenie na zewnątrz. W skład zarządu wchodzi
              pięć osób:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Prezes - lek. med. Marek Majkowski</li>
              <li>Wiceprezes - dr n. med. Piotr Sobolewski</li>
              <li>Sekretarz - lek. med. Dominik Machaj</li>
              <li>Skarbnik - Henryka Prewentowska</li>
              <li>Członek Zarządu - lek. stom. Alicja Magda</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Stowarzyszenie posiada także Komisję Rewizyjną, której zadaniem
              jest kontrolowanie finansów i działalności stowarzyszenia. W skład
              Komisji Rewizyjnej wchodzą trzy osoby: Agnieszka Ordon, Józef
              Opala i Maria Banaś. Dzięki zaangażowaniu i pracy zarządu oraz
              Komisji Rewizyjnej, Stowarzyszenie na Rzecz Osób z Chorobą
              Alzheimera w Koprzywnicy może efektywnie działać na rzecz chorych
              i ich rodzin.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <div className="overflow-hidden border-4 border-gray-200 hover:border-btn-primary transform hover:scale-105 transition-all duration-500">
              <div className="perspective-1000">
                <div className="transform rotate-x-20 rotate-y-10">
                  <Image
                    src={CompanyImage}
                    alt="Zdjęcie Stowarzyszenia"
                    className="h-96 w-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
