import React, { ComponentType } from 'react';

interface OptionalWrapperCmpProps {
  condition: boolean;
  WrapperComponent: ComponentType;
  children: any;
}

const OptionalWrapper: React.FC<OptionalWrapperCmpProps> = ({ condition, WrapperComponent, children }) => {
  return condition ? <WrapperComponent>{children}</WrapperComponent> : children;
};

export default OptionalWrapper;
