import { ComponentType } from 'react';

export interface OptionalWrapperCmpProps {
  condition: boolean;
  Component: ComponentType;
  // @todo: check why removing children prop type below causes ts errors
  children?: any;
}
