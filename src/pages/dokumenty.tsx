import { FaFileDownload } from "react-icons/fa";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import SkalaBarthel from "../static/documents/SkalaBarthel.docx";
import SkierowanieDoZakładu from "../static/documents/SkierowanieDoZakładu.docx";
import WywiadPielegniarski from "../static/documents/WywiadPielegniarski.docx";
import ZaswiadczenieLekarskie from "../static/documents/ZaswiadczenieLekarskie.docx";
import { Transition } from "react-transition-group";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { contactData } from "src/static/contactData";
const duration = 300;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: "scale(1)",
};

type TransitionStyles = {
  [key: string]: { transform: string };
};

const transitionStyles: TransitionStyles = {
  entering: { transform: "scale(1.05)" },
  entered: { transform: "scale(1.05)" },
  exiting: { transform: "scale(1)" },
  exited: { transform: "scale(1)" },
};

type Document = {
  name: string;
  file: string;
  fileName: string;
  description: string;
};

const documents: Document[] = [
  {
    name: "Skala Barthel",
    fileName: "Skala Barthel.docx",
    file: SkalaBarthel,
    description:
      "Formularz oceny zdolności pacjenta do wykonywania codziennych czynności",
  },
  {
    name: "Skierowanie do zakładu",
    fileName: "Skierowanie do zakładu.docx",
    file: SkierowanieDoZakładu,
    description: "Formularz skierowania pacjenta do zakładu opiekuńczego",
  },
  {
    name: "Wywiad pielęgniarski",
    fileName: "Wywiad pielęgniarski.docx",
    file: WywiadPielegniarski,
    description:
      "Formularz zawierający pytania dotyczące stanu zdrowia pacjenta",
  },
  {
    name: "Zaświadczenie lekarskie",
    fileName: "Zaświadczenie lekarskie.docx",
    file: ZaswiadczenieLekarskie,
    description: "Dokument potwierdzający stan zdrowia pacjenta",
  },
];

const DocumentDownload = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  return (
    <>
      <Head>
        <title>Dokumenty zakładu opiekuńczo-leczniczego dla pacjentów</title>
        <meta
          name="description"
          content="Znajdź wszystkie niezbędne dokumenty związane z pobytem w naszym zakładzie opiekuńczo-leczniczym."
        />
        <meta
          name="keywords"
          content="dokumenty, zakład opiekuńczo-leczniczy, pacjenci, opieka, medycyna"
        />
        <meta name="author" content={contactData.author} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Dokumenty zakładu opiekuńczo-leczniczego dla pacjentów"
        />
        <meta
          property="og:description"
          content="Znajdź wszystkie niezbędne dokumenty związane z pobytem w naszym zakładzie opiekuńczo-leczniczym."
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="bg-background-tertiary py-10 flex-grow">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-text-gray-800">
                Dokumenty do pobrania
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {documents.map((document, index) => (
                <Link
                  key={index}
                  href={document.file}
                  download={document.fileName}
                  className="text-lg font-bold text-text-gray-800 hover:text-btn-primary transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="bg-background-secondary rounded-lg shadow-custom-lg p-8 flex flex-col justify-center items-center"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    <Transition in={activeIndex === index} timeout={duration}>
                      {(state) => (
                        <FaFileDownload
                          className="h-10 w-10 text-primary mb-4"
                          style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                          }}
                        />
                      )}
                    </Transition>

                    <Transition in={activeIndex === index} timeout={duration}>
                      {(state) => (
                        <div
                          style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                          }}
                        >
                          {document.name}
                        </div>
                      )}
                    </Transition>

                    <p className="text-text-gray-500 text-sm mt-2">
                      {document.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DocumentDownload;
