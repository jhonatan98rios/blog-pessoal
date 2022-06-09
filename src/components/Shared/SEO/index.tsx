import Head from 'next/head';

import { jsonLdGenerator } from '../../../services/json-ld'

import { SEOProps } from '../../../types'

export default function SEO({
  title,
  description,
  slug = '',
  image,
  keywords = '',
  excludeTitleSuffix = false,
  indexPage = true,
  hasADS=false
}: SEOProps) {
  
  const pageTitle = `${title} ${!excludeTitleSuffix ? '| Como ser um desenvolvedor?' : ''}`;
  const default_keywords = 'Como ser um desenvolvedor?, blog de tecnologia, blog de programação, blog de design, blog de tecnologia, linguagens de programação, programação web, desenvolvimento de aplicativos,'
  const pageKeywords = default_keywords + keywords
  const pageImage = image ? image : 'https://jhonatan-teixeira-rios-blog.herokuapp.com/logo.png'

  return (
    <Head>
      <title>{pageTitle}</title>

      {description && <meta name="description" content={description} />}
      {!indexPage && <meta name="robots" content="noindex,nofollow" />}
      <meta name="image" content={pageImage} />

      <meta httpEquiv="x-ua-compatible" content="IE=edge" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#302F38" />
      <meta name="msapplication-TileColor" content="#302F38" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />
      <meta name="keywords" content={pageKeywords} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="blog" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="360" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ContactstSmart" />
      <meta name="twitter:creator" content="@ContactstSmart" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta property="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="800" />
      <meta name="twitter:image:height" content="360" />      

      <script 
        type="application/ld+json"
        key="jsonld"
        dangerouslySetInnerHTML={
          jsonLdGenerator({
            url:  `https://jhonatan-teixeira-rios-blog.herokuapp.com/post/${slug}`,
            title: title,
            src: pageImage
          })
        }
      />

      {/* ADSENSE */}
      {
        hasADS && 
          <script
            id="Adsense-id"
            async={true}
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1739197497968733"
            crossOrigin="anonymous"
          />
      }
      
    </Head>
  );
}
