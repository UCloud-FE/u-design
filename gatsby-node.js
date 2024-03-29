const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    // Define a template
    const specTemplate = path.resolve(`./src/templates/spec.tsx`);
    const docsTemplate = path.resolve(`./src/templates/docs.tsx`);
    const componentTemplate = path.resolve(`./src/templates/component.tsx`);
    const categoryTemplate = path.resolve(`./src/templates/category.tsx`);

    // Get all markdown sorted by date
    const result = await graphql(
        `
            {
                allMdx(sort: { fields: [frontmatter___order], order: DESC }, limit: 10000) {
                    nodes {
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
        `,
    );

    if (result.errors) {
        reporter.panicOnBuild(`There was an error loading`, result.errors);
        return;
    }

    const posts = result.data.allMdx.nodes;

    // Create posts pages
    if (posts.length > 0) {
        posts.forEach((post, index) => {
            // const previousPostId = index === 0 ? null : posts[index - 1].id;
            // const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;
            let template = specTemplate;
            let slug = post.fields.slug;
            let componentApiDocsGlob;
            let componentName;
            let componentDemosGlob;

            if (post.fields.slug.indexOf('/spec/') === 0) {
                template = specTemplate;
            } else if (post.fields.slug.indexOf('/component/category/') === 0) {
                template = categoryTemplate;
            } else if (
                post.fields.slug.indexOf('/component/') === 0 &&
                post.fields.slug.indexOf('/component/api-docs/') < 0
            ) {
                template = componentTemplate;
                componentName = slug.split('/')[3];
                componentApiDocsGlob = `**\/content\/component\/api-docs\/${componentName}\/*.md`;
                componentDemosGlob = `**\/component\/api-docs\/${componentName}\/__demo__\/**`;
                slug = slug.split('list/').join('');
            } else if (post.fields.slug.indexOf('/docs/') === 0) {
                template = docsTemplate;
            }

            createPage({
                path: slug,
                component: template,
                context: {
                    id: post.id,
                    componentApiDocsGlob,
                    componentName,
                    componentDemosGlob,
                    // previousPostId,
                    // nextPostId,
                },
            });
        });
    }
};

exports.onCreateNode = async ({ node, actions, getNode, loadNodeContent }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode });

        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }

    if (node.internal.type === `File` && node?.relativePath?.indexOf('__demo__') >= 0) {
        try{
            const content = await loadNodeContent(node);
            actions.createNodeField({ node, name: `content`, value: content });
        } catch(e){
            console.error(e);
        }
    };
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    // Explicitly define the siteMetadata {} object
    // This way those will always be defined even if removed from gatsby-config.js

    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
    createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      category: String
      order: Int
      description: String
      date: Date @dateformat
      category: String
      components: String
      url: String
      match: String
      categoryOrder: String
    }

    type Fields {
      slug: String
    }
  `);
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html' || stage === 'develop-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /react-components/,
                        use: loaders.null(),
                    },
                    {
                        test: /__demo__/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }
};
