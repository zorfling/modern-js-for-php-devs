import React from 'react';

import { rhythm } from '../utils/typography';

const Bio = () => (
  <div
    style={{
      display: 'flex',
      marginBottom: rhythm(2.5)
    }}
  >
    <img
      src="https://1.gravatar.com/avatar/13dbc56733c2cc66fbc698cdb07fec12"
      alt={`Chris Colborne`}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        width: rhythm(2),
        height: rhythm(2),
        borderRadius: `50%`
      }}
    />
    <p>
      Written by <strong>Chris Colborne</strong> who lives and works in
      Brisbane, Australia building useful things.{' '}
      <a href="https://twitter.com/zorfling">
        You should follow him on Twitter
      </a>
    </p>
  </div>
);

export default Bio;
