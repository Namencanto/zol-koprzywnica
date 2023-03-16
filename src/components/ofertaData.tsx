import RehabilitacjaOfferImage1 from "@/static/oferta/fizjoterapia/zdj06.jpg";
import RehabilitacjaOfferImage2 from "@/static/oferta/fizjoterapia/zdj01.jpg";
import RehabilitacjaOfferImage3 from "@/static/oferta/fizjoterapia/zdj02.jpg";
import RehabilitacjaOfferImage4 from "@/static/oferta/fizjoterapia/zdj03.jpg";
import RehabilitacjaOfferImage5 from "@/static/oferta/fizjoterapia/zdj04.jpg";
import RehabilitacjaOfferImage6 from "@/static/oferta/fizjoterapia/zdj05.jpg";
import BadaniaDiagnostyczneOfferImage from "@/static/oferta/badania-diagnostyczne.jpg";
import TransportMedycznyOfferImage from "@/static/oferta/transport-medyczny.jpg";

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
  description: string[];
  photos: any;
};

export const services: Service[] = [
  {
    title: "Badania diagnostyczne",
    brief:
      "W zakładzie opiekuńczo-leczniczym oferujemy badania diagnostyczne, które są indywidualnie dostosowane do potrzeb pacjenta. W przypadku potrzeby, pacjenci mogą zostać skierowani na wizytę do specjalisty.",
    description: [
      "W zakładzie opiekuńczo-leczniczym oferujemy szereg badań diagnostycznych, które są dostosowane indywidualnie do potrzeb pacjenta. Dzięki temu, możliwe jest wczesne wykrycie chorób oraz ich skuteczne leczenie. Oferujemy m.in. badania krwi, moczu, EKG, badania poziomu cukru oraz wiele innych, które są wykonywane w oparciu o najnowsze osiągnięcia naukowe.",
      "W przypadku, gdy potrzeba dodatkowej specjalistycznej diagnozy, pacjenci mogą zostać skierowani na wizytę u specjalisty w danej dziedzinie. Nasz personel medyczny dokłada wszelkich starań, aby pacjenci otrzymali kompleksową opiekę medyczną.",
    ],

    photos: [BadaniaDiagnostyczneOfferImage],
  },
  {
    title: "Rehabilitacja",
    brief:
      "W zakładzie opiekuńczo-leczniczym oferowane są różnorodne formy rehabilitacji, takie jak terapie zajęciowe, fizjoterapia, igłoterapia, terapia przy łóżkach oraz masaże, które pomagają pacjentom w powrocie do sprawności fizycznej oraz lepszej kondycji psychofizycznej.",
    description: [
      "W zakładzie opiekuńczo-leczniczym oferowane są różnorodne formy rehabilitacji, które pomagają pacjentom w powrocie do sprawności fizycznej oraz lepszej kondycji psychofizycznej. Przeprowadzane są terapie zajęciowe, takie jak malowanie czy praca z papierem, które mają na celu pobudzenie zainteresowań oraz aktywizację umysłową pacjentów.",
      "Dostępna jest także fizjoterapia, terapia przy łóżkach oraz rowerki stacjonarne, które pozwalają na poprawę kondycji fizycznej i pracy serca. Pacjenci mogą również skorzystać z fizykoterapii, spacerów po terenie zakładu, igłoterapii oraz masażu bańką chińską, które pomagają w leczeniu różnych dolegliwości, takich jak bóle mięśniowo-szkieletowe czy cellulit. Dzięki tym formom rehabilitacji pacjenci mogą poprawić swoją sprawność oraz jakość życia.",
    ],
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
    description: [
      "Zakład opiekuńczo-leczniczy zapewnia pacjentom kompleksową opiekę, w tym także transport medyczny. Dzięki współpracy z doświadczoną firmą TRANSMED Tarnobrzeg, pacjenci mogą być bezpiecznie i wygodnie przewożeni na wizyty lekarskie, badania diagnostyczne czy rehabilitację. Firma ta posiada specjalnie przystosowane pojazdy, w tym ambulanse i busy, które są wyposażone w niezbędny sprzęt medyczny, w tym defibrylatory, tlen i sprzęt do monitorowania stanu pacjenta.",
      "Dzięki temu personel medyczny towarzyszący pacjentowi podczas transportu jest w stanie zapewnić mu pełną opiekę i interwencję w razie nagłych sytuacji. Firma TRANSMED Tarnobrzeg dba o wysoki standard swoich usług oraz o to, aby transport medyczny odbywał się zgodnie z indywidualnymi potrzebami pacjenta i z najwyższą starannością.",
    ],
    photos: [TransportMedycznyOfferImage],
  },
  {
    title: "Hipoterapia",
    brief:
      "Zakład Opiekuńczo-Leczniczy w Koprzywnicy posiada w swojej ofercie terapię hipoterapeutyczną. Hipoterapia jest formą terapii, która wykorzystuje interakcję między pacjentem, koniem i hipoterapeutą w celu osiągnięcia korzyści fizycznych i psychologicznych.",
    description: [
      "Zakład Opiekuńczo-Leczniczy w Koprzywnicy posiada w swojej ofercie terapię hipoterapeutyczną. Hipoterapia jest formą terapii, która wykorzystuje interakcję między pacjentem, koniem i hipoterapeutą w celu osiągnięcia korzyści fizycznych i psychologicznych. Terapia ta może być pomocna w leczeniu zaburzeń ruchu, poprawie równowagi i koordynacji, a także wzmocnieniu mięśni i ogólnym poprawieniu samopoczucia. Ponadto, hipoterapia może pomóc w redukcji stresu i lęku, poprawie zdolności społecznych i emocjonalnych oraz zwiększeniu poczucia własnej wartości.",
    ],
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
