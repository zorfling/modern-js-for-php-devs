import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

import Bio from '../components/Bio';
import { rhythm } from '../utils/typography';

const BlogIndex = props => {
  const posts = get(props, 'data.allMarkdownRemark.edges');

  return (
    <div>
      <Helmet title={get(props, 'data.site.siteMetadata.title')} />

      <Bio />
      {posts.map(({ node }) => {
        if (node.path !== '/404/') {
          return (
            <div key={node.frontmatter.path}>
              <h2
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link
                  style={{ boxShadow: 'none', color: '#4A4A4A' }}
                  to={node.frontmatter.path}
                >
                  {node.frontmatter.title}
                </Link>
              </h2>
              <Link
                style={{ boxShadow: 'none', color: '#4A4A4A' }}
                to={node.frontmatter.path}
              >
                <Img
                  sizes={node.frontmatter.featuredImage.childImageSharp.sizes}
                />
              </Link>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <hr
                  style={{
                    width: '25%',
                    marginBottom: '0',
                    marginTop: '1.5rem'
                  }}
                ></hr>
              </div>
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
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            title
          }
        }
      }
    }
  }
`;
