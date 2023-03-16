import React from "react";
import Navbar from "src/components/Navbar";
import Image from "next/image";
import Footer from "src/components/Footer";
import CompanyImage from "@/static/zaklad.jpg";
import Link from "next/link";
import Head from "next/head";
import RightSide from "src/components/StowarzyszeniePageComponents/RightSide";
import RightSideImage from "@/static/o-stowarzyszeniu.jpg";
const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          O Stowarzyszeniu | Zakład Opiekuńczo-Leczniczy w Koprzywnicy
        </title>
        <meta
          name="description"
          content="Stowarzyszenie na Rzecz Osób z Chorobą Alzheimera z inicjatywy pracowników Niepublicznego Zakładu Opieki Zdrowotnej “MEDYK” w Koprzywnicy to organizacja, która działa na rzecz poprawy jakości życia osób cierpiących na chorobę Alzheimera oraz ich rodzin. Na naszej podstronie opisujemy nasze doświadczenia oraz specjalistyczną ofertę skierowaną do pacjentów z chorobą Alzheimera i innymi chorobami neurologicznymi. Zapraszamy do zapoznania się z naszą działalnością i ofertą usług."
        />
        <meta
          name="keywords"
          content="Stowarzyszenie na Rzecz Osób z Chorobą Alzheimera, choroba Alzheimera, opieka nad osobami z chorobą Alzheimera, Niepubliczny Zakład Opieki Zdrowotnej, MEDYK, Koprzywnica, pomoc dla rodzin osób z chorobą Alzheimera."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="./o-stowarzyszeniu" />
      </Head>

      <Navbar />
      <div className="relative">
        <Image
          src={CompanyImage}
          alt="Widok na zakład opiekuńczo-leczniczy ze strony ulicy"
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
            O Stowarzyszeniu
          </h1>
          <p className="text-gray-100 text-xl sm:text-2xl font-medium">
            <Link legacyBehavior href="/" passHref>
              <a
                href="replace"
                className="text-gray-100 transition-all duration-300 hover:text-primary-light px-2 py-1 rounded hover:text-btn-primary"
              >
                Strona Główna
              </a>
            </Link>
            <span className="mx-2 sm:mx-4 text-gray-300">&gt;</span>
            <span className="px-2 py-1 rounded text-btn-primary">
              O Stowarzyszeniu
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between pt-12 mb-10">
          <div className="w-full md:w-5/12 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">O Stowarzyszeniu</h2>
            <div className="w-full md:w-1/1 mt-6 md:mt-0">
              <p className="mb-4">
                W lutym 2003 roku powstało Stowarzyszenie na Rzecz Osób z
                Chorobą Alzheimera z inicjatywy pracowników Niepublicznego
                Zakładu Opieki Zdrowotnej “MEDYK” w Koprzywnicy, Polska. Chorzy
                z zespołami otępiennymi wciąż stwarzają problemy swoim
                najbliższym, którzy nie potrafią lub nie mogą objąć ich opieką.
                Głównym celem Stowarzyszenia było stworzenie w Koprzywnicy
                Zakładu Opiekuńczo-Leczniczego dla osób z chorobą Alzheimera,
                jak również pozyskiwanie środków finansowych na ten cel.
              </p>
              <p className="mb-4">
                Dzięki staraniom Stowarzyszenia, już od 1 kwietnia 2003 roku
                rozpoczął działalność Zakład Opiekuńczo-Leczniczy dla osób
                chorych na chorobę Alzheimera i zespoły otępienne. Zakład pełni
                opiekę całodobową dla 27 chorych. Od tamtego czasu,
                Stowarzyszenie zrealizowało wiele inicjatyw mających na celu
                zwiększenie świadomości społecznej na temat choroby Alzheimera,
                a także pozyskiwanie środków finansowych na wsparcie osób z tą
                chorobą i ich rodzin.
              </p>
              <p className="mb-4">
                Działania Stowarzyszenia i Zakładu Opiekuńczego są nadal
                szczególnie ważne ze względu na rosnącą liczbę osób z chorobą
                Alzheimera i innymi schorzeniami otępiennymi. Według aktualnych
                danych WHO, na świecie w 2021 roku było około 55 milionów ludzi
                cierpiących na demencję, a ta liczba ma się podwoić co 20 lat,
                co oznacza, że do 2050 roku może być nawet 139 milionów
                przypadków. W Polsce, zgodnie z danymi Polskiego Towarzystwa
                Alzheimerowskiego, jest około 600 tysięcy osób z chorobą
                Alzheimera lub innymi schorzeniami otępiennymi, a liczba ta
                będzie nadal wzrastać ze względu na starzenie się społeczeństwa.
              </p>
              <p className="mb-4">
                Obecnie, na dzień dzisiejszy, Zakład Opiekuńczo-Leczniczy nadal
                funkcjonuje, zapewniając opiekę dla chorych z chorobą Alzheimera
                i zespołami otępiennymi. Stowarzyszenie wciąż angażuje się w
                działania na rzecz poprawy sytuacji osób z tą chorobą i ich
                bliskich, a także w budowę świadomości społecznej na temat
                problemów, jakie stwarza choroba Alzheimera.
              </p>
            </div>
          </div>
          <RightSide
            image={RightSideImage}
            altContent="Zdjęcie pokazujące nasz zespół przy wejściu do zakładu"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
