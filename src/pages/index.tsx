import Head from "next/head";
import Navbar from "src/components/Navbar";
import Main from "src/components/MainPage/Main";
import News from "src/components/MainPage/News";
import Faq from "src/components/MainPage/Faq/Faq";
import Contact from "src/components/MainPage/Contact";
import Location from "src/components/MainPage/Location";
import Footer from "src/components/Footer";
import Information from "src/components/MainPage/Information";
import Steps from "src/components/MainPage/Steps";
import { GetStaticProps } from "next";
import { Events } from "src/static/types";
import Script from "next/script";
const Home: React.FC<Events> = ({ allEvents }) => {
  return (
    <>
      <Head>
        <title>Zakład Opiekuńczo-Leczniczy w Koprzywnicy</title>
        <meta
          name="description"
          content="Zakład opiekuńczo-leczniczy w Koprzywnicy - oferujemy kompleksowe usługi opiekuńcze i medyczne dla osób starszych i niepełnosprawnych. Nasza placówka zapewnia wysoką jakość opieki w komfortowych warunkach. Zapraszamy do zapoznania się z naszą ofertą."
        />
        <meta
          name="keywords"
          content="Zakład opiekuńczo-leczniczy, Zakład opiekuńczo-leczniczy w koprzywnicy Alzheimer, Koprzywnica, stowarzyszenie, Fizjoterapia, Hipoterapia, Rehabilitacja,"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="./" />
        <meta property="og:image" content="/images/zaklad.jpg" />
        <meta name="twitter:card" content="/images/zaklad.jpg" />
        <meta name="twitter:image" content="/images/zaklad.jpg" />
      </Head>

      <Navbar />
      <Main />
      <News allEvents={allEvents} />
      <Faq />
      <Information />
      <Steps />
      <Contact />
      <Location />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({}) => {
  const events: object = await import("../static/languages/pl.json");
  const eventsList = Object.values(events).flatMap(
    (eventsInYear) => eventsInYear
  );

  return {
    props: {
      allEvents: eventsList.slice(0, -1),
    },
  };
};

export default Home;
