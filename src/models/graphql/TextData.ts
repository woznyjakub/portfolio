export interface PageTextContent<D> {
  pageName: string;
  content: D;
}

export interface ErrorPageContent {
  pageTitle: string;
  errorCode: string;
  errorMessage: string;
}
