import { Footer } from '../components/Shared/Footer';
import { Header } from '../components/Shared/Header';
import { GlobalContext } from '../context'

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1739197497968733"
        data-ad-slot="6382729267"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </ GlobalContext>
  );
}

export default MyApp;
