import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import ReactDisqusThread from 'react-disqus-thread';

import AffiliateLink from '../components/AffiliateLink';
import Bio from '../components/Bio';
import MailingSignup from '../components/MailingSignup';
import { rhythm, scale } from '../utils/typography';
import Img from 'gatsby-image';

class BlogPostTemplate extends React.PureComponent {
  render() {
    const {
      data: {
        site: {
          siteMetadata: { siteUrl }
        }
      }
    } = this.props;

    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const pathContext = this.props.pathContext;
    const { prev, next } = pathContext;

    const socialMetadata = [
      {
        name: 'article:published_time',
        content: post.frontmatter.isoDate
      },
      {
        property: 'og:title',
        content: `${post.frontmatter.title} | ${siteTitle}`
      },
      { property: 'og:description', content: post.excerpt },
      {
        property: 'og:url',
        content: `${siteUrl}${post.frontmatter.path}`
      },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: '@modernjsphpdevs' },
      { property: 'twitter:creator', content: '@zorfling' },
      { property: 'og:type', content: 'article' },
      { property: 'og:locale', content: 'en_GB' }
    ];

    if (post.frontmatter.featuredImage) {
      socialMetadata.push({
        property: 'og:image',
        content: `${siteUrl}${post.frontmatter.featuredImage.childImageSharp.sizes.src}`
      });
    }

    return (
      <div>
        <Helmet
          title={`${post.frontmatter.title} | ${siteTitle}`}
          meta={socialMetadata}
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
        {post.frontmatter.featuredImage && (
          <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
        )}
        <small style={{ display: 'block', marginBottom: '1rem' }}>
          {post.frontmatter.attribution}
        </small>
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
        siteUrl
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
        attribution
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
