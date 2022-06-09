import { Footer } from '../components/Shared/Footer';
import { Header } from '../components/Shared/Header';
import { GlobalContext } from '../context'

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ GlobalContext>
  );
}

export default MyApp;
