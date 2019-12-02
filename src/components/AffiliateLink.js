import React from 'react';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { rhythm } from '../utils/typography';
import BlackFriday from './BlackFriday';

const AffiliateLink = props => {
  let linkText;
  switch (props.ad) {
    case 'arrow':
      linkText = (
        <div>
          <p>
            If arrow functions still look like hieroglyphics to you, I can
            thoroughly recommend Wes Bos’{' '}
            <OutboundLink href="https://BeginnerJavaScript.com/friend/JS4PHP	">
              Beginner JavaScript
            </OutboundLink>{' '}
            and{' '}
            <OutboundLink href="https://ES6.io/friend/JS4PHP">
              ES6+ For Everyone
            </OutboundLink>{' '}
            courses.
          </p>
          <p>They will really help you to grok and enjoy modern JS syntax.</p>
          <BlackFriday />
        </div>
      );
      break;
    case 'jquery':
      linkText = (
        <div>
          <p>
            If you need to brush up on pure JavaScript before you hang up the
            dollar sign, I can thoroughly recommend Wes Bos’{' '}
            <OutboundLink href="https://BeginnerJavaScript.com/friend/JS4PHP">
              Beginner JavaScript
            </OutboundLink>{' '}
            and{' '}
            <OutboundLink href="https://ES6.io/friend/JS4PHP">
              ES6+ For Everyone
            </OutboundLink>{' '}
            courses.
          </p>
          <p>
            They will really open your eyes to modern JS and how much it has
            changed (for the better!).
          </p>
          <BlackFriday />
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
            and{' '}
            <OutboundLink href="https://AdvancedReact.com/friend/JS4PHP">
              Fullstack Advanced React and GraphQL
            </OutboundLink>
            .
          </p>
          <p>
            I’ve personally completed both and they really helped me level up my
            React game.
          </p>
          <BlackFriday />
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
            </OutboundLink>
            , covering full stack react and GraphQL with Prisma and Apollo.
          </p>
          <BlackFriday />
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
