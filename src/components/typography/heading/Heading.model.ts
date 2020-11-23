import React from 'react';

export type FontSize = 'large' | 'larger';
export type Gutter = 'top' | 'right' | 'bottom' | 'left' | null;

export interface HeadingCmpProps extends React.ComponentProps<any> {
  fontSize?: FontSize;
  gutter?: Gutter;
  centered?: boolean;
}
