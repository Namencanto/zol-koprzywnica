import { Button } from "@mui/material";
import { useState } from "react";
import FAQItem from "./FaqItem";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [showAll, setShowAll] = useState(false);

  const handleItemClick = (index: number) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? -1 : index));
  };

  return (
    <section
      id="faq"
      className="px-4 relative z-20 overflow-hidden bg-background-tertiary py-24"
    >
      <div className="container mx-auto max-w-[1240px] ">
        <h2 className="text-3xl border-b-2 border-gray-200 pb-2 font-normal">
          Najczęściej zadawane pytania
        </h2>
        <div className="-mx-4 flex flex-wrap pt-9">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Masz jakieś pytania? Sprawdź je tutaj
              </h2>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <FAQItem
              id={1}
              question="Czym jest zakład opiekuńczo-leczniczy i jaki jest jego cel?"
              answer="Zakład opiekuńczo-leczniczy (ZOL) jest placówką udzielającą całodobowych, stacjonarnych świadczeń medycznych w zakresie długoterminowej opieki i pielęgnacji pacjentów.

              Celem placówek tego typu jest przewrócenie pacjentowi możliwie jak największej sprawności fizycznej i psychicznej aby umożliwić mu powrót do domu i normalnego, samodzielnego funkcjonowania a jeśli to nie jest możliwe, zapewnienie pacjentom godnych warunków bytowych i jak najlepszej opieki medycznej."
              isOpen={openIndex === 0}
              onClick={() => handleItemClick(0)}
            />
            <FAQItem
              id={2}
              question="Kto kwalifikuje się do pobytu w ZOL?"
              answer="Do przyjęcia kwalifikują się osoby, które mają ukończony i udokumentowany proces leczenia szpitalnego, są w pełni zdiagnozowane i nie wymagają dalszej hospitalizacji jednak ich stan zdrowia nie pozwala jeszcze na funkcjonowanie w warunkach domowych, lub osoby których stan zdrowia nie pozwala samodzielnie funkcjonować w domu."
              isOpen={openIndex === 1}
              onClick={() => handleItemClick(1)}
            />
            <FAQItem
              id={3}
              question="Z jakimi pacjentami najczęściej można spotkać się w ZOL?"
              answer="Są to w zdecydowanej większości pacjenci w stanach ciężkich, w tym osoby z zaburzeniami neurologicznymi, chorobą Alzheimera oraz innymi otępieniami. W oddziale przebywają pacjenci po różnego typu udarach mózgu, złamaniach oraz powikłaniach związanych z chorobami takimi jak cukrzyca, choroba nadciśnieniowa czy miażdżyca. Ludzie ci ze względu na bardzo duży deficyt samoopieki wymagają całodobowego dozoru lekarskiego, wsparcia pielęgniarek i opiekunek oraz rehabilitacji."
              isOpen={openIndex === 2}
              onClick={() => handleItemClick(2)}
            />
            {showAll && (
              <>
                <FAQItem
                  id={4}
                  question="Czy pacjenci mają dostęp do pomocy psychologicznej lub psychiatrycznej w zakładzie opiekuńczo-leczniczym?"
                  answer="Tak, pacjenci w zakładzie opiekuńczo-leczniczym mają dostęp do pomocy psychologicznej oraz psychiatrycznej. Zakład posiada w swoim zespole specjalistów, takich jak lekarz psychiatra oraz psycholog, którzy mogą udzielić pomocy pacjentom w potrzebie. W zależności od potrzeb pacjenta, może on otrzymać konsultację lekarską, psychologiczną lub psychiatryczną. Specjaliści ci są dostępni dla pacjentów w ramach indywidualnych wizyt oraz grupowych zajęć terapeutycznych. Współpraca z lekarzem psychiatrą lub psychologiem może być bardzo pomocna dla pacjentów, którzy przeżywają trudności emocjonalne lub cierpią z powodu chorób psychicznych."
                  isOpen={openIndex === 3}
                  onClick={() => handleItemClick(3)}
                />
                <FAQItem
                  id={5}
                  question="Czy pacjenci mają dostęp do opieki duszpasterskiej lub innych form wsparcia duchowego?"
                  answer="Tak, w zakładzie opiekuńczo-leczniczym pacjenci mają dostęp do opieki duszpasterskiej oraz innych form wsparcia duchowego. W zakładzie znajduje się kaplica, w której odprawiane są msze święte oraz udzielane są sakramenty, takie jak namaszczenie chorych, spowiedź święta, komunia, a także nabożeństwa okolicznościowe, takie jak majówka, czerwcówka, różaniec, gorzkie żale, droga krzyżowa, kolęda. Oprócz tego, zapewniona jest opieka duszpasterska ze strony duszpasterza, który służy wsparciem duchowym i rozmową pacjentom, którzy taką opiekę potrzebują.."
                  isOpen={openIndex === 4}
                  onClick={() => handleItemClick(4)}
                />
              </>
            )}
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <FAQItem
              id={6}
              question="Jak długo pacjent może przebywać w ZOL?"
              answer="Aktualnie pacjent przebywa w oddziale opiekuńczo-leczniczym do momentu poprawy jego stanu zdrowia na tyle, że będzie mógł samodzielnie funkcjonować w domu lub z niewielką pomocą bliskich osób. Decyzję o wypisie pacjenta po 6 miesiącach pobytu podejmuje zespół leczący. Oczywiście, rodzina może w każdej chwili zdecydować o wypisaniu pacjenta na własne życzenie.

              Chcielibyśmy podkreślić, że zakład opiekuńczo-leczniczy to nie to samo co dom pomocy społecznej (DPS). Pacjenci w ZOL, choć często przebywają tam przez dłuższy czas, nie są zakwaterowani bezterminowo - pobyt zawsze jest czasowy."
              isOpen={openIndex === 5}
              onClick={() => handleItemClick(5)}
            />
            <FAQItem
              id={7}
              question="W jakich godzinach można odwiedzać pacjentów - czy są jakieś ograniczenia?"
              answer="Odwiedziny w Zakładzie Opiekuńczo-Leczniczym odbywają się w godzinach od 11.00 do 17.00
              W sytuacjach wyjątkowych istnieje możliwość jednorazowej zmiany godzin, po wcześniejszym ustaleniu z kierownikiem lub pielęgniarką oddziałową."
              isOpen={openIndex === 6}
              onClick={() => handleItemClick(6)}
            />
            <FAQItem
              id={8}
              question="Jak dostarczyć dokumenty?"
              answer="Dla całkowitej pewności, że wszystko jest w porządku najlepiej dostarczyć je osobiście do danej placówki. Można dokumentację wysłać pocztą lub e-mail jednak wiąże się to zawsze ze sporym opóźnieniem całej procedury."
              isOpen={openIndex === 7}
              onClick={() => handleItemClick(7)}
            />
            {showAll && (
              <>
                <FAQItem
                  id={9}
                  question="Jakie są procedury awaryjne w przypadku nagłego pogorszenia stanu zdrowia pacjenta?"
                  answer="Procedury awaryjne w przypadku nagłego pogorszenia stanu zdrowia pacjenta w zakładzie opiekuńczo-leczniczym zależą od konkretnego przypadku i potrzeb pacjenta. Jednak ogólnie, personel medyczny jest szkolony w udzielaniu pierwszej pomocy i reagowaniu na nagłe sytuacje medyczne, takie jak zatrzymanie krążenia, udar, czy niskie ciśnienie krwi. W przypadku nagłego pogorszenia stanu zdrowia pacjenta, personel medyczny natychmiast interweniuje, przeprowadzając niezbędne czynności ratunkowe, włączając w to odpowiednie leki, dostępne urządzenia medyczne, a w razie potrzeby przewożąc pacjenta do szpitala (transport medyczny), lub wzywając karetkę pogotowia. Wszystkie te procedury mają na celu jak najszybszą stabilizację stanu pacjenta i zminimalizowanie ryzyka powikłań lub dalszych pogorszeń jego stanu zdrowia."
                  isOpen={openIndex === 8}
                  onClick={() => handleItemClick(8)}
                />
                <FAQItem
                  id={10}
                  question="Jakie rodzaje pokoi są dostępne w zakładzie opiekuńczo-leczniczym?"
                  answer="Oferowane pokoje w zakładzie opiekuńczo-leczniczym to przede wszystkim pokoje dwu- i trzyosobowe z prywatnymi łazienkami, zapewniające pełną prywatność i komfort dla pacjentów. Jednocześnie dla osób niezdolnych do samodzielnego korzystania z łazienki, zakład oferuje również pokoje dwu- i trzyosobowe z łazienkami ogólnodostępnymi. W przypadku takich pacjentów, personel medyczny oraz opiekunowie zapewniają niezbędną pomoc przy korzystaniu z łazienki i higienie osobistej. Dzięki temu każdy pacjent, niezależnie od swoich indywidualnych potrzeb, może znaleźć w zakładzie opiekuńczo-leczniczym odpowiednie warunki pobytu."
                  isOpen={openIndex === 9}
                  onClick={() => handleItemClick(9)}
                />
                <FAQItem
                  id={11}
                  question="Jakie są formy rehabilitacji w zakładzie opiekuńczo leczniczym?"
                  answer="W zakładzie opiekuńczo-leczniczym dostępne są różne formy rehabilitacji, w tym fizjoterapia, fizykoterapia oraz terapia zajęciowa. Fizjoterapia to forma terapii ruchowej, która ma na celu przywrócenie i poprawienie funkcji narządów ruchu oraz koordynacji ruchowej. Fizykoterapia natomiast obejmuje różnego rodzaju zabiegi z wykorzystaniem urządzeń i technik medycznych, takie jak elektroterapia, laseroterapia, krioterapia czy też kinezyterapia.

              Terapia zajęciowa, z kolei, ma na celu poprawę zdolności psychofizycznych pacjenta oraz jego umiejętności funkcjonowania w codziennym życiu poprzez udział w różnych zajęciach terapeutycznych, takich jak zajęcia plastyczne, muzyczne, ruchowe czy manualne.
              
              Więcej informacji na temat oferty rehabilitacyjnej można znaleźć na stronie internetowej zakładu opiekuńczo-leczniczego lub uzyskać bezpośrednio od personelu medycznego."
                  isOpen={openIndex === 10}
                  onClick={() => handleItemClick(10)}
                />
              </>
            )}
          </div>
          {showAll || (
            <Button
              className="!m-auto !text-primary hover:!bg-[#cccccc33]"
              onClick={() => {
                setShowAll(true);
              }}
            >
              Więcej pytań
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
