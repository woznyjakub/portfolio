import { useStaticQuery, graphql } from 'gatsby';
import { Title, Meta, Link } from 'react-head';

import { SingleFile, SingleDataJson } from '../../../interfaces/graphql';

type SiteMetadata = {
  title: string;
  description: string;
  author: string;
  canonicalUrl: string;
};

type SiteMetadataResponse = SingleDataJson<{ siteMetaData: SiteMetadata }> &
  SingleFile<{
    publicURL: string;
  }>;

type HeadProps = {
  title?: string;
};

export const Head = ({ title }: HeadProps) => {
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
