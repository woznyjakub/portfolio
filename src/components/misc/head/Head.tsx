import { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Title, Meta, Link } from 'react-head';

import { HeadCpmProps, SiteMetadataResponse } from './Head.model';

export const Head: FC<HeadCpmProps> = ({ title }) => {
  const data: SiteMetadataResponse = useStaticQuery(
    graphql`
      {
        dataJson(dataType: { eq: "metadata" }) {
          siteMetaData {
            title
            description
            author
            canonicalUrl
          }
        }
        file(name: { eq: "og-image-small" }) {
          publicURL
        }
      }
    `,
  );

  const { title: metaTitle, description, author, canonicalUrl } = data.dataJson.siteMetaData;
  const { publicURL: ogImageUrl } = data.file;
  return (
    <>
      <Title>
        {/* `metaTitle` is common for every page; `title` is a page title taken from specific page */}
        {metaTitle} {title && `— ${title}`}
      </Title>
      <Meta name="description" content={description} />
      <Meta name="author" content={author} />
      <Link rel="canonical" href={canonicalUrl} />

      <Meta name="og:title" content={metaTitle} />
      <Meta name="og:description" content={description} />
      <Meta name="og:author" content={author} />
      <Meta name="og:type" content="website" />
      <Meta name="og:image" content={ogImageUrl} />

      <Meta name="twitter:title" content={metaTitle} />
      <Meta name="twitter:description" content={author} />
      <Meta name="twitter:creator" content={author} />
      <Meta name="twitter:card" content="summary" />
    </>
  );
};
