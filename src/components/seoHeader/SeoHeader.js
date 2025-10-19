import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  const sameAs = Array.isArray(socialMediaLinks)
    ? socialMediaLinks
        .filter(
          (media) =>
            media &&
            media.link &&
            !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
        )
        .map((m) => m.link)
    : [];

  const mailMedia = Array.isArray(socialMediaLinks)
    ? socialMediaLinks.find(
        (media) => media && media.link && media.link.startsWith("mailto")
      )
    : null;
  const mail = mailMedia ? mailMedia.link.substring("mailto:".length) : "";

  const job = Array.isArray(experience?.sections)
    ? experience.sections.find((section) => section && section.work)
        ?.experiences?.[0]
    : null;

  const credentials = Array.isArray(certifications?.certifications)
    ? certifications.certifications.map((certification) => ({
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalCredential",
        url: certification.certificate_link || "",
        name: certification.title || "",
        description: certification.subtitle || "",
      }))
    : [];
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting?.title || "",
    url: seo?.og?.url,
    email: mail,
    telephone: contactPageData?.phoneSection?.subtitle || "",
    sameAs: sameAs,
    jobTitle: job?.title || "",
    worksFor: job
      ? {
          "@type": "Organization",
          name: job.company || "",
        }
      : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData?.addressSection?.locality || "",
      addressRegion: contactPageData?.addressSection?.region || "",
      addressCountry: contactPageData?.addressSection?.country || "",
      postalCode: contactPageData?.addressSection?.postalCode || "",
      streetAddress: contactPageData?.addressSection?.streetAddress || "",
    },
    hasCredential: credentials,
  };
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
