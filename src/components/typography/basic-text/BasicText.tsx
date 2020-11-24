import React, { FC } from 'react';

import { StyledText } from './BasicText.style';
import { TextCmpProps } from './BasicText.model';

export const BasicText: FC<TextCmpProps> = (props) => {
  return <StyledText {...props} />;
};
