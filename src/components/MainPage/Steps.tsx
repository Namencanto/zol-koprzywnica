import React from "react";
import Image from "next/image";
import Step1 from "@/static/step-1.png";
import Step2 from "@/static/step-2.png";
import Step3 from "@/static/step-3.png";
const Steps = () => {
  return (
    <div className="bg-background-tertiary py-2">
      <div className="max-w-[1240px] m-auto h-[auto] py-24 px-4">
        <h2 className="text-3xl border-b-2 border-gray-200 pb-2 font-normal">
          Kroki do przyjęcia
        </h2>
        <div className="p-2 pt-8">
          <div className="max-w-[1240px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-8 sm:space-y-0">
              <div className="flex-1 text-center">
                <Image
                  className="m-auto"
                  width={125}
                  src={Step1}
                  alt="pierwszy krok ilustracja"
                />
                <h3 className="text-xl font-semibold my-4">
                  Krok 1: Skierowanie
                </h3>
                <p className="text-text-gray-600 leading-relaxed">
                  Pacjent lub jego rodzina zgłasza się do lekarza medycyny
                  rodzinnej lub innego specjalisty w celu wystawienia
                  skierowania do zakładu opiekuńczo-leczniczego, wystawienia
                  zaświadczenia lekarskiego oraz skali barthel która będzie go
                  kwalifikować do przyjęcia do zakładu.
                </p>
              </div>
              <div className="flex-1 text-center">
                <Image
                  className="m-auto"
                  width={125}
                  height={125}
                  src={Step2}
                  alt="drugi krok ilustracja"
                />
                <h3 className="text-xl font-semibold my-4">
                  Krok 2: Dostarczenie dokumentów
                </h3>
                <p className="text-text-gray-600 leading-relaxed">
                  Pacjent lub rodzina dostarcza dokumenty osobiście, pocztą lub
                  poprzez e-mail
                </p>
              </div>
              <div className="flex-1 text-center">
                <Image
                  className="m-auto"
                  width={125}
                  src={Step3}
                  alt="trzeci krok ilustracja"
                />
                <h3 className="text-xl font-semibold my-4">
                  Krok 3: Oczekiwanie na przyjęcie
                </h3>
                <p className="text-text-gray-600 leading-relaxed">
                  Oczekiwanie na miejsce pacjent będzie umieszczony w kolejce
                  oczekujących na przyjęcie. Informacja o możliwości przyjęcia
                  zostanie przekazana drogą telefoniczną
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
