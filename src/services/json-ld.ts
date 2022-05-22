

export const jsonLdGenerator = ({ url, title, src }) => {
  return `{
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${url}"
    },
    "headline": "${title}",
    "image": "${src}",  
    "author": {
      "@type": "Person",
      "name": "Jhonatan Teixeira Rios",
      "url": "https://www.linkedin.com/in/jhonatan-teixeira-rios-499400128/"
    },  
    "publisher": {
      "@type": "Person",
      "name": "Jhonatan Teixeira Rios",
      "logo": {
        "@type": "ImageObject",
        "url": ""
      }
    },
    "datePublished": "2022-05-21",
    "dateModified": "2022-05-21"
  }`
}