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

  // Aktualisierte Pfade für die deutschen Seiten
  const dePages = [
    {
      path: "/de/besuch-planen",
      component: path.resolve(`./src/pages/de/besuch-planen.js`),
    },
    {
      path: "/de/museum",
      component: path.resolve(`./src/pages/de/museum.js`),
    },
    {
      path: "/de/forschung",
      component: path.resolve(`./src/pages/de/forschung.js`),
    },
    {
      path: "/de/mitmachen",
      component: path.resolve(`./src/pages/de/mitmachen.js`),
    },
    {
      path: "/de/forschung/publikationen",
      component: path.resolve(`./src/pages/de/forschung/publikationen.js`),
    },
    {
      path: "/de/forschung/team-projekte",
      component: path.resolve(`./src/pages/de/forschung/team-projekte.js`),
    }
  ];

  dePages.forEach(page => {
    createPage({
      path: page.path,
      component: page.component,
      context: {},
    });
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
