import "../static/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "src/context/themeContext";
export default function App({ Component, pageProps }: AppProps) {
  pageProps = {
    ...pageProps,
  };
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
