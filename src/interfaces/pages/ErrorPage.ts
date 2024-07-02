import { SingleJson, PageTextContent, ErrorPageContent } from '../graphql';

export interface ErrorCmpProps {
  data: SingleJson<PageTextContent<ErrorPageContent>>;
}
