import { Font } from '../../../utils';

export type Gutter = 'top' | 'right' | 'bottom' | 'left' | null;
export type FontSize = 'smaller' | 'larger';

export interface TextCmpProps extends React.ComponentProps<any> {
  fillOnHover?: boolean;
  fontSize?: FontSize;
  gutter?: Gutter;
  moveUnderlineOnHover?: boolean;
  font?: Font;
}
