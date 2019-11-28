import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const BlackFriday = () => {
  return (
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
        BLACK FRIDAY SALE ON NOW! ALL COURSES 50% OFF!
      </h3>
      Applies to{' '}
      <OutboundLink href="https://ReactForBeginners.com/friend/JS4PHP">
        React for Beginners
      </OutboundLink>
      ,{' '}
      <OutboundLink href="https://LearnNode.com/friend/JS4PHP">
        Learn Node
      </OutboundLink>
      ,{' '}
      <OutboundLink href="https://es6.io/friend/JS4PHP">
        ES6+ For Everyone
      </OutboundLink>{' '}
      and{' '}
      <OutboundLink href="https://AdvancedReact.com/friend/JS4PHP">
        Advanced React
      </OutboundLink>
    </div>
  );
};

export default BlackFriday;
