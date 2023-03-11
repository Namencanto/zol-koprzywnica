import RehabilitacjaOfferImage1 from "@/static/oferta/fizjoterapia/zdj06.jpg";
import RehabilitacjaOfferImage2 from "@/static/oferta/fizjoterapia/zdj01.jpg";
import RehabilitacjaOfferImage3 from "@/static/oferta/fizjoterapia/zdj02.jpg";
import RehabilitacjaOfferImage4 from "@/static/oferta/fizjoterapia/zdj03.jpg";
import RehabilitacjaOfferImage5 from "@/static/oferta/fizjoterapia/zdj04.jpg";
import RehabilitacjaOfferImage6 from "@/static/oferta/fizjoterapia/zdj05.jpg";
import BadaniaDiagnostyczneOfferImage from "@/static/oferta/badania-diagnostyczne.jpg";
import TransportMedycznyOfferImage from "@/static/oferta/transport-medyczny.jpg";
import { FaAmbulance, FaStethoscope, FaWheelchair } from "react-icons/fa";

import HipoterapiaOfferImage from "@/static/oferta/hipoterapia/img004.jpg";
import HipoterapiaOfferImage2 from "@/static/oferta/hipoterapia/img006.jpg";
import HipoterapiaOfferImage3 from "@/static/oferta/hipoterapia/img010.jpg";
import HipoterapiaOfferImage4 from "@/static/oferta/hipoterapia/img025.jpg";
import HipoterapiaOfferImage5 from "@/static/oferta/hipoterapia/img032.jpg";
import HipoterapiaOfferImage6 from "@/static/oferta/hipoterapia/img033.jpg";
import HipoterapiaOfferImage7 from "@/static/oferta/hipoterapia/k3.jpg";
import HipoterapiaOfferImage8 from "@/static/oferta/hipoterapia/img015.jpg";
import HipoterapiaOfferImage9 from "@/static/oferta/hipoterapia/img007.jpg";

export type Service = {
  title:
    | "Badania diagnostyczne"
    | "Rehabilitacja"
    | "Transport medyczny"
    | "Hipoterapia";
  brief: string;
  description: string;
  icon: JSX.Element;
  photos: any;
};

