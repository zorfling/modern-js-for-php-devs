import React from 'react';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { rhythm } from '../utils/typography';

const AffiliateLink = props => {
  let linkText;
  switch (props.ad) {
    case 'jquery':
      linkText = (
        <div>
          <p>
            If you need to brush up on pure JavaScript before you hang up the
            dollar sign, I can thoroughly recommend Wes Bos’{' '}
            <OutboundLink href="https://JavaScript30.com/friend/JS4PHP">
              JavaScript 30
            </OutboundLink>{' '}
            and{' '}
            <OutboundLink href="https://ES6.io/friend/JS4PHP">
              ES6 For Everyone
            </OutboundLink>{' '}
            courses.
          </p>
          <p>
            I’ve personally completed both and they really opened my eyes to
            modern JS and how much it has changed (for the better!).
          </p>
        </div>
      );
      break;
    case 'react':
      linkText = (
        <div>
          <p>
            If you want go deeper with React, I can thoroughly recommend Wes
            Bos’ courses{' '}
            <OutboundLink href="https://ReactForBeginners.com/friend/JS4PHP">
              React for Beginners
            </OutboundLink>{' '}
            and the newly released{' '}
            <OutboundLink href="https://AdvancedReact.com/friend/JS4PHP">
              Fullstack Advanced React and GraphQL
            </OutboundLink>.
          </p>
          <p>
            <OutboundLink href="https://AdvancedReact.com/friend/JS4PHP">
              Get the new Advanced React course quick
            </OutboundLink>, while it's still on launch special (up to 40% off!)
          </p>
        </div>
      );
      break;
    case 'graphql':
      linkText = (
        <div>
          <p>Want to go deeper with GraphQL?</p>
          <p>
            Wes Bos has just released his new{' '}
            <OutboundLink href="https://AdvancedReact.com/friend/JS4PHP">
              Fullstack Advanced React and GraphQL course
            </OutboundLink>, covering full stack react and GraphQL with Prisma
            and Apollo.
          </p>
          <p>
            <OutboundLink href="https://AdvancedReact.com/friend/JS4PHP">
              Get it now
            </OutboundLink>{' '}
            while it's still on launch special (up to 40% off!)
          </p>
        </div>
      );
      break;

    default:
      break;
  }

  return linkText ? (
    <div
      style={{
        marginBottom: rhythm(2.5)
      }}
    >
      {linkText}
      <p>
        <small>
          <em>Please note: The above are affiliate links.</em>
        </small>
      </p>
      <hr style={{ marginBottom: '1.78rem' }} />
    </div>
  ) : null;
};

AffiliateLink.propTypes = {
  ad: PropTypes.string
};

AffiliateLink.defaultProps = {
  ad: null
};

export default AffiliateLink;
