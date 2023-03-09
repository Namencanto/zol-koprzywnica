import "../static/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "src/context/themeContext";
import { contactData } from "src/static/contactData";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  pageProps = {
    ...pageProps,
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content={contactData.author} />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#134944" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
