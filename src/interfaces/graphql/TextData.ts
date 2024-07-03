export type PageTextContent<T> = {
  pageName: string;
  content: T;
};

export type ErrorPageContent = {
  pageTitle: string;
  errorCode: string;
  errorMessage: string;
};

export type BasicPageTextContent = {
  pageTitle: string;
};
