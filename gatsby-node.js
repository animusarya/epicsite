const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allSanityPage {
        edges {
          node {
            _id
            title
            slug {
              current
            }
          }
        }
      }
      allSanityArticle {
        edges {
          node {
            _id
            title
            slug {
              current
            }
          }
        }
      }
      allSanityServices {
        edges {
          node {
            _id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    return reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query');
  }

  const pages = result.data.allSanityPage.edges || [];
  const article = result.data.allSanityArticle.edges || [];
  const myServices = result.data.allSanityServices.edges || [];

  pages.forEach(({ node }) => {
    createPage({
      path: `page/${node.slug.current}`,
      component: path.resolve(`src/templates/pageView.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  article.forEach(({ node }) => {
    createPage({
      path: `article/${node.slug.current}`,
      component: path.resolve(`src/templates/articleView.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  myServices.forEach(({ node }) => {
    createPage({
      path: `service/${node.slug.current}`,
      component: path.resolve(`src/templates/services.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
};
