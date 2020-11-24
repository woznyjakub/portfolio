import React, { FC } from 'react';

import { StyledHeading } from './Heading.style';
import { HeadingCmpProps } from './Heading.model';

export const Heading: FC<HeadingCmpProps> = (props) => {
  return <StyledHeading {...props} />;
};
