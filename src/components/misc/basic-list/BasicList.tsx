import { FC } from 'react';

import { StyledList } from './BasicList.style';

type NestedComponents = {
  Item: FC;
};

const BasicList: FC & NestedComponents = ({ children }) => {
  return <StyledList className="list-unstyled">{children}</StyledList>;
};

const ListItem = (props) => {
  return <li {...props} />;
};

BasicList.Item = ListItem;

export { BasicList };
