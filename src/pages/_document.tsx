import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />

          {/* ADSENSE */}
          <Script
            id="Adsense-id"
            data-ad-client="ca-pub-1739197497968733"
            async={true}
            strategy="beforeInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            crossOrigin="anonymous"
          />

          {/* Google Analytics GA4 */}
          <Script
            async={true}
            src="https://www.googletagmanager.com/gtag/js?id=G-CSRS3918KR"
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CSRS3918KR');
              `
            }}
          />


          {/* Google Analytics UA */}
          <Script
            async={true}
            src="https://www.googletagmanager.com/gtag/js?id=UA-207352506-2"
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-207352506-2');
              `
            }}
          />


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
