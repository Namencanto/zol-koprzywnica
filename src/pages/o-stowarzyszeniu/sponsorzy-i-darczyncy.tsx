import React from "react";
import Navbar from "src/components/Navbar";
import Image from "next/image";
import Footer from "src/components/Footer";
import CompanyImage from "@/static/slider-2.jpg";
import Link from "next/link";
import Head from "next/head";
import RightSide from "src/components/StowarzyszeniePageComponents/RightSide";
const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Sponsorzy i darczyńcy | Zakład Opiekuńczo-Leczniczy w Koprzywnicy
        </title>
        <meta
          name="description"
          content="Zobacz listę sponsorów i darczyńców, którzy wspierają działalność Stowarzyszenia na Rzecz Osób z Chorobą Alzheimera z inicjatywy pracowników Niepublicznego Zakładu Opieki Zdrowotnej “MEDYK” w Koprzywnicy."
        />
        <meta
          name="keywords"
          content="Stowarzyszenie na Rzecz Osób z Chorobą Alzheimera, Stowarzyszenie, Osoby z Chorobą Alzheimera, sponsorzy, darczyńcy, medyk, Koprzywnica, Zakład opiekuńczo-leczniczy w koprzywnicy."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="./o-stowarzyszeniu/sponsorzy-i-darczyncy"
        />

        <meta property="og:image" content="/images/slider-2.jpg" />
        <meta name="twitter:card" content="/images/slider-2.jpg" />
        <meta name="twitter:image" content="/images/slider-2.jpg" />
      </Head>

      <Navbar />
      <div className="relative">
        <Image
          src={CompanyImage}
          alt="Widok na fasadę zakładu opiekuńczo-leczniczego"
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
            Sponsorzy i darczyńcy
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
              Sponsorzy i darczyńcy
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between pt-12 mb-10">
          <div className="w-full md:w-5/12 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Sponsorzy i darczyńcy</h2>
            <p className="text-lg leading-relaxed mb-4">
              Stowarzyszenie otrzymało wsparcie od wielu instytucji i
              organizacji. Rada Miasta i Gminy Koprzywnicy przekazała budynek w
              stanie surowym i działkę przy ulicy Szkolnej 12, a Spółka
              Wspólnoty Gruntowej w Koprzywnicy przekazała działkę leśno-parkową
              o powierzchni 35 arów. Gminna Komisja Rozwiązywania Problemów
              Alkoholowych w Koprzywnicy przekazała kwotę 1000 złotych. Poparcie
              dla przedsięwzięcia wyrazili również regionalni parlamentarzyści,
              władze samorządowe na szczeblu wojewódzkim i powiatowym, a także
              rady sołeckie z terenu Gminy Koprzywnica. Pierwszy numer biuletynu
              &ldquo;Pomocna dłoń&ldquo; został sfinansowany przez Drukarnię
              H.B. Goryccy w Koprzywnicy, a biuletyn oraz witryna internetowa
              Stowarzyszenia są finansowane przez program
              &ldquo;Szklarnia&ldquo; Fundacji im. Stefana Batorego, który jest
              realizowany przez Stowarzyszenie Rozwoju Lokalnego i Filantropii w
              Kielcach. Wsparcie finansowe otrzymało również Stowarzyszenie od
              Powiatowego Centrum Pomocy Rodzinie w Sandomierzu, firmy SANPLAST
              z Wymysłowic, PILKINGTON Automotive z Sandomierza oraz Rady Miasta
              Sandomierz.
            </p>
            <p className="text-lg leading-relaxed">
              Nawiązując do myśli zawartej w sentencji Otwórzmy Serce Dla
              Wszystkich, okażmy pomoc dla ludzi chorych i cierpiących,
              przyczyńmy się do realizacji tak szczytnego celu.
            </p>
          </div>
          <RightSide
            image={CompanyImage}
            altContent="Widok na fasadę zakładu opiekuńczo-leczniczego"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
