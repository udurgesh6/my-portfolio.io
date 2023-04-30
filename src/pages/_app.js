import "@/styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>durgeshU.io</title>
        <meta
          name="description"
          content="Helping developers help each other for a better coding experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/tab_logo.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};
export default App;
