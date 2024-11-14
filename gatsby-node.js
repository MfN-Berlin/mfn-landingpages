/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require('path');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  const imageMap = {};
  result.data.allFile.edges.forEach(({ node }) => {
    if (node.extension === 'svg') {
      imageMap[node.relativePath] = node.publicURL;
    } else if (node.childImageSharp) {
      imageMap[node.relativePath] = node.childImageSharp.gatsbyImageData;
    }
  });

  createPage({
    path: "/besuch-planen",
    component: path.resolve(`./src/pages/besuch-planen.js`),
    context: { imageMap },
  });

  // Repeat for other pages as needed
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Publications2020Json implements Node {
      publications_2020_merged: [Publication]
    }
    type Publication {
      paper_id: Int
      mfn_authors: String
      unknown_authors: String
      publication_date: String
      year: Int
      title: String
      journal: String
      volume: Int
      issue: String
      page_info: String
      publisher: String
      identifier_type: String
      upload_id: String
      access: String
      publication_type: String
      publication_subtype: String
      keyword: String
    }
  `
  createTypes(typeDefs)
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // Only modify webpack config during build stage
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      optimization: {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            runtime: {
              name: 'runtime',
              enforce: true,
              priority: 30,
              minChunks: 1,
              test: /webpack-runtime/
            },
            commons: {
              name: 'commons',
              enforce: true,
              priority: 20,
              minChunks: 2
            },
            vendors: {
              name: 'vendors',
              test: /[\\/]node_modules[\\/]/,
              enforce: true,
              priority: 10
            },
            styles: {
              name: 'styles',
              test: /\.(css|scss)$/,
              chunks: 'all',
              enforce: true,
              priority: 40
            }
          }
        }
      },
      output: {
        filename: '[name].js',
        publicPath: '/mfn-landingpages/'
      }
    });
  }
};
