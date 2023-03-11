import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import NavLogo from "@/images/NavLogo.png";
import Image from "next/image";
import { useRouter } from "next/router";

import { ThemeContext } from "../../src/context/themeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };
  const toggleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const dropdownLinks = [
    { label: "O stowarzyszeniu", href: "/o-stowarzyszeniu" },
    {
      label: "Sponsorzy i darczyńcy",
      href: "/o-stowarzyszeniu/sponsorzy-i-darczyncy",
    },
    {
      label: "Władze stowarzyszenia",
      href: "/o-stowarzyszeniu/wladze-stowarzyszenia",
    },
  ];
  const router = useRouter();

  const isActiveLink = (href: string) => {
    if (typeof window !== "undefined") {
      return (
        router.pathname === href ||
        (href === "#kontakt" && window!.location.hash === href)
      );
    }
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky flex flex-wrap items-center justify-between top-0 w-full bg-background-secondary z-50 transition duration-500 ease-in-out ${
        scrolled ? " shadow-md" : ""
      } `}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              width={250}
              style={
                theme === "dark"
                  ? { filter: "brightness(0) invert(1)" }
                  : undefined
              }
              className="py-2"
              src={NavLogo}
              alt="logo"
            />
          </Link>
        </div>
      </div>

      <input
        checked={isMobileMenuOpen}
        onClick={() => {
          toggleDropdownClose();
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        className="menu-btn hidden"
        type="checkbox"
        id="menu-btn"
      />
      <label
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            toggleDropdownClose();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }
        }}
        role="button"
        aria-label="Menu"
        aria-expanded={isMobileMenuOpen ? "true" : "false"}
        tabIndex={0}
        className="menu-icon block cursor-pointer xl:hidden sm:px-6 py-4 pr-4 relative select-none"
        htmlFor="menu-btn"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <span className="navicon flex items-center relative"></span>
      </label>

      <ul
        role="menu"
        className="menu border-b xl:border-none flex justify-end list-reset m-0 w-full xl:w-auto"
      >
        <li role="presentation" className="border-t xl:border-none">
          <Link
            href="/"
            className={`hover:text-primary block xl:inline-block px-4 py-3 no-underline hover:text-grey-darker text-xl ${
              isActiveLink("/") ? "text-primary" : "text-text-gray-500"
            }`}
          >
            Strona główna
          </Link>
        </li>
        <li
          role="menuitem"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
          className={`border-t xl:border-none relative m-auto flex px-4 py-3 items-center hover:text-primary ${
            isActiveLink(
              "/o-stowarzyszeniu" ||
                "/o-stowarzyszeniu/sponsorzy-i-darczyncy" ||
                "/o-stowarzyszeniu/wladze-stowarzyszenia"
            )
              ? "text-primary"
              : "text-text-gray-500"
          }`}
          onClick={toggleDropdown}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              toggleDropdown();
            }
          }}
          tabIndex={0}
          onMouseLeave={toggleDropdownClose}
        >
          <span className="text-xl mr-2 ">Stowarzyszenie</span>
          {isDropdownOpen ? (
            <FaChevronUp className="text-primary" />
          ) : (
            <FaChevronDown className="text-text-gray-500" />
          )}
          {isDropdownOpen && (
            <ul
              onMouseEnter={toggleDropdownOpen}
              onMouseLeave={toggleDropdownClose}
              className="absolute top-full left-0 right-0 bg-background-secondary z-10 border border-text-gray-300 rounded-b-lg overflow-hidden"
            >
              {dropdownLinks.map((link) => (
                <li role="presentation" key={link.href}>
                  <Link legacyBehavior href={link.href}>
                    <a
                      href="replace"
                      className={`block py-2 px-4 hover:bg-background-tertiary hover:text-primary ${
                        isActiveLink(link.href)
                          ? "text-primary font-semibold"
                          : "text-text-gray-500"
                      }`}
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li role="presentation" className="border-t xl:border-none">
          <Link
            href="/oferta/"
            className={`hover:text-primary block xl:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker text-xl ${
              isActiveLink("/oferta") ? "text-primary" : "text-text-gray-500"
            }`}
          >
            Oferta
          </Link>
        </li>
        <li role="presentation" className="border-t xl:border-none">
          <Link
            href="/wydarzenia/"
            className={`hover:text-primary block xl:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker text-xl ${
              isActiveLink("/aktualnosci")
                ? "text-primary"
                : "text-text-gray-500"
            }`}
          >
            Aktualności
          </Link>
        </li>
        <li role="presentation" className="border-t xl:border-none">
          <Link
            href="/#kontakt"
            className={`hover:text-primary block xl:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker text-xl ${
              isActiveLink("#kontakt") ? "text-primary" : "text-text-gray-500"
            }`}
          >
            Kontakt
          </Link>
        </li>
        <li role="presentation" className="border-t xl:border-none">
          <Link
            href="/dokumenty"
            className={`hover:text-primary block xl:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker text-xl ${
              isActiveLink("/dokumenty") ? "text-primary" : "text-text-gray-500"
            }`}
          >
            Dokumenty
          </Link>
        </li>
        {theme === "dark" ? (
          <li
            tabIndex={0}
            role="button"
            aria-label="Włącz jasny motyw strony"
            title="Włącz jasny motyw strony"
            onClick={() => {
              setTheme("light");
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setTheme("light");
              }
            }}
            className="border-t xl:border-0 block xl:inline-block pr-4 pl-4 xl:pr-6 py-3 no-underline text-grey-darkest"
          >
            <MdOutlineLightMode className="text-text-gray-500" size={25} />
          </li>
        ) : theme === "light" ? (
          <li
            tabIndex={0}
            role="button"
            aria-label="Włącz ciemny motyw strony"
            title="Włącz ciemny motyw strony"
            onClick={() => {
              setTheme("dark");
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setTheme("light");
              }
            }}
            className="border-t xl:border-0 block xl:inline-block pr-4 pl-4 xl:pr-6 py-3 no-underline"
          >
            <MdOutlineDarkMode className="text-text-gray-500" size={25} />
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
