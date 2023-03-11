import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EmptyPhotos from "@/static/empty-photos.png";
import { Event } from "src/static/types";
import { generateFriendlyLink } from "./generateFriendlyLink";

interface CurrentEventProps {
  currentTitle: string;
  eventsList: Event[];
}

const CheckOthers: React.FC<CurrentEventProps> = ({
  currentTitle,
  eventsList,
}) => {
  const [events, setEvents] = useState(eventsList);

  // shuffle events for static page, to create illusion of dynamic
  const shuffleEvents = () => {
    const shuffledEvents = [...events];
    for (let i = shuffledEvents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledEvents[i], shuffledEvents[j]] = [
        shuffledEvents[j],
        shuffledEvents[i],
      ];
    }

    setEvents(shuffledEvents);
  };

  // Counter for narrow down number of event to max 3
  let howManyRenderedCounter = 0;
  return (
    <section className="max-w-[1240px] mx-auto mt-24">
      <header>
        <h2 className="text-3xl border-b-2 border-gray-200 pb-2 font-normal">
          Sprawdź inne wydarzenia
        </h2>
      </header>
      <main className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {events.map((event: Event, i) => {
            if (howManyRenderedCounter < 3 && event.title !== currentTitle) {
              howManyRenderedCounter = howManyRenderedCounter + 1;
              return (
                <article key={i} className="hover:underline">
                  <Link
                    aria-label={`Kliknij aby sprawdzić wydarzenie pod tytułem ${event.title}`}
                    href={`/wydarzenia/${generateFriendlyLink(event.title)}`}
                    onClick={shuffleEvents}
                  >
                    <Image
                      src={event.images ? event.images![0] : EmptyPhotos}
                      alt={
                        event.images
                          ? `Zdjęcie opisujące wydarzenie ${event.title}`
                          : `Brak dostępnego zdjęcia dla wydarzenia ${event.title}`
                      }
                      className="w-full h-48 object-cover border-2 border-gray-300"
                      height={192}
                      width={400}
                    />
                    <h3 className="text-lg mt-2">{event.title}</h3>
                  </Link>
                  <p className="text-sm">{event.date}</p>
                </article>
              );
            }
          })}
        </div>
      </main>
    </section>
  );
};

// Memo to prevent unnecessary reloading while the user browses the gallery
export default React.memo(CheckOthers);