export const services: Service[] = [
  {
    title: "Badania diagnostyczne",
    brief:
      "W zakładzie opiekuńczo-leczniczym oferujemy badania diagnostyczne, które są indywidualnie dostosowane do potrzeb pacjenta. W przypadku potrzeby, pacjenci mogą zostać skierowani na wizytę do specjalisty.",
    description:
      "W zakładzie opiekuńczo-leczniczym oferujemy szereg badań diagnostycznych, które są dostosowane indywidualnie do potrzeb pacjenta. Dzięki temu, możliwe jest wczesne wykrycie chorób oraz ich skuteczne leczenie. Oferujemy m.in. badania krwi, moczu, EKG, badania poziomu cukru oraz wiele innych, które są wykonywane w oparciu o najnowsze osiągnięcia naukowe. W przypadku, gdy potrzeba dodatkowej specjalistycznej diagnozy, pacjenci mogą zostać skierowani na wizytę u specjalisty w danej dziedzinie. Nasz personel medyczny dokłada wszelkich starań, aby pacjenci otrzymali kompleksową opiekę medyczną.",

    icon: <FaStethoscope />,
    photos: [BadaniaDiagnostyczneOfferImage],
  },
  {
    title: "Rehabilitacja",
    brief:
      "W zakładzie opiekuńczo-leczniczym znajdują się sale rehabilitacji UGUL, gdzie pacjenci mają dostęp do różnorodnych form rehabilitacji, takich jak terapia zajęciowa, fizjoterapia, terapia przy łóżkach oraz spacery. Dodatkowo, w salach rehabilitacji znajdują się rowerki stacjonarne, a także dostępna jest fizykoterapia.",
    description:
      "W zakładzie opiekuńczo-leczniczym pacjenci mają dostęp do różnorodnych form rehabilitacji, które pomagają w powrocie do sprawności fizycznej oraz lepszej kondycji psychofizycznej. W salach rehabilitacji UGUL znajdują się specjalne kabiny, gdzie przeprowadzane są terapie zajęciowe, które mają na celu pobudzenie zainteresowań oraz aktywizację umysłową pacjentów. W ramach terapii zajęciowej pacjenci mogą uczestniczyć w różnych zajęciach, takich jak malowanie, czy praca z papierem. Dodatkowo, w salach rehabilitacji dostępna jest fizjoterapia, która pomaga w rehabilitacji narządu ruchu oraz poprawie funkcjonowania mięśni i stawów. Pacjenci mają również dostęp do terapii przy łóżkach, która pozwala na pracę z pacjentem w pozycji leżącej, gdy pacjent jest zbyt osłabiony, by wstawać. W salach rehabilitacyjnych znajdują się także rowerki stacjonarne, które pozwalają na poprawę kondycji fizycznej i pracy serca. Dostępna jest również fizykoterapia, która wykorzystuje różne formy energii, takie jak prąd, promieniowanie czy magnetyzm, w celu leczenia chorób oraz dolegliwości. Oprócz ćwiczeń w salach rehabilitacji, pacjenci mają również możliwość udziału w spacerach na terenie zakładu, co pozwala na poprawę kondycji fizycznej oraz psychicznej. Dzięki różnorodnym formom rehabilitacji, pacjenci mogą skutecznie poprawić swoją sprawność oraz jakość życia.",
    icon: <FaWheelchair />,
    photos: [
      RehabilitacjaOfferImage1,
      RehabilitacjaOfferImage2,
      RehabilitacjaOfferImage3,
      RehabilitacjaOfferImage4,
      RehabilitacjaOfferImage5,
      RehabilitacjaOfferImage6,
    ],
  },
  {
    title: "Transport medyczny",
    brief:
      "Zakład opiekuńczo-leczniczy zapewnia transport medyczny swoim pacjentom, którego podwykonawcą jest firma TRANSMED Tarnobrzeg.",
    description:
      "Zakład opiekuńczo-leczniczy zapewnia pacjentom kompleksową opiekę, w tym także transport medyczny. Dzięki współpracy z doświadczoną firmą TRANSMED Tarnobrzeg, pacjenci mogą być bezpiecznie i wygodnie przewożeni na wizyty lekarskie, badania diagnostyczne czy rehabilitację. Firma ta posiada specjalnie przystosowane pojazdy, w tym ambulanse i busy, które są wyposażone w niezbędny sprzęt medyczny, w tym defibrylatory, tlen i sprzęt do monitorowania stanu pacjenta. Dzięki temu personel medyczny towarzyszący pacjentowi podczas transportu jest w stanie zapewnić mu pełną opiekę i interwencję w razie nagłych sytuacji. Firma TRANSMED Tarnobrzeg dba o wysoki standard swoich usług oraz o to, aby transport medyczny odbywał się zgodnie z indywidualnymi potrzebami pacjenta i z najwyższą starannością.",
    icon: <FaAmbulance />,
    photos: [TransportMedycznyOfferImage],
  },
  {
    title: "Hipoterapia",
    brief:
      "Zakład Opiekuńczo-Leczniczy w Koprzywnicy posiada w swojej ofercie terapię hipoterapeutyczną. Hipoterapia jest formą terapii, która wykorzystuje interakcję między pacjentem, koniem i hipoterapeutą w celu osiągnięcia korzyści fizycznych i psychologicznych.",
    description:
      "Zakład Opiekuńczo-Leczniczy w Koprzywnicy posiada w swojej ofercie terapię hipoterapeutyczną. Hipoterapia jest formą terapii, która wykorzystuje interakcję między pacjentem, koniem i hipoterapeutą w celu osiągnięcia korzyści fizycznych i psychologicznych. Terapia ta może być pomocna w leczeniu zaburzeń ruchu, poprawie równowagi i koordynacji, a także wzmocnieniu mięśni i ogólnym poprawieniu samopoczucia. Ponadto, hipoterapia może pomóc w redukcji stresu i lęku, poprawie zdolności społecznych i emocjonalnych oraz zwiększeniu poczucia własnej wartości.",
    icon: <FaAmbulance />,
    photos: [
      HipoterapiaOfferImage,
      HipoterapiaOfferImage2,
      HipoterapiaOfferImage3,
      HipoterapiaOfferImage4,
      HipoterapiaOfferImage5,
      HipoterapiaOfferImage6,
      HipoterapiaOfferImage7,
      HipoterapiaOfferImage8,
      HipoterapiaOfferImage9,
    ],
  },
];
