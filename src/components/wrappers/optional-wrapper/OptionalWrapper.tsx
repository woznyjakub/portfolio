import { FC, ReactNode } from 'react';

type OptionalWrapperCmpProps = {
  condition: boolean;
  Component: FC<{ children?: ReactNode }>;
  children: ReactNode;
};

export const OptionalWrapper = ({ condition, Component, children }: OptionalWrapperCmpProps) => {
  return condition ? <Component>{children}</Component> : <>{children}</>;
};
