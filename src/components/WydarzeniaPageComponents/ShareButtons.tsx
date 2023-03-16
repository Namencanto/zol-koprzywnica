import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { useState, useEffect, useContext } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import { ThemeContext } from "src/context/themeContext";
import { event } from "nextjs-google-analytics";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const { theme } = useContext(ThemeContext);

  // Checking if mobile version for messenger button
  const [isMobile, setIsMobile] = useState<Boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (navigator) {
        setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
      }
    }
  }, []);
  const appId = process.env.NEXT_PUBLIC_FB_APPID;

  // Mobile version of sharing with messenger
  const handleClickMessenger = () => {
    const messengerLink = `fb-messenger://share?app_id=${appId}&link=${encodeURIComponent(
      url
    )}`;
    window.location.href = messengerLink;
  };
  const [buttonsAreVisible, setButtonsAreVisible] = useState(false);

  const handleClick = () => {
    setButtonsAreVisible(!buttonsAreVisible);
  };

  // Google Analytics handlers for tracking how many users have shared the event
  const handleShareGoogleAnalytics = (type: string) => {
    event("Share", {
      label: `Shared by ${type}`,
    });
  };
  const handleOpenShareGoogleAnalytics = () => {
    event("Share", {
      label: `Opened share buttons`,
    });
  };

  return (
    <>
      <div className="flex flex-wrap flex-row-reverse ml-auto xl:relative sm:max-w-[1240px]">
        <button
          aria-label="Kliknij by rozwinąć sekcję udostępniania wydarzenia"
          onClick={handleClick}
          className="z-20 ml-4 rounded-[50%] p-[0.75rem] cursor-pointer duration-300 ease-in-out transform hover:scale-110"
          aria-expanded={buttonsAreVisible ? "true" : "false"}
        >
          {buttonsAreVisible ? (
            <FaTimes
              size={25}
              style={{ color: theme === "light" ? "#444" : "#fff" }}
            />
          ) : (
            <IoShareSocialOutline
              onClick={handleOpenShareGoogleAnalytics}
              size={25}
              style={{ color: theme === "light" ? "#444" : "#fff" }}
            />
          )}
        </button>

        <CSSTransition
          in={buttonsAreVisible}
          classNames="share-modal"
          timeout={300}
          unmountOnExit
        >
          <section
            className="flex  items-center justify-centerp-4 rounded-lg max-w-sm"
            aria-label="Udostępnij wydarzenie na wybranych mediach społecznościowych lub poprzez email"
          >
            <div className="z-10 flex sm:flex-row justify-center">
              <FacebookShareButton
                onClick={() => {
                  handleShareGoogleAnalytics("Facebook");
                }}
                className="mr-4"
                url={url}
                hashtag="#zolkoprzywnica"
                title="Udostępnij przez Facebook"
              >
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              {isMobile ? (
                <button
                  className="mr-4 "
                  onClick={() => {
                    handleShareGoogleAnalytics("Messenger");
                    handleClickMessenger();
                  }}
                  title="Udostępnij przez Messenger"
                >
                  <FacebookMessengerIcon size={40} round />
                </button>
              ) : typeof appId === "string" ? (
                <FacebookMessengerShareButton
                  onClick={() => {
                    handleShareGoogleAnalytics("Messenger");
                  }}
                  className="mr-4 "
                  url={url}
                  appId={appId}
                  title="Udostępnij przez Messenger"
                >
                  <FacebookMessengerIcon size={40} round />
                </FacebookMessengerShareButton>
              ) : null}
              <TwitterShareButton
                onClick={() => {
                  handleShareGoogleAnalytics("Twitter");
                }}
                className="mr-4"
                url={url}
                title="Sprawdzcie wydarzenie w Zakładzie Opiekuńczo-Leczniczym w Koprzywnicy!"
                aria-label="Udostępnij przez Twittera"
                hashtags={["zolkoprzywnica"]}
              >
                <TwitterIcon size={40} round />
              </TwitterShareButton>
              <EmailShareButton
                onClick={() => {
                  handleShareGoogleAnalytics("Email");
                }}
                url={url}
                subject={`Sprawdź wydarzenie ${title} Zakładu Opiekuńczo-Leczniczego`}
                body={`Witaj! Sprawdź wydarzenie ${title} Zakładu Opiekuńczo-Leczniczego. Oto link do wydarzenia:`}
                title="Udostępnij przez Email"
              >
                <EmailIcon size={40} round />
              </EmailShareButton>
            </div>
          </section>
        </CSSTransition>
      </div>
    </>
  );
};
export default ShareButtons;
