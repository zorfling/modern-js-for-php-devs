import React from 'react';
import PropTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { rhythm } from '../utils/typography';

export const LearnNodeLink = () => (
  <OutboundLink href="https://LearnNode.com/friend/JS4PHP">
    Learn Node
  </OutboundLink>
);

export const BeginnerJavaScriptLink = () => (
  <OutboundLink href="https://BeginnerJavaScript.com/friend/JS4PHP">
    Beginner JavaScript
  </OutboundLink>
);

export const ES6Link = () => (
  <OutboundLink href="https://ES6.io/friend/JS4PHP">
    ES6+ For Everyone
  </OutboundLink>
);

export const ReactForBeginnersLink = () => (
  <OutboundLink href="https://ReactForBeginners.com/friend/JS4PHP">
    React for Beginners
  </OutboundLink>
);

export const AdvancedReactLink = () => (
  <OutboundLink href="https://AdvancedReact.com/friend/JS4PHP">
    Fullstack Advanced React and GraphQL
  </OutboundLink>
);

export const CssGridLink = () => (
  <OutboundLink href="https://cssgrid.io/friend/JS4PHP">
    CSS Grid (FREE)
  </OutboundLink>
);

export const Javascript30Link = () => (
  <OutboundLink href="https://javascript30.com/friend/JS4PHP">
    JavaScript30 (FREE)
  </OutboundLink>
);

export const FlexboxLink = () => (
  <OutboundLink href="https://flexbox.io/friend/JS4PHP">
    What the Flexbox?! (FREE)
  </OutboundLink>
);

export const LearnReduxLink = () => (
  <OutboundLink href="https://learnredux.com/friend/JS4PHP">
    Learn Redux (FREE)
  </OutboundLink>
);

const isSaleOn = () => new Date() < new Date(1580533199202);
export const Sale = () =>
  isSaleOn() ? (
    <div
      style={{
        border: '1px solid rgba(0, 0, 0, 0.2)',
        background: 'rgba(0,0,0,0.05)',
        padding: '1.5rem',
        textAlign: 'center'
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: '1rem'
        }}
      >
        NEW YEAR, NEW YOU! SALE ON NOW!
      </h3>
      Applies to <BeginnerJavaScriptLink />, <ReactForBeginnersLink />,{' '}
      <LearnNodeLink />, <ES6Link /> and <AdvancedReactLink />
    </div>
  ) : null;

const AffiliateLink = props => {
  let linkText;
  switch (props.ad) {
    case 'arrow':
      linkText = (
        <div>
          <p>
            If arrow functions still look like hieroglyphics to you, I can
            thoroughly recommend Wes Bos’ <BeginnerJavaScriptLink /> and{' '}
            <ES6Link /> courses.
          </p>
          <p>They will really help you to grok and enjoy modern JS syntax.</p>
          <Sale />
        </div>
      );
      break;
    case 'jquery':
      linkText = (
        <div>
          <p>
            If you need to brush up on pure JavaScript before you hang up the
            dollar sign, I can thoroughly recommend Wes Bos’{' '}
            <BeginnerJavaScriptLink /> and <ES6Link /> courses.
          </p>
          <p>
            They will really open your eyes to modern JS and how much it has
            changed (for the better!).
          </p>
          <Sale />
        </div>
      );
      break;
    case 'react':
      linkText = (
        <div>
          <p>
            If you want go deeper with React, I can thoroughly recommend Wes
            Bos’ courses <ReactForBeginnersLink /> and <AdvancedReactLink />.
          </p>
          <p>
            I’ve personally completed both and they really helped me level up my
            React game.
          </p>
          <Sale />
        </div>
      );
      break;
    case 'graphql':
      linkText = (
        <div>
          <p>Want to go deeper with GraphQL?</p>
          <p>
            Wes Bos has just released his new <AdvancedReactLink />, covering
            full stack react and GraphQL with Prisma and Apollo.
          </p>
          <Sale />
        </div>
      );
      break;

    case 'node':
      linkText = (
        <div>
          <p>
            If you want to further upgrade your Node knowledge, I can thoroughly
            recommend Wes Bos’ <LearnNodeLink /> course.
          </p>
          <p>
            Learn to build full stack applications in Node by building a fully
            featured restaurant app.
          </p>
          <Sale />
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
