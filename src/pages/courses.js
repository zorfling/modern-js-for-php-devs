import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Link from 'gatsby-link';
import {
  Sale,
  LearnNodeLink,
  BeginnerJavaScriptLink,
  ReactForBeginnersLink,
  AdvancedReactLink,
  ES6Link,
  CssGridLink,
  FlexboxLink,
  LearnReduxLink,
  Javascript30Link
} from '../components/AffiliateLink';

import Bio from '../components/Bio';
import MailingSignup from '../components/MailingSignup';
import { rhythm, scale } from '../utils/typography';

const Courses = props => (
  <div>
    <Helmet title={get(props, 'data.site.siteMetadata.title')} />
    <h1>Courses</h1>
    <p>
      I can thoroughly recommend all of Wes Bos' courses. I've personally bought
      almost all of them and found his style of project based teaching really
      works well for me. Give one of his free courses a try and see if you like
      his style too.
    </p>
    <ul>
      <li>
        <BeginnerJavaScriptLink />
      </li>
      <li>
        <Javascript30Link />
      </li>
      <li>
        <ES6Link />
      </li>
      <li>
        <ReactForBeginnersLink />
      </li>
      <li>
        <AdvancedReactLink />
      </li>
      <li>
        <LearnReduxLink />
      </li>
      <li>
        <LearnNodeLink />
      </li>
      <li>
        <FlexboxLink />
      </li>
      <li>
        <CssGridLink />
      </li>
    </ul>
    <Sale />
  </div>
);

export default Courses;

export const pageQuery = graphql`
  query CoursesQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
