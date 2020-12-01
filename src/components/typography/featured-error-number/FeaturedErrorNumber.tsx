import { ComponentProps, FC } from 'react';

import { FeaturedNumber } from './FeaturedErrorNumber.style';

export const FeaturedErrorNumber: FC<ComponentProps<any>> = (props) => {
  return <FeaturedNumber {...props} />;
};
