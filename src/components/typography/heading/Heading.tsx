import { StyledHeading } from './Heading.style';
import { StyledComponentProps } from '../../../interfaces/misc';

export type FontSize = 'large' | 'larger';
export type Gutter = 'top' | 'right' | 'bottom' | 'left' | null;

export type HeadingProps = StyledComponentProps<{
  fontSize?: FontSize;
  gutter?: Gutter;
  centered?: boolean;
}>;

export const Heading = (props: HeadingProps) => {
  return <StyledHeading {...props} />;
};
