import Img, { FluidObject } from 'gatsby-image';
import { BasicText, Heading } from '../../components/typography';
import { Font } from '../../utils';
import { WorkCardData } from './works.interface';
import { Card, CardTextWrapper } from './works.style';

type WorkCardProps = WorkCardData & {
  fluid: FluidObject;
  technologyText: string;
  releaseDateText: string;
};

export const WorkCard = ({
  fluid,
  title,
  description,
  imageName,
  links,
  technologies,
  releaseDate,
  technologyText,
  releaseDateText,
}: WorkCardProps) => (
  <Card key={title}>
    {imageName && (
      <figure>
        <Img className="img-stretched" fluid={fluid} alt={`${title || ''} example screenshot`} />
      </figure>
    )}
    <CardTextWrapper>
      {title && <Heading gutter="bottom">{title}</Heading>}
      {description && (
        <BasicText as="p" fontSize="smaller">
          <BasicText>{description}</BasicText>
          <br />
          <BasicText>
            {`${technologyText} ${technologies}`}
            <br />
            {`${releaseDateText} ${releaseDate}`}
          </BasicText>
        </BasicText>
      )}
      <div style={{ marginTop: 'auto' }}>
        {links?.map(({ label, url }, i, array) => (
          <BasicText
            as="a"
            className="underline"
            href={url || null}
            key={label}
            target="_blank"
            rel="noopener noreferrer"
            gutter={i < array.length - 1 ? 'right' : null}
            font={Font.SECONDARY}
            moveUnderlineOnHover
          >
            {label}
          </BasicText>
        ))}
      </div>
    </CardTextWrapper>
  </Card>
);
