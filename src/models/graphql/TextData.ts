export interface TextContent<D> {
  pageName: string;
  content: D;
}

export interface JsonTextData<D> {
  allDataJson: {
    nodes: TextContent<D>[];
  };
}
