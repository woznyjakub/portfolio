import React, { FC } from 'react';

import { OptionalWrapperCmpProps } from './OptionalWrapper.model';

export const OptionalWrapper: FC<OptionalWrapperCmpProps> = ({ condition, Component, children }) => {
  return condition ? <Component>{children}</Component> : children;
};
