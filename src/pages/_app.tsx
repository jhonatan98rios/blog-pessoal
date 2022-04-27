import { Footer } from '../components/Shared/Footer';
import { Header } from '../components/Shared/Header';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
