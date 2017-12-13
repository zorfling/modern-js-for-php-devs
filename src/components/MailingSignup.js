import React from 'react';

import { rhythm } from '../utils/typography';

const MailingSignup = () => (
  <div>
    <link
      href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
      rel="stylesheet"
      type="text/css"
    />
    <div
      id="mc_embed_signup"
      style={{
        background: `#fff`,
        clear: `left`,
        font: `14px Helvetica,Arial,sans-serif`,
        width: `100%`
      }}
    >
      <form
        action="https://modernjsforphpdevs.us17.list-manage.com/subscribe/post?u=a66a488dd0b8de9413165b734&amp;id=db699090c0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <label htmlFor="mce-EMAIL">
            Like what you've read? Why not subscribe to our mailing list!
          </label>
          <input
            type="email"
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
          <div
            style={{ position: `absolute`, left: `-5000px` }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_a66a488dd0b8de9413165b734_db699090c0"
              tabIndex="-1"
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default MailingSignup;
