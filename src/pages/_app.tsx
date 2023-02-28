import { Footer, Header } from 'components/Shared'
import { GlobalContext } from 'context'
import { ReactNotifications } from 'react-notifications-component'

import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';
import '../styles/globals.scss'
import { ConsentBanner } from 'components/Shared/ConsentBanner';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>,
      <ReactNotifications />
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ConsentBanner />
    </ GlobalContext>
  );
}

export default MyApp;
