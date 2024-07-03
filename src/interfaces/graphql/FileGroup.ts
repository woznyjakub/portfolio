export type SingleFileFromGroup<TFile> = {
  node: TFile;
};

export type FileGroup<TFile> = {
  allFile: {
    edges: SingleFileFromGroup<TFile>[];
  };
};

export type JsonGroup<D> = {
  allDataJson: {
    nodes: D;
  };
};
