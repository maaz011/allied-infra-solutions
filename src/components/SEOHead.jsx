import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOHead = ({
  title,
  description,
  keywords,
  ogImage,
  canonical,
  type = 'website',
  breadcrumbs,
  structuredData
}) => {
  const location = useLocation();
  const baseUrl = 'https://alliedinfrasolutions.in';
  const fullUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    if (keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical || fullUrl);

    // Update Open Graph tags
    const updateOGTag = (property, content) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      if (content) {
        ogTag.setAttribute('content', content);
      }
    };

    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:url', fullUrl);
    updateOGTag('og:type', type);
    if (ogImage) {
      updateOGTag('og:image', ogImage);
    }

    // Update Twitter tags
    const updateTwitterTag = (name, content) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      if (content) {
        twitterTag.setAttribute('content', content);
      }
    };

    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    if (ogImage) {
      updateTwitterTag('twitter:image', ogImage);
    }

    // Add Breadcrumb Schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@id": `${baseUrl}${crumb.url}`,
            "name": crumb.name
          }
        }))
      };

      let breadcrumbScript = document.querySelector('#breadcrumb-schema');
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.id = 'breadcrumb-schema';
        breadcrumbScript.type = 'application/ld+json';
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    }

    // Add custom structured data if provided
    if (structuredData) {
      let customScript = document.querySelector('#custom-schema');
      if (!customScript) {
        customScript = document.createElement('script');
        customScript.id = 'custom-schema';
        customScript.type = 'application/ld+json';
        document.head.appendChild(customScript);
      }
      customScript.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function to remove dynamically added elements
    return () => {
      const breadcrumbScript = document.querySelector('#breadcrumb-schema');
      const customScript = document.querySelector('#custom-schema');
      if (breadcrumbScript) breadcrumbScript.remove();
      if (customScript) customScript.remove();
    };

  }, [title, description, keywords, ogImage, canonical, fullUrl, location.pathname, type, breadcrumbs, structuredData]);

  return null;
};

export default SEOHead;
