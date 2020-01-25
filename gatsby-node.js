const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const select = require(`unist-util-select`);
const fs = require(`fs-extra`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              limit: 1000
              sort: { order: ASC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    status
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;
        // Create blog posts pages.
        _.each(posts, (edge, index) => {
          let prev = null;
          let next = null;
          let checkIndex = index - 1;
          while (checkIndex >= 0 && prev === null) {
            if (posts[checkIndex].node.frontmatter.status !== 'DRAFT') {
              prev = posts[checkIndex].node;
            }
            checkIndex--;
          }

          checkIndex = index + 1;
          while (checkIndex < posts.length && next === null) {
            if (posts[checkIndex].node.frontmatter.status !== 'DRAFT') {
              next = posts[checkIndex].node;
            }
            checkIndex++;
          }

          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              status: edge.node.frontmatter.status,
              prev,
              next
            }
          });
        });
      })
    );
  });
};
