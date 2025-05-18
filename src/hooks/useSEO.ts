import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  lang?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

/**
 * useSEO - Hook para atualizar dinamicamente metadados de SEO no <head>.
 * NÃO altera conteúdo visível do site, apenas tags do head.
 */
export function useSEO({
  title,
  description,
  keywords,
  lang,
  ogTitle,
  ogDescription,
  ogImage,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
}: SEOProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (lang) {
      document.documentElement.lang = lang;
    }
    if (description) {
      updateMeta('description', description);
    }
    if (keywords) {
      updateMeta('keywords', keywords);
    }
    // Open Graph
    if (ogTitle) updateMeta('og:title', ogTitle, 'property');
    if (ogDescription) updateMeta('og:description', ogDescription, 'property');
    if (ogImage) updateMeta('og:image', ogImage, 'property');
    // Twitter Card
    if (twitterCard) updateMeta('twitter:card', twitterCard);
    if (twitterTitle) updateMeta('twitter:title', twitterTitle);
    if (twitterDescription) updateMeta('twitter:description', twitterDescription);
    if (twitterImage) updateMeta('twitter:image', twitterImage);
  }, [title, description, keywords, lang, ogTitle, ogDescription, ogImage, twitterCard, twitterTitle, twitterDescription, twitterImage]);
}

function updateMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attr}='${name}']`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}
