export interface MenuItem {
  label: string;
  link: string;
}

export interface TextContent {
  allDataJson: {
    nodes: [
      {
        pageName: string;
        content: {
          mainTitle: string;
          mailAddress: string;
          mailLinkLabel: string;
          menuItems: MenuItem[];
          copyrightText: string;
        };
      },
    ];
  };
}

export interface IndexPageProps {
  data?: TextContent;
}
