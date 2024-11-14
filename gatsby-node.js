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
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      optimization: {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.(css|scss)$/,
              chunks: 'all',
              enforce: true,
              priority: 40
            },
            runtime: {
              name: 'runtime',
              test: /webpack-runtime/,
              enforce: true,
              priority: 30
            },
            framework: {
              name: 'framework',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|gatsby)[\\/]/,
              chunks: 'all',
              priority: 20
            },
            vendors: {
              name: 'vendors',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              priority: 10
            }
          }
        },
        runtimeChunk: {
          name: 'runtime'
        }
      },
      output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/mfn-landingpages/'
      }
    });
  }

  if (stage === 'build-css') {
    actions.setWebpackConfig({
      optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.(css|scss)$/,
              chunks: 'all',
              enforce: true
            }
          }
        }
      }
    });
  }
};
