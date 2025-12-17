import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { contactData } from "src/static/contactData";
import Link from "next/link";
const PolitykaPrywatnosci: NextPage = () => {
  return (
    <>
      <Head>
        <title>Polityka prywatności - Zakład Opiekuńczo-Leczniczy</title>
        <meta
          name="description"
          content="Zapoznaj się z naszą polityką prywatności. Dowiedz się, jakie informacje zbieramy i jak je wykorzystujemy."
        />
        <meta
          name="keywords"
          content="polityka prywatności, prywatność, dane osobowe, RODO, informacje zbierane przez serwis, pliki cookies"
        />

        <meta
          property="og:title"
          content="Polityka prywatności - Zakład Opiekuńczo-Leczniczy"
        />
        <meta
          property="og:description"
          content="Zapoznaj się z naszą polityką prywatności. Dowiedz się, jakie informacje zbieramy i jak je wykorzystujemy."
        />
        <meta
          name="twitter:description"
          content="Zapoznaj się z naszą polityką prywatności. Dowiedz się, jakie informacje zbieramy i jak je wykorzystujemy."
        />
        <meta property="og:image" content="/static/zaklad.jpg" />
        <meta name="twitter:card" content="/static/zaklad.jpg" />
        <meta name="twitter:image" content="/static/zaklad.jpg" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex-grow">
          <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-4" role="heading">
              Polityka prywatności
            </h1>
            <section className="mb-4">
              <h2 className="text-lg font-semibold mb-2" role="heading">
                1. Informacje ogólne
              </h2>
              <p className="text-sm mb-4">
                Niniejsza polityka dotyczy Serwisu związanego z{" "}
                <span>
                  Stowarzyszeniem na Rzecz Osób z Chorobą Alzheimera w
                  Koprzywnicy
                </span>{" "}
                (zol-koprzywnica.pl), z siedzibą przy ul. Szkolnej 8, 27-660
                Koprzywnica. Serwis wykorzystuje Google Analytics do zbierania
                anonimowych informacji na temat korzystania z witryny w celu
                poprawy jakości świadczonych usług oraz analizy ruchu na
                stronie. Dane zbierane przez Google Analytics są przetwarzane w
                sposób anonimowy, nie pozwalają na identyfikację użytkowników
                ani ich danych osobowych. Dane osobowe zbierane przez
                Stowarzyszenie za pośrednictwem Serwisu Internetowego są
                przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego
                i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
                ochrony osób fizycznych w związku z przetwarzaniem danych
                osobowych i w sprawie swobodnego przepływu takich danych oraz
                uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
                danych), zwane również RODO.
              </p>
            </section>
            <section className="mb-4 ">
              <h2 className="text-lg font-semibold mb-2" role="heading">
                2. Administrator danych osobowych
              </h2>
              <div title="Nazwa operatora" className="contact-info">
                <p className="text-sm ">
                  Administrator danych osobowych:{" "}
                  <span className="font-semibold">
                    {contactData.operatorName}
                  </span>
                </p>
                <address
                  title="Adres operatora"
                  className="text-sm text-primary"
                >
                  Adres:{" "}
                  <span className="font-semibold">
                    {contactData.location[0]} {contactData.location[1]}
                  </span>
                </address>
                <Link
                  href={`mailto:${contactData.email}`}
                  title="Napisz e-mail"
                  className="text-sm text-primary"
                >
                  Adres e-mail:{" "}
                  <span className="font-semibold">{contactData.email}</span>
                </Link>
                <br />
                <Link
                  href={`tel:${contactData.landLineNumber}`}
                  title="Telefon stacjonarny"
                  className="text-sm text-primary"
                >
                  Telefon:{" "}
                  <span className="font-semibold">
                    {contactData.landLineNumber}
                  </span>
                </Link>
                <br />
                <Link
                  href={`tel:${
                    contactData.phoneNumberHref || contactData.phoneNumber
                  }`}
                  title="Telefon komórkowy"
                  className="text-sm text-primary"
                >
                  Telefon komórkowy:{" "}
                  <span className="font-semibold">
                    {contactData.phoneNumber}
                  </span>
                </Link>
                <br />
                <p className="text-sm">
                  Godziny kontaktu:{" "}
                  <span className="font-semibold">
                    {contactData.workingHours}
                  </span>
                </p>
              </div>
            </section>
            <section className="mb-4">
              <h2 className="text-lg font-semibold mb-2" role="heading">
                3. Cele przetwarzania danych osobowych
              </h2>
              <p className="text-sm mb-4">
                Stowarzyszenie na Rzecz Osób z Chorobą Alzheimera w Koprzywnicy
                przetwarza dane osobowe w celu umożliwienia kontaktu za
                pośrednictwem formularza kontaktowego oraz w celu optymalizacji
                i ulepszania witryny
              </p>
            </section>
            <section className="mb-4">
              <h2 className="text-lg font-semibold mb-2" role="heading">
                4. Prawa osoby, której dane dotyczą
              </h2>
              <p className="text-sm mb-4">
                Każda osoba, której dane osobowe są przetwarzane przez
                Stowarzyszenie na Rzecz Osób z Chorobą Alzheimera w Koprzywnicy,
                ma prawo do wglądu w swoje dane, ich poprawiania, usunięcia,
                ograniczenia przetwarzania, przenoszenia danych oraz wniesienia
                sprzeciwu wobec przetwarzania danych osobowych. W celu
                skorzystania z tych praw należy skontaktować się z
                administratorem danych osobowych za pomocą formularza
                kontaktowego lub za pomocą innych dostępnych danych
                kontaktowych.
              </p>
            </section>
            <section className="mb-4">
              <h2 className="text-lg font-semibold mb-2" role="heading">
                5. Okres przechowywania danych osobowych
              </h2>
              <p className="text-sm mb-4">
                Dane osobowe przetwarzane przez Stowarzyszenie na Rzecz Osób z
                Chorobą Alzheimera w Koprzywnicy są przechowywane przez okres
                niezbędny do realizacji celów, dla których zostały zebrane, a
                także w celu spełnienia wymagań wynikających z przepisów prawa,
                w tym w szczególności z przepisów dotyczących przechowywania
                dokumentów księgowych i podatkowych. Po upływie tego okresu dane
                są usuwane lub anonimizowane.
              </p>
            </section>
            <section className="mb-4">
              <h2 className="text-lg font-semibold mb-2" role="heading">
                6. Odbiorcy danych osobowych
              </h2>
              <p className="text-sm mb-4">
                Dane osobowe przetwarzane przez Stowarzyszenie na Rzecz Osób z
                Chorobą Alzheimera w Koprzywnicy nie są udostępniane innym
                podmiotom bez zgody osoby, której dane dotyczą, chyba że
                przepisy prawa nakładają na Stowarzyszenie obowiązek przekazania
                danych osobowych uprawnionym organom państwowym, np. organom
                ścigania lub organom podatkowym. W takim przypadku
                Stowarzyszenie przekaże jedynie te dane osobowe, które są
                niezbędne do realizacji danego celu.
              </p>
            </section>
            <section className="mb-4">
              <h2 className="text-lg font-semibold mb-2" role="heading">
                7. Przetwarzanie danych z formularza kontaktowego
              </h2>
              <p className="text-sm mb-4">
                Dane osobowe przekazywane przez użytkowników za pomocą
                formularza kontaktowego są przetwarzane w celu udzielenia
                odpowiedzi na zadane pytania lub umożliwienia kontaktu. Wymagane
                dane to imię, nazwisko, adres e-mail i numer telefonu. Dane
                przetwarzane są na podstawie art. 6 ust. 1 lit. a) RODO.
              </p>
              <p className="text-sm mb-4">
                Dane z formularza kontaktowego są przekazywane za pośrednictwem
                usługi hostingowej na serwer firmy w celu umożliwienia kontaktu
                z użytkownikami. Dane są przechowywane przez okres niezbędny do
                udzielenia odpowiedzi na zadane pytania lub nawiązania kontaktu.
                Administrator zastrzega sobie prawo do archiwizacji
                korespondencji w celu późniejszego wykorzystania w przypadku
                potrzeby obrony prawnej lub rozliczeń księgowych.
              </p>
            </section>
            <section className="mb-4">
              <h2 className="text-lg font-semibold mb-2" role="heading">
                8. Zmiany w Polityce prywatności
              </h2>
              <p className="text-sm mb-4">
                Polityka prywatności Stowarzyszenia na Rzecz Osób z Chorobą
                Alzheimera w Koprzywnicy może ulec zmianie w przyszłości.
                Wszelkie zmiany będą publikowane na stronie internetowej
                Stowarzyszenia. Zachęcamy do regularnego sprawdzania tej strony,
                aby być na bieżąco z obowiązującymi zasadami przetwarzania
                danych osobowych.
              </p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PolitykaPrywatnosci;
