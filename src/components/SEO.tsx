import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    // Helper to strip HTML tags
    const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, '');

    // Update Document Title
    const baseTitle = "Latam Abogados | Dr. Marcus Ambrose";
    const cleanTitle = stripHtml(title);
    document.title = `${cleanTitle} | ${baseTitle}`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    const rawDesc = description || "Especialista en Inglés Jurídico y Legal English práctico. Más de 40 años de experiencia en leyes de EE.UU.";
    metaDescription.setAttribute('content', stripHtml(rawDesc));

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords || "inglés jurídico, legal english, abogado ee.uu, inmigración usa, marcus ambrose");

  }, [title, description, keywords]);

  return null;
};

export default SEO;
