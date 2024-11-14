/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    path: "/mfn-landingpages/besuch-planen",
    component: path.resolve(`./src/pages/besuch-planen.js`),
    context: { imageMap },
  });
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

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  const config = getConfig();

  if (stage === 'build-javascript' || stage === 'develop') {
    // Remove existing MiniCssExtractPlugin instances
    config.plugins = config.plugins.filter(plugin => {
      return plugin.constructor.name !== 'MiniCssExtractPlugin';
    });

    // Add MiniCssExtractPlugin with fixed filename
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].css',
      })
    );

    // Configure output
    config.output = {
      ...config.output,
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: '/',
      hashFunction: 'xxhash64',
      hashDigest: 'hex',
      hashDigestLength: 8,
    };

    // Configure font handling
    config.module.rules = config.module.rules.map(rule => {
      // Handle CSS
      if (String(rule.test).includes('css')) {
        return {
          ...rule,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '/',
              },
            },
            'css-loader',
            'postcss-loader',
          ],
        };
      }
      // Handle fonts
      if (String(rule.test).includes('woff') || String(rule.test).includes('woff2')) {
        return {
          ...rule,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/fonts/[name].[ext]',
                publicPath: '/',
              },
            },
          ],
        };
      }
      return rule;
    });

    actions.replaceWebpackConfig(config);
  }
};

// Keep the babel config
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-transform-remove-console',
    options: {
      exclude: ['error', 'warn'],
    },
  });
};
