import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EmptyPhotos from "../../../public/images/empty-photos.png";
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
    <div className=" max-w-[1240px] m-auto h-[auto] mt-24">
      <h2 className="text-3xl border-b-2 border-gray-200 pb-2 font-normal">
        Sprawdź inne wydarzenia
      </h2>
      <div className="p-2 pt-8 flex justify-around">
        {events.map((event: Event, i) => {
          if (howManyRenderedCounter < 3 && event.title !== currentTitle) {
            howManyRenderedCounter = howManyRenderedCounter + 1;
            return (
              <Link
                className="w-1/3 px-2"
                key={i}
                href={`/wydarzenia/${generateFriendlyLink(event.title)}`}
                onClick={shuffleEvents}
              >
                <div className="hover:underline">
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
                  <h3>{event.title}</h3>
                </div>
                <p>{event.date}</p>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

// Memo to prevent unnecessary reloading while the user browses the gallery
export default React.memo(CheckOthers);
