import { FC } from 'react';

import { StyledList } from './BasicList.style';
import { NestedComponents } from './BasicList.model';

const BasicList: FC & NestedComponents = ({ children }) => {
  return <StyledList className="list-unstyled">{children}</StyledList>;
};

const ListItem: FC = (props) => {
  return <li {...props} />;
};

BasicList.Item = ListItem;

export { BasicList };
