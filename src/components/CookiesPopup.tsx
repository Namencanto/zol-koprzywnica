import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import CookieConsent from "react-cookie-consent";
import { ThemeContext } from "src/context/themeContext";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, onClick }) => (
  <Button
    onClick={onClick}
    style={{
      background: "#fff",
      color: "#134944",
      fontSize: "13px",
      padding: "10px 15px",
      borderRadius: "4px",
      border: "none",
      margin: "10px",
      cursor: "pointer",
      boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
      transition: "background 0.3s ease-in-out",
    }}
  >
    {children}
  </Button>
);

const CookiesPopup = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("acceptedCookies");
    setShowPopup(!hasAcceptedCookies);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("acceptedCookies", "true");
    setShowPopup(false);
  };

  return (
    <CookieConsent
      ButtonComponent={CustomButton}
      location="bottom"
      buttonText="Rozumiem"
      buttonClasses=" text-center bg-primary hover:bg-btn-primary-hover text-secondary font-bold py-2 px-4 rounded-full mr-4"
      cookieName="cookieConsent"
      //   contentStyle={{
      //     maxWidth: "100vw",
      //   }}
      style={{
        maxHeight: "500px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme === "light" ? "#134944" : "#333",
        color: "#fff",
        padding: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      }}
      expires={150}
      onAccept={handleAcceptCookies}
    >
      <div className="mx-auto text-center flex flex-col md:flex-row justify-center items-center">
        <p className="text-gray-200 text-sm md:text-md leading-5 md:leading-6 md:py-0">
          Na tej stronie są przetwarzane dane osobowe osób ją odwiedzających -
          na zasadach określonych w{" "}
          <Link href="/polityka-prywatnosci" className="underline">
            Polityce prywatności
          </Link>
          . Jeżeli nie wyrażacie Państwo na to zgody, prosimy o wyłączenie
          cookies w przeglądarce lub opuszczenie serwisu.
        </p>
      </div>
    </CookieConsent>
  );
};

export default CookiesPopup;
{
  /* <div className="flex justify-end">
<Link legacyBehavior href="/polityka-prywatnosci">
  <a className="text-sm mr-2 text-white hover:text-gray-300 transition-all">
    Polityka prywatności
  </a>
</Link>
</div> */
}
