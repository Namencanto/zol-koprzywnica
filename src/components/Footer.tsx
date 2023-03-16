import React from "react";
import Link from "next/link";
import NavLogoWhite from "@/static/NavLogoWhite.png";
import Image from "next/image";
import { contactData } from "src/static/contactData";
const Footer = () => {
  return (
    <div className="bg-background-primary mt-24">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className=" grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3 ">
          <div className="sm:col-span-2">
            <Link
              href="/"
              aria-label="Powrót do strony głównej"
              className="inline-flex items-center"
            >
              <Image width={300} alt="logo" src={NavLogoWhite} />
            </Link>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-200 ">
                Nasz zakład opiekuńczo-leczniczy oferuje kompleksową opiekę
                medyczną dla pacjentów starszych z chorobą Alzheimera,
                przewlekłymi chorobami i innymi formami otępienia. Nasz
                doświadczony zespół specjalistów zapewnia indywidualne podejście
                do każdego pacjenta, dbając o poprawę jakości ich życia i
                zdrowia.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-base">
            <p className="text-lg font-bold tracking-wide text-gray-300">
              Kontakt
            </p>

            <div className="flex flex-wrap ">
              <p className="mr-1 text-gray-200">Tel:</p>
              <Link
                href={`tel:${contactData.landLineNumber}`}
                aria-label="Telefon stacjonarny"
                title="Telefon stacjonarny"
                className="text-gray-200 transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                {contactData.landLineNumber}
              </Link>
            </div>
            <div className="flex flex-wrap ">
              <p className="mr-1 text-gray-200">Tel. Komórkowy:</p>
              <Link
                href={`tel:${contactData.phoneNumbers[0]}`}
                aria-label="Telefon komórkowy"
                title="Telefon komórkowy"
                className="text-gray-200 transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 mr-2"
              >
                {contactData.phoneNumbers[0]},
              </Link>
              <Link
                href={`tel:${contactData.phoneNumbers[1]}`}
                aria-label="Telefon komórkowy 2"
                title="Telefon komórkowy 2"
                className="text-gray-200 transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                {contactData.phoneNumbers[1]}
              </Link>
            </div>
            <div className="flex flex-wrap ">
              <p className="mr-1 text-gray-200">Email:</p>
              <Link
                href={`mailto:${contactData.email}`}
                aria-label="Nasz email"
                title="Nasz email"
                className="text-gray-200 transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                {contactData.email}
              </Link>
            </div>
            <div className="flex flex-wrap ">
              <p className="mr-1 text-gray-200">Adres:</p>
              <Link
                href="https://goo.gl/maps/9LTeZkmtTShreCsSA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nasz adres"
                title="Nasz adres"
                className="text-gray-200 transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                {contactData.location[0]} {contactData.location[1]}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2023 Wszelkie prawa zastrzeżone.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                href="/#faq"
                className="text-sm text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </Link>
            </li>
            <li>
              <Link
                href="/polityka-prywatnosci"
                className="text-sm text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Polityka prywatności
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/mateusz-ordon-33b02a230/"
                className="text-sm text-gray-100 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Stworzono przez: Mateusz Ordon
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
