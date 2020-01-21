import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import ReactDisqusThread from 'react-disqus-thread';

import AffiliateLink from '../components/AffiliateLink';
import Bio from '../components/Bio';
import MailingSignup from '../components/MailingSignup';
import { rhythm, scale } from '../utils/typography';

class BlogPostTemplate extends React.PureComponent {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const pathContext = this.props.pathContext;
    const { prev, next } = pathContext;
    const rootUrl = 'https://www.modernjsforphpdevs.com';

    return (
      <div>
        <Helmet
          title={`${post.frontmatter.title} | ${siteTitle}`}
          meta={[
            {
              name: 'article:published_time',
              content: post.frontmatter.isoDate
            },
            {
              name: 'og:title',
              content: `${post.frontmatter.title} | ${siteTitle}`
            },
            { name: 'og:description', content: post.excerpt },
            // {
            //   name: 'og:image',
            //   content: `${rootUrl}${post.frontmatter.featuredImage.childImageSharp.sizes.src}`
            // },
            { name: 'og:url', content: `${rootUrl}${post.frontmatter.path}` },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@modernjsphpdevs' },
            { name: 'twitter:creator', content: '@zorfling' },
            { name: 'og:type', content: 'article' },
            { name: 'og:locale', content: 'en_GB' }
          ]}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          <time dateTime={post.frontmatter.isoDate}>
            {post.frontmatter.date}
          </time>
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <AffiliateLink ad={post.frontmatter.ad} />
        <MailingSignup />
        <Bio />
        <h2>More posts</h2>
        <nav>
          {prev && (
            <p style={{ textAlign: 'left' }}>
              <Link to={prev.frontmatter.path}>
                &lt;- {prev.frontmatter.title}
              </Link>
            </p>
          )}
          {next && (
            <p style={{ textAlign: 'right' }}>
              <Link to={next.frontmatter.path}>
                {next.frontmatter.title} -&gt;
              </Link>
            </p>
          )}
        </nav>
        <ReactDisqusThread
          shortname="modern-js-for-php-devs"
          identifier={post.frontmatter.path}
          title={post.frontmatter.title}
        />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        isoDate: date
        path
        ad
      }
    }
  }
`;
