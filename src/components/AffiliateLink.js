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
            Bos’{' '}
            <OutboundLink href="https://ReactForBeginners.com/friend/JS4PHP">
              React for Beginners
            </OutboundLink>{' '}
            and{' '}
            <OutboundLink href="https://LearnRedux.com/friend/JS4PHP">
              Learn Redux
            </OutboundLink>{' '}
            courses. I’ve personally completed both and loved his build along
            project style.
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
