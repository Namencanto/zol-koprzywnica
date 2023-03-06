import React, { useState, useContext } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Button } from "@mui/material";
import { ThemeContext } from "src/context/themeContext";
const Information = () => {
  const { theme } = useContext(ThemeContext);
  const infoList = [
    {
      id: 1,
      title: "Kogo Przyjmujemy?",
      description:
        "W ośrodku przebywają pacjenci, którzy zakończyli proces leczenia szpitalnego, a wymagają kontynuacji leczenia lub osoby, które z uwagi na stan zdrowia oraz brak możliwości funkcjonowania w środowisku domowym – wymagają pielęgnacji i rehabilitacji.",
    },
    {
      id: 2,
      title: "Przeciwwskazania do przyjęcia",
      description:
        "Stany chorobowe wymagające całodobowej opieki lekarskiej lub hospitalizacji.Terminalna faza choroby przewlekłej lub nowotworowej (opieka paliatywna). Współistniejąca choroba zakaźna. Zaburzenia i choroby psychiczne. Uzależnienie od alkoholu lub środków psychoaktywnych",
    },
    {
      id: 3,
      title: "Formalności do spełnienia",
      description:
        "Pobyt pacjenta w naszej placówce jest możliwy po dostarczeniu do sekretariatu kompletu dokumentów (dostępne w zakładce „dokumenty”) oraz pozytywnej opinii lekarza. W ośrodku prowadzony jest rejestr osób oczekujących na przyjęcie. Przyjęcia odbywają się planowo, po zwolnieniu miejsca.",
    },
  ];

  const [activeInfo, setActiveInfo] = useState(infoList[0].id);

  const handleButtonClick = (id: number) => {
    setActiveInfo(id);
  };

  return (
    <div className="max-w-[1240px] mx-auto my-24 px-4 relative h-[700px] sm:h-[500px]">
      <div className="flex justify-left mb-8 sm:flex-row flex-col">
        {infoList.map((info) => (
          <Button
            style={{
              backgroundColor:
                activeInfo === info.id && theme === "light"
                  ? "#134944"
                  : activeInfo === info.id && theme === "dark"
                  ? "#2A2A2A"
                  : "transparent",
              boxShadow: activeInfo === info.id ? "" : "none",
            }}
            variant="contained"
            key={info.id}
            className={`w-full md:w-auto px-8 py-3 md:px-12 md:py-4 rounded-md flex-1 ${
              activeInfo === info.id
                ? "bg-primary text-white font-bold"
                : "bg-transparent text-primary font-medium"
            } mr-4`}
            onClick={() => handleButtonClick(info.id)}
          >
            {info.title}
          </Button>
        ))}
      </div>
      <TransitionGroup>
        <CSSTransition
          key={activeInfo}
          timeout={300}
          classNames="info-transition"
        >
          <div className="absolute overflow-hidden top-1/3 md:top-1/4 sm:right-1/4 w-auto lg:w-4/5 xl:w-5/8 flex flex-col justify-center items-center ">
            <div className="w-full md:w-4/4 lg:w-4/5 xl:w-2/3 p-4 md:p-8  rounded-lg bg-background-secondary">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
                {infoList.find((info) => info.id === activeInfo)!.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-body-color">
                {infoList.find((info) => info.id === activeInfo)!.description}
              </p>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-center md:justify-end m-4 space-x-4 mb-4 md:mb-0">
        <Button
          style={{
            backgroundColor: theme === "light" ? "#0ba597" : "#333",
          }}
          variant="contained"
          className="w-1/2 md:w-auto px-8 py-3 md:px-12 md:py-4 bg-btn-primary text-white rounded-md "
        >
          Dowiedz się więcej
        </Button>
        <Button
          style={{
            backgroundColor: theme === "light" ? "#0ba597" : "#333",
          }}
          variant="contained"
          className="w-1/2 md:w-auto px-8 py-3 md:px-12 md:py-4 bg-btn-primary text-white rounded-md "
        >
          Zadzwoń
        </Button>
      </div>
    </div>
  );
};

export default Information;
