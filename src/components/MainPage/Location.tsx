const Location = () => {
  return (
    <div id="location" className="bg-background-tertiary pt-2">
      <div className="max-w-[1240px] m-auto h-[auto] py-24 px-4">
        <h2 className="text-3xl border-b-2 border-gray-200 pb-2 font-normal">
          Znajdź nas na mapach google
        </h2>
        <div className="p-2 pt-8 ">
          <div
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              className="sm:h-[100%] h-[125%]"
              title="Lokalizacja zolu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d880.6167552901345!2d21.576456144404972!3d50.5897675798293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d4fc74d450411%3A0x8b0c9195bba5be28!2sStowarzyszenie%20na%20Rzecz%20Os%C3%B3b%20z%20Chorob%C4%85%20Alzheimera%20w%20Koprzywnicy!5e1!3m2!1spl!2spl!4v1676904148898!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Location;
