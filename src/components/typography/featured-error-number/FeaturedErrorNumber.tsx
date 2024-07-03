import { FC } from 'react';

import { FeaturedNumber } from './FeaturedErrorNumber.style';
import { StyledComponentProps } from '../../../interfaces/misc';

export const FeaturedErrorNumber = (props: StyledComponentProps) => {
  return <FeaturedNumber {...props} />;
};
