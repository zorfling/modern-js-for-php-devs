import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import { rhythm } from '../utils/typography';

const BlogIndex = props => {
  const posts = get(props, 'data.allMarkdownRemark.edges');

  return (
    <div>
      <Helmet title={get(props, 'data.site.siteMetadata.title')} />

      <Bio />
      {posts.map(post => {
        if (post.node.path !== '/404/') {
          return (
            <div key={post.node.frontmatter.path}>
              <h2
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link
                  style={{ boxShadow: 'none', color: '#4A4A4A' }}
                  to={post.node.frontmatter.path}
                >
                  {post.node.frontmatter.title}
                </Link>
              </h2>
              <small>{post.node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

BlogIndex.propTypes = {
  route: React.PropTypes.object
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { status: { eq: "PUBLISHED" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
