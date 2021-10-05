import React from 'react';

const FAQs = () => {
  return <h1>Hello World</h1>;
};

export default FAQs;
import FAQs from 'ftw-hourly-sendapro/src/containers/FAQs/FAQs';

import React from 'react';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import StaticPage from 'ftw-hourly-sendapro/src/containers/StaticPage/StaticPage';
import TopbarContainer from 'ftw-hourly-sendapro/src/containers/TopbarContainer/TopbarContainer';

import css from './FAQPage.module.css';

const FAQPage = () => {
  // prettier-ignore
  return (
    <StaticPage>
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>
          <h1>Frequently Asked Questions</h1>

          <div>
            <h3>Question 1?</h3>
            <p>Answer: Lorem ipsum</p>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQs;

.mainWrapper {
  width: calc(100% - 48px);
  max-width: 720px;
  margin: 24px auto;

  @media (--viewportMedium) {
    max-width: 650px;
    width: calc(100% - 72px);
    margin: 72px auto 36px auto;
  }
}
