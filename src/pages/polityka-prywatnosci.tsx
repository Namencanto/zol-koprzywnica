import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PolitykaPrywatnosci: NextPage = () => {
  return (
    <>
      <Head>
        <title>Polityka prywatności - Zakład Opiekuńczo-Leczniczy</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex-grow">
          <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-4">
              Polityka prywatności serwisu internetowego
            </h1>
            <p className="text-lg font-semibold mb-2">1. Informacje ogólne</p>
            <p className="mb-4">
              Niniejsza polityka prywatności określa zasady przetwarzania i
              ochrony danych osobowych przekazanych przez Użytkowników w związku
              z korzystaniem z serwisu internetowego dostępnego pod adresem url
              serwisu.
            </p>
            <p className="text-lg font-semibold mb-2">
              2. Administratorem danych osobowych zawartych w serwisie jest:
            </p>
            <p className="mb-4">
              Imię i nazwisko: [Imię i nazwisko]
              <br />
              Adres: [Adres]
              <br />
              Adres e-mail: [Adres e-mail]
              <br />
              Telefon: [Telefon]
              <br />
              [Kolejne dane kontaktowe, jeżeli są dostępne]
              <br />
              [Kolejne dane, jeżeli są wymagane]
            </p>
            <p className="text-lg font-semibold mb-2">
              3. Cele przetwarzania danych osobowych
            </p>
            <p className="mb-4">
              3.1. Serwis przetwarza dane osobowe użytkowników w następujących
              celach:
              <br />
              a) Obsługa zapytań przez formularz
              <br />
              b) Prezentacja oferty lub informacji
              <br />
              c) Prowadzenie działań marketingowych
              <br />
              d) Prowadzenie rekrutacji do pracy lub staży
              <br />
              e) Inne cele wynikające z treści formularzy, o których użytkownik
              zostanie poinformowany
            </p>
            <p className="text-lg font-semibold mb-2">
              4. Podstawa prawna przetwarzania danych osobowych
            </p>
            <p className="mb-4">
              4.1. Serwis przetwarza dane osobowe na podstawie wyrażonej zgody
              lub innej przewidzianej przez prawo podstawy prawnej, zgodnie z
              przepisami powszechnie obowiązującego prawa.
            </p>
            <p className="text-lg font-semibold mb-2">
              5. Odbiorcy danych osobowych
            </p>
            <p className="mb-4">
              5.1. Odbiorcami danych osobowych są:
              <br />
              a) Podmioty świadczące na rzecz Administratora usługi hostingowe
              lub dostarczające narzędzia do realizacji usług świadczonych drogą
              elektroniczną,
              <br />
              b) Operator płatności elektronicznych lub operator płatności
              kartowych, z którym Administrator współpracuje w zakresie obsługi
              płatności dokonywanych za pośrednictwem Serwisu,
              <br />
              c) Inne podmioty, za zgodą Użytkownika oraz w przypadkach,
              określonych przepisami prawa.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PolitykaPrywatnosci;
