import Image, { StaticImageData } from "next/image";
import React from "react";

interface ShareButtonsProps {
  image: StaticImageData;
  altContent: string;
}

const RightSide: React.FC<ShareButtonsProps> = ({ image, altContent }) => {
  return (
    <section className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <div className="overflow-hidden border-4 border-background-tertiary">
        <div className="perspective-1000">
          <div className="transform rotate-x-20 rotate-y-10">
            <Image
              src={image}
              alt={altContent}
              className="h-96 w-full object-cover"
            />
          </div>
        </div>
        <div className="bg-background-tertiary py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="sm:flex sm:items-center sm:justify-between">
              <h2 className="text-3xl font-bold text-text-gray-900 sm:mb-2 sm:pr-16">
                Stowarzyszenie na Rzecz Osób z Chorobą Alzheimera
              </h2>
              <p className="text-xl font-medium text-text-gray-600 sm:text-right">
                numer KRS: 0000116751
              </p>
            </div>
            <div className="mt-6">
              <p className="text-lg text-text-gray-600">
                Osoby fizyczne, firmy oraz instytucje chcące wesprzeć naszą
                szczytną inicjatywę, proszone są o dokonywanie wpłat na konto
                Stowarzyszenia:
              </p>
              <p className="mt-3 text-lg font-medium text-text-gray-900">
                Stowarzyszenie na Rzecz Osób z Chorobą Alzheimera
              </p>
              <p className="text-lg text-text-gray-600">
                w Koprzywnicy, ul. Szkolna 8, 27-660 Koprzywnica
              </p>
              <p className="text-lg text-text-gray-600">
                Nadwiślański Bank Spółdzielczy w Solcu Zdroju,
              </p>
              <p className="text-lg text-text-gray-600">oddz. Koprzywnica</p>
              <p className="mt-3 text-lg font-medium text-text-gray-900">
                nr rachunku: 31 8517 0007 0080 0016 9228 0001
              </p>
              <p className="mt-6 text-lg text-text-gray-600">
                Istnieje możliwość przekazania 1% podatku na rzecz
                Stowarzyszenia na Rzecz Osób z Chorobą Alzheimera poprzez
                złożenie odpowiedniego zeznania podatkowego. W ten sposób można
                wesprzeć naszą działalność bez ponoszenia dodatkowych kosztów, a
                jednocześnie przyczynić się do pomocy osobom z chorobą
                Alzheimera. Numer KRS Stowarzyszenia to 0000116751.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSide;
