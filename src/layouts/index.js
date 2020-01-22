require('prismjs/themes/prism-okaidia.css');

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import { Container } from 'react-responsive-grid';

import { rhythm, scale } from '../utils/typography';

const Template = ({ location, children }) => {
  let header;

  let rootPath = `/`;
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`;
  }

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit'
          }}
          to={'/'}
        >
          Modern JS for PHP Devs
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
          marginBottom: rhythm(-1)
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit'
          }}
          to={'/'}
        >
          Modern JS for PHP Devs
        </Link>
      </h3>
    );
  }

  return (
    <Container
      style={{
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
    >
      <Helmet>
        <meta
          name="google-site-verification"
          content="cFwycapKTaXQNg_YXy4GuPrN2NXWfU45dcS-AN7xbF8"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#bec3d2" />
        <meta
          name="apple-mobile-web-app-title"
          content="Modern JS for PHP Devs"
        />
        <meta name="application-name" content="Modern JS for PHP Devs" />
        <meta name="msapplication-TileColor" content="#bec3d2" />
        <meta name="theme-color" content="#bec3d2"></meta>
      </Helmet>
      {header}
      {children()}
    </Container>
  );
};

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
