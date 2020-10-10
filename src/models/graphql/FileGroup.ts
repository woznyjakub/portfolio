export interface SingleFileFromGroup<TFile> {
  node: TFile;
}

export interface FileGroup<TFile> {
  allFile: {
    edges: SingleFileFromGroup<TFile>[];
  };
}
