import { BasicPage } from '../../containers/pages';
import { BasicList } from '../../components/misc';
import { BasicText, Heading } from '../../components/typography';

import { ContactItemWrapper, StyledIcon } from './contact.style';
import { ContactPageData } from './contact.interface';

type ContactPageProps = {
  data: ContactPageData;
};

const ContactPage = ({ data }: ContactPageProps) => {
  const { content } = data.dataJson;
  const { edges: icons } = data.allFile;

  return (
    <BasicPage title={content.pageTitle}>
      <BasicPage.Section>
        <Heading gutter="bottom" centered>
          {content.contactDatalistLabel}
        </Heading>
        <BasicList>
          {content.contactData.map(({ label, href, iconName }) => {
            const icon = icons.find((icon) => icon.node.name === iconName).node.publicURL;

            return (
              <BasicList.Item key={label}>
                <ContactItemWrapper>
                  {/* @todo: handle icons using <svg> tag and use `fillOnHover` effect */}
                  <BasicText as="a" href={href} target="_blank" rel="noopener noreferrer" fontSize="larger">
                    <StyledIcon src={icon} alt={`${label} icon`} />
                    {label}
                  </BasicText>
                </ContactItemWrapper>
              </BasicList.Item>
            );
          })}
        </BasicList>
      </BasicPage.Section>
    </BasicPage>
  );
};

export default ContactPage;
