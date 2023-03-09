// import { createContext, useState } from "react";

// interface LanguageContextType {
//   language: string;
//   setLanguage: (language: string) => void;
// }

// const LanguageContext = createContext<LanguageContextType>({
//   language: "en",
//   setLanguage: () => {},
// });

// interface LanguageProviderProps {
//   children: React.ReactNode;
// }

// const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
//   type availableLanguages = "english" | "polish" | "german";
//   const [language, setLanguage] = useState<availableLanguages>("english");

//   const contextValue = {
//     language,
//     setLanguage: (language: string) =>
//       setLanguage(language as availableLanguages),
//   };

//   return (
//     <LanguageContext.Provider value={contextValue}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export { LanguageContext, LanguageProvider };

// <li className="border-t md:border-none relative">
//   <div
//     onClick={handleToggle}
//     className="flex items-center md:order-2 flex-col py-2 "
//   >
//     <button
//       type="button"
//       className="shadow-none inline-flex items-center justify-center px-4 mx-2 py-2 text-sm text-text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 sm:hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white "
//     >
//       {language === "english" ? (
//         <EnglishButton active={true} />
//       ) : language === "polish" ? (
//         <PolishButton active={true} />
//       ) : language === "german" ? (
//         <GermanButton active={true} />
//       ) : null}
//     </button>
//     {isOpen ? (
//       <div className="z-40 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 absolute sm:top-8 top-6">
//         <ul className="py-2">
//           {language !== "english" ? (
//             <li
//               ref={enRef}
//               onClick={() => {
//                 setLanguage("english");
//               }}
//             >
//               <EnglishButton active={false} />
//             </li>
//           ) : null}
//           {language !== "german" ? (
//             <li
//               ref={deRef}
//               onClick={() => {
//                 setLanguage("german");
//               }}
//             >
//               <GermanButton active={false} />
//             </li>
//           ) : null}
//           {language !== "polish" ? (
//             <li
//               ref={plRef}
//               onClick={() => {
//                 setLanguage("polish");
//               }}
//             >
//               <PolishButton active={false} />
//             </li>
//           ) : null}
//         </ul>
//       </div>
//     ) : null}
//   </div>
// </li>;

import { createContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: (theme: "dark" | "light") => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  type AvailableThemes = "dark" | "light";
  const [theme, setTheme] = useState<AvailableThemes>("light");

  const contextValue = {
    theme,
    setTheme: (theme: string) => setTheme(theme as AvailableThemes),
  };

  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";

      //

      document.documentElement.style.setProperty(
        "--shadow-color",
        "rgb(0 0 0 / 0.1)"
      );

      document.documentElement.style.setProperty(
        "--text-gray-100",
        "rgb(243 244 246)"
      );
      document.documentElement.style.setProperty(
        "--text-gray-200",
        "rgb(229 231 235)"
      );
      document.documentElement.style.setProperty(
        "--text-gray-500",
        "rgb(107 114 128)"
      );
      document.documentElement.style.setProperty(
        "--text-gray-600",
        "rgb(75 85 99)"
      );
      document.documentElement.style.setProperty(
        "--text-gray-800",
        "rgb(31 41 55)"
      );
      document.documentElement.style.setProperty(
        "--text-gray-900",
        "rgb(17 24 39)"
      );

      document.documentElement.style.setProperty(
        "--text-color-primary",
        "#134944"
      );
      document.documentElement.style.setProperty(
        "--text-color-secondary",
        "#fff"
      );
      document.documentElement.style.setProperty(
        "--text-color-tertiary",
        "#000"
      );

      document.documentElement.style.setProperty(
        "--background-color-primary",
        "#134944"
      );
      document.documentElement.style.setProperty(
        "--background-color-secondary",
        "#fff"
      );
      document.documentElement.style.setProperty(
        "--background-color-tertiary",
        "#f3f4f6"
      );
    }

    if (theme === "dark") {
      document.body.style.backgroundColor = "#444";
      document.body.style.color = "#fff";

      //

      document.documentElement.style.setProperty(
        "--shadow-color",
        "rgb(0 0 0 / 0.4)"
      );

      document.documentElement.style.setProperty("--text-gray-100", "#fff;");
      document.documentElement.style.setProperty("--text-gray-200", "#fff;");
      document.documentElement.style.setProperty(
        "--text-gray-500",
        "rgb(243 244 246)"
      );
      document.documentElement.style.setProperty(
        "--text-gray-800",
        "rgb(243 244 246)"
      );
      document.documentElement.style.setProperty(
        "--text-gray-900",
        "rgb(243 244 246)"
      );

      document.documentElement.style.setProperty(
        "--text-color-primary",
        "#FAFDFD"
      );
      document.documentElement.style.setProperty(
        "--text-color-secondary",
        "#333"
      );
      document.documentElement.style.setProperty(
        "--text-color-tertiary",
        "#fff"
      );

      document.documentElement.style.setProperty(
        "--background-color-primary",
        "#333"
      );
      document.documentElement.style.setProperty(
        "--background-color-secondary",
        "#444"
      );
      document.documentElement.style.setProperty(
        "--background-color-tertiary",
        "#333"
      );
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
