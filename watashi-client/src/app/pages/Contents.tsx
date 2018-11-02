import * as React from 'react';

import { PageWrapper } from '../atoms/LayoutStyles';
import { PageHeading } from '../atoms/TextStyles';
import { ROUTE_TITLE, ROUTE_DESCRIPTION } from '../../util/constants/generalConstants';

import Helmet from '../components/Helmet';

class ContentsPage extends React.Component<{}, {}> {
  public render() {
    return (
      <PageWrapper>
        <Helmet
          title={ROUTE_TITLE.CONTENTS}
          description={ROUTE_DESCRIPTION.CONTENTS}
        />
        <PageHeading>{ROUTE_TITLE.CONTENTS}</PageHeading>
      </PageWrapper> 
    );
  };
};

export default ContentsPage;
