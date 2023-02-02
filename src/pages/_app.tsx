import { Footer, Header } from 'components/Shared';
import { GlobalContext } from 'context'

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
