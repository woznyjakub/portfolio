export type AllHTMLAttributes = React.AllHTMLAttributes<HTMLElement>;

export type StyledComponentProps<T = {}> = T & {
  as?: keyof JSX.IntrinsicElements;
} & AllHTMLAttributes;
