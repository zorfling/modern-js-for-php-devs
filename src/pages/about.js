import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Link from 'gatsby-link';

import Bio from '../components/Bio';
import MailingSignup from '../components/MailingSignup';
import { rhythm, scale } from '../utils/typography';

const About = props => (
  <div>
    <Helmet title={get(props, 'data.site.siteMetadata.title')} />
    <div>
      <h1>About Me</h1>
      <div style={{ display: 'flex' }}>
        <div
          style={{ flex: '0 0 175px', marginRight: '3rem', marginTop: '3rem' }}
        >
          <img
            src="https://secure.gravatar.com/avatar/13dbc56733c2cc66fbc698cdb07fec12?s=175"
            width="175"
            height="175"
            alt="Photo of Chris Colborne"
          />
        </div>
        <div>
          <h2>Hi, I'm Chris Colborne.</h2>
          I'm a Web Developer from Brisbane, Australia. I specialise in building
          custom web applications, primarily with PHP and JavaScript.
        </div>
      </div>
      <p>
        I'm also a father to a beautiful 6 year old daughter, and husband to a
        crazy Hungarian.
      </p>
      <p>
        You can find me on <a href="https://twitter.com/zorfling">Twitter</a>,{' '}
        <a href="https://www.facebook.com/zorfling">Facebook</a>,{' '}
        <a href="https://au.linkedin.com/in/chriscolborne">LinkedIn</a> and{' '}
        <a href="https://github.com/zorfling">GitHub</a>. Or feel free to drop
        me an email at chris (at) chriscolborne.com.
      </p>
    </div>
  </div>
);

export default About;

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
