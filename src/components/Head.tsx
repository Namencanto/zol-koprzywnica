import Head from "next/head";
import { contactData } from "src/static/contactData";

const SeoHead = () => {
  const pageTitle = "Oferta rehabilitacji - Zakład Opiekuńczo-Leczniczy";
  const pageDescription =
    "Zapraszamy do skorzystania z naszej oferty rehabilitacji w Zakładzie Opiekuńczo-Leczniczym. Oferujemy szeroki zakres zabiegów rehabilitacyjnych, dostosowanych do potrzeb pacjentów.";
  const ogImageUrl = "https://example.com/images/oferta.jpg";

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="keywords"
        content="Zakład opiekuńczo-leczniczy, Alzheimer, otępienie, choroba somatyczna, opieka nad osobami starszymi, badania naukowe, metody terapeutyczne, zakład ogólny, zakład psychiatryczny, usługi opieki medycznej, personel pielęgniarski, rehabilitacja, fizjoterapia, terapia zajęciowa, fizykoterapia, lekarz internista, psychiatra, psycholog."
      />
      <meta name="author" content={contactData.author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content="https://example.com" />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:secure_url" content={ogImageUrl} />
      <meta
        property="og:image:alt"
        content="Zdjęcie przedstawiające jedną z sal rehabilitacji"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  );
};

export default SeoHead;
