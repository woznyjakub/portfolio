import { Font } from '../../../utils';
import { StyledText } from './BasicText.style';
import { StyledComponentProps } from '../../../interfaces/misc';

type Gutter = 'top' | 'right' | 'bottom' | 'left' | null;
type FontSize = 'smaller' | 'larger';

export type TextCmpProps = StyledComponentProps<{
  fillOnHover?: boolean;
  fontSize?: FontSize;
  gutter?: Gutter;
  moveUnderlineOnHover?: boolean;
  font?: Font;
}>;

export const BasicText = (props: TextCmpProps) => {
  return <StyledText {...props} />;
};
