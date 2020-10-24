import React, { ComponentType, FC } from 'react';

interface OptionalWrapperCmpProps {
  condition: boolean;
  Component: ComponentType;
  // @todo: check why removing children prop type below causes ts errors
  children?: any;
}

const OptionalWrapper: FC<OptionalWrapperCmpProps> = ({ condition, Component, children }) => {
  return condition ? <Component>{children}</Component> : children;
};

export default OptionalWrapper;
