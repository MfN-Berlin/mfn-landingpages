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
exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  // Only create pages you specifically need
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
    // Update output configuration
    config.output = {
      ...config.output,
      filename: `[name].js`,
      chunkFilename: `[name].js`,
      // Ensure consistent path for all assets
      publicPath: `/mfn-landingpages/`,
    };

    // Remove fingerprinting from chunk names
    if (config.optimization && config.optimization.splitChunks) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }

    // Update MiniCssExtractPlugin configuration
    config.plugins = config.plugins.map(plugin => {
      if (plugin.constructor.name === 'MiniCssExtractPlugin') {
        return new MiniCssExtractPlugin({
          filename: `[name].css`,
          chunkFilename: `[name].css`,
        });
      }
      return plugin;
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
