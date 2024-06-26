import React from "react";
import Navbar from "src/components/Navbar";
import Image from "next/image";
import Footer from "src/components/Footer";
import CompanyImage from "@/static/slider-3.jpg";
import Link from "next/link";
import Head from "next/head";
import RightSide from "src/components/StowarzyszeniePageComponents/RightSide";
const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Władze Stowarzyszenia | Zakład Opiekuńczo-Leczniczy w Koprzywnicy
        </title>
        <meta
          name="description"
          content="Poznaj władze Stowarzyszenia na Rzecz Osób z Chorobą Alzheimera - dowiedz się, kto stoi na czele organizacji i jakie są cele i działania zarządu."
        />
        <meta
          name="keywords"
          content="Stowarzyszenie na Rzecz Osób z Chorobą Alzheimera, Stowarzyszenie, władze, zarząd, choroba Alzheimera, cele, działania, Zakład opiekuńczo-leczniczy w Koprzywnicy, Koprzywnica."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="./o-stowarzyszeniu/wladze-stowarzyszenia"
        />

        <meta property="og:image" content="/static/slider-3.jpg" />
        <meta name="twitter:card" content="/static/slider-3.jpg" />
        <meta name="twitter:image" content="/static/slider-3.jpg" />
      </Head>

      <Navbar />
      <div className="relative">
        <Image
          src={CompanyImage}
          alt="Widok na zakład opiekuńczo-leczniczy od tyłu"
          width={2400}
          height={500}
          style={{
            objectFit: "cover",
            maxHeight: "500px",
            width: "100%",
            filter: "brightness(70%)",
          }}
        />
        <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
            Władze Stowarzyszenia
          </h1>
          <p className="text-gray-100 text-xl sm:text-2xl font-medium">
            <Link legacyBehavior href="/">
              <a
                href="replace"
                className="text-gray-100 transition-all duration-300 hover:text-primary-light px-2 py-1 rounded hover:text-btn-primary"
              >
                Strona Główna
              </a>
            </Link>
            <span className="mx-2 sm:mx-4 text-gray-300">&gt;</span>
            <Link legacyBehavior href="/o-stowarzyszeniu">
              <a
                href="replace"
                className="text-gray-100 transition-all duration-300 hover:text-primary-light px-2 py-1 rounded hover:text-btn-primary"
              >
                O Stowarzyszeniu
              </a>
            </Link>
            <span className="mx-2 sm:mx-4 text-gray-300">&gt;</span>
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
              reprezentuje stowarzyszenie na zewnątrz. W skład zarządu wchodzą
              trzy osoby:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Prezes - lek. med. Marek Majkowski</li>
              <li>Sekretarz - lek. med. Dominik Machaj</li>
              <li>Skarbnik - Henryka Prewentowska</li>
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
          <RightSide
            image={CompanyImage}
            altContent="Widok na zakład opiekuńczo-leczniczy od tyłu"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
